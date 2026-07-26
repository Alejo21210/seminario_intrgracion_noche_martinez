import type { AdminUser } from '../entities/admin-user.entity'

export function getDisplayName(user: AdminUser): string {
  const full = [user.first_name, user.last_name].filter(Boolean).join(' ')
  return full || user.username
}
