from django.test import TestCase
from django.core import mail
from rest_framework import status

from .helpers import create_user, create_staff, auth_client


class SendNotificationTests(TestCase):

    def setUp(self):
        self.staff  = create_staff()
        self.user   = create_user('alice', email='alice@test.com')
        self.user2  = create_user('bob',   email='bob@test.com')
        self.client = auth_client(self.staff)
        self.url    = '/api/emails/send/'
        mail.outbox.clear()

    # 4A: Envío individual a usuario específico → sent: 1
    def test_send_individual_notification(self):
        resp = self.client.post(self.url, {
            'user_id': self.user.id,
            'subject': 'Oferta especial',
            'message': 'Tienes un 20% de descuento',
        })
        self.assertEqual(resp.status_code, status.HTTP_200_OK)
        self.assertEqual(resp.data['sent'], 1)
        self.assertEqual(resp.data['failed'], 0)
        self.assertEqual(len(mail.outbox), 1)
        self.assertIn('alice@test.com', mail.outbox[0].to)
        self.assertIn('Oferta especial', mail.outbox[0].subject)
        self.assertIn('alice', mail.outbox[0].body)

    # 4A: user_id de un usuario staff → 400
    def test_send_to_staff_user_returns_400(self):
        resp = self.client.post(self.url, {
            'user_id': self.staff.id,
            'subject': 'Test',
            'message': 'Test',
        })
        self.assertEqual(resp.status_code, status.HTTP_400_BAD_REQUEST)

    # 4A: user_id de usuario inactivo → 400
    def test_send_to_inactive_user_returns_400(self):
        self.user.is_active = False
        self.user.save()
        resp = self.client.post(self.url, {
            'user_id': self.user.id,
            'subject': 'Test',
            'message': 'Test',
        })
        self.assertEqual(resp.status_code, status.HTTP_400_BAD_REQUEST)

    # 4B: Envío masivo sin user_id → sent: N (solo no-staff activos)
    def test_send_mass_notification(self):
        resp = self.client.post(self.url, {
            'subject': 'Aviso importante',
            'message': 'Mantenimiento programado',
        })
        self.assertEqual(resp.status_code, status.HTTP_200_OK)
        # alice + bob = 2 (staff se excluye del masivo)
        self.assertEqual(resp.data['sent'], 2)
        self.assertEqual(resp.data['failed'], 0)
        self.assertEqual(len(mail.outbox), 2)
        recipients = {m.to[0] for m in mail.outbox}
        self.assertIn('alice@test.com', recipients)
        self.assertIn('bob@test.com', recipients)

    # 4B: Envío masivo excluye inactivos
    def test_send_mass_excludes_inactive_users(self):
        self.user.is_active = False
        self.user.save()
        resp = self.client.post(self.url, {
            'subject': 'Solo activos',
            'message': 'Test',
        })
        self.assertEqual(resp.status_code, status.HTTP_200_OK)
        # solo bob está activo y no-staff
        self.assertEqual(resp.data['sent'], 1)

    # 4B: 0 usuarios no-staff activos → sent: 0
    def test_send_mass_zero_recipients(self):
        self.user.is_active = False
        self.user.save()
        self.user2.is_active = False
        self.user2.save()
        resp = self.client.post(self.url, {
            'subject': 'Test',
            'message': 'Test',
        })
        self.assertEqual(resp.status_code, status.HTTP_200_OK)
        self.assertEqual(resp.data['sent'], 0)
        self.assertEqual(resp.data['failed'], 0)

    # 4C: Sin token staff → 403 Forbidden
    def test_regular_user_gets_403(self):
        client = auth_client(self.user)
        resp = client.post(self.url, {
            'user_id': self.user.id,
            'subject': 'Test',
            'message': 'Test',
        })
        self.assertEqual(resp.status_code, status.HTTP_403_FORBIDDEN)

    def test_unauthenticated_gets_401(self):
        from rest_framework.test import APIClient
        resp = APIClient().post(self.url, {
            'subject': 'Test',
            'message': 'Test',
        })
        self.assertEqual(resp.status_code, status.HTTP_401_UNAUTHORIZED)
