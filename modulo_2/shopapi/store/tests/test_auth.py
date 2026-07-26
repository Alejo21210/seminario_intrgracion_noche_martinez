from django.test import TestCase
from django.core import mail
from rest_framework.test import APIClient
from rest_framework import status
from django.contrib.auth.models import User
from django.utils.encoding import force_bytes
from django.utils.http import urlsafe_base64_encode
from django.contrib.auth.tokens import default_token_generator

from .helpers import create_user, get_tokens


class RegisterTests(TestCase):

    def setUp(self):
        self.client = APIClient()
        self.url    = '/api/auth/register/'
        self.data   = {
            'username':  'john',
            'email':     'john@test.com',
            'password':  'Pass1234!',
            'password2': 'Pass1234!',
        }

    def test_register_returns_jwt(self):
        resp = self.client.post(self.url, self.data)
        self.assertEqual(resp.status_code, status.HTTP_201_CREATED)
        self.assertIn('access',   resp.data)
        self.assertIn('refresh',  resp.data)
        self.assertIn('is_staff', resp.data)
        self.assertFalse(resp.data['is_staff'])

    def test_register_sends_welcome_email(self):
        self.client.post(self.url, self.data)
        self.assertEqual(len(mail.outbox), 1)
        email = mail.outbox[0]
        self.assertIn('john@test.com', email.to)
        self.assertIn('john', email.body)
        self.assertIn('john@test.com', email.body)

    def test_register_passwords_do_not_match(self):
        self.data['password2'] = 'Different!'
        resp = self.client.post(self.url, self.data)
        self.assertEqual(resp.status_code, status.HTTP_400_BAD_REQUEST)

    def test_register_duplicate_username(self):
        create_user('john')
        resp = self.client.post(self.url, self.data)
        self.assertEqual(resp.status_code, status.HTTP_400_BAD_REQUEST)

    def test_register_duplicate_email(self):
        create_user('other', email='john@test.com')
        resp = self.client.post(self.url, self.data)
        self.assertEqual(resp.status_code, status.HTTP_400_BAD_REQUEST)

    def test_register_short_password(self):
        self.data['password'] = self.data['password2'] = '123'
        resp = self.client.post(self.url, self.data)
        self.assertEqual(resp.status_code, status.HTTP_400_BAD_REQUEST)


class LoginTests(TestCase):

    def setUp(self):
        self.client = APIClient()
        self.user   = create_user('ana', password='Pass1234!')

    def test_login_returns_tokens(self):
        resp = self.client.post('/api/auth/login/', {
            'username': 'ana', 'password': 'Pass1234!'
        })
        self.assertEqual(resp.status_code, status.HTTP_200_OK)
        self.assertIn('access',   resp.data)
        self.assertIn('refresh',  resp.data)
        self.assertIn('username', resp.data)
        self.assertIn('is_staff', resp.data)

    def test_login_invalid_credentials(self):
        resp = self.client.post('/api/auth/login/', {
            'username': 'ana', 'password': 'wrong'
        })
        self.assertEqual(resp.status_code, status.HTTP_401_UNAUTHORIZED)


class RefreshLogoutTests(TestCase):

    def setUp(self):
        self.client  = APIClient()
        self.user    = create_user('bob')
        self.access, self.refresh = get_tokens(self.user)

    def test_refresh_returns_new_access(self):
        resp = self.client.post('/api/auth/token/refresh/', {'refresh': self.refresh})
        self.assertEqual(resp.status_code, status.HTTP_200_OK)
        self.assertIn('access', resp.data)

    def test_logout_blacklists_refresh(self):
        self.client.credentials(HTTP_AUTHORIZATION=f'Bearer {self.access}')
        resp = self.client.post('/api/auth/logout/', {'refresh': self.refresh})
        self.assertEqual(resp.status_code, status.HTTP_200_OK)
        resp2 = self.client.post('/api/auth/token/refresh/', {'refresh': self.refresh})
        self.assertEqual(resp2.status_code, status.HTTP_401_UNAUTHORIZED)

    def test_logout_without_refresh_returns_400(self):
        self.client.credentials(HTTP_AUTHORIZATION=f'Bearer {self.access}')
        resp = self.client.post('/api/auth/logout/', {})
        self.assertEqual(resp.status_code, status.HTTP_400_BAD_REQUEST)


class PasswordResetTests(TestCase):

    def setUp(self):
        self.client = APIClient()
        self.user   = create_user('reset_user', email='reset@test.com')
        self.uid    = urlsafe_base64_encode(force_bytes(self.user.pk))
        self.token  = default_token_generator.make_token(self.user)
        mail.outbox.clear()

    # 2A: Solicitar reset → correo con enlace
    def test_password_reset_request_sends_email(self):
        resp = self.client.post('/api/auth/password-reset/', {
            'email': 'reset@test.com'
        })
        self.assertEqual(resp.status_code, status.HTTP_200_OK)
        self.assertEqual(len(mail.outbox), 1)
        email = mail.outbox[0]
        self.assertIn('reset@test.com', email.to)
        self.assertIn(self.uid, email.body)
        self.assertIn(self.token, email.body)

    # 2A: Email no registrado → 200 (no revela existencia)
    def test_password_reset_request_unregistered_email(self):
        resp = self.client.post('/api/auth/password-reset/', {
            'email': 'unknown@test.com'
        })
        self.assertEqual(resp.status_code, status.HTTP_200_OK)
        self.assertEqual(len(mail.outbox), 0)

    # 2B: Confirmar reset con token → 200 OK
    def test_password_reset_confirm_valid(self):
        resp = self.client.post('/api/auth/password-reset/confirm/', {
            'uid':           self.uid,
            'token':         self.token,
            'new_password':  'NewPass5678!',
            'new_password2': 'NewPass5678!',
        })
        self.assertEqual(resp.status_code, status.HTTP_200_OK)

    # 2C: Login con nueva contraseña → nuevos tokens JWT
    def test_login_after_password_reset(self):
        self.client.post('/api/auth/password-reset/confirm/', {
            'uid':           self.uid,
            'token':         self.token,
            'new_password':  'NewPass5678!',
            'new_password2': 'NewPass5678!',
        })
        resp = self.client.post('/api/auth/login/', {
            'username': 'reset_user',
            'password': 'NewPass5678!',
        })
        self.assertEqual(resp.status_code, status.HTTP_200_OK)
        self.assertIn('access', resp.data)
        self.assertIn('refresh', resp.data)

    # 2D: Token ya usado → 400 inválido
    def test_password_reset_token_reuse_returns_400(self):
        self.client.post('/api/auth/password-reset/confirm/', {
            'uid':           self.uid,
            'token':         self.token,
            'new_password':  'NewPass5678!',
            'new_password2': 'NewPass5678!',
        })
        resp = self.client.post('/api/auth/password-reset/confirm/', {
            'uid':           self.uid,
            'token':         self.token,
            'new_password':  'AnotherPass1!',
            'new_password2': 'AnotherPass1!',
        })
        self.assertEqual(resp.status_code, status.HTTP_400_BAD_REQUEST)

    def test_password_reset_confirm_wrong_uid(self):
        resp = self.client.post('/api/auth/password-reset/confirm/', {
            'uid':           'invalid',
            'token':         self.token,
            'new_password':  'NewPass5678!',
            'new_password2': 'NewPass5678!',
        })
        self.assertEqual(resp.status_code, status.HTTP_400_BAD_REQUEST)

    def test_password_reset_confirm_wrong_token(self):
        resp = self.client.post('/api/auth/password-reset/confirm/', {
            'uid':           self.uid,
            'token':         'wrong-token',
            'new_password':  'NewPass5678!',
            'new_password2': 'NewPass5678!',
        })
        self.assertEqual(resp.status_code, status.HTTP_400_BAD_REQUEST)
