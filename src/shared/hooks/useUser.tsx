import { useContext } from 'react';
import { UserContext } from '@/features/user-profile/user-profile.tsx';

export default function useUser() {
  return useContext(UserContext);
}
