import { hireCRM } from '@/shared/api/hire-instance.ts';

export default async function getUserProfile() {
  return await hireCRM.get('/items/telegram');
}
