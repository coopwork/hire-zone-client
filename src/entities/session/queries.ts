import { useQuery } from '@tanstack/react-query';
import getUserProfile from '@/shared/api/hire-req/get.user-profile.ts';

const SESSION_KEYS: string[] = ['session'];

export function useSessionQuery() {
  return useQuery({
    queryKey: SESSION_KEYS,
    queryFn: getUserProfile,
    retry: false,
    staleTime: 5 * 60 * 1000,
  });
}

// export function useResetSession() {
//   const queryClient = useQueryClient();
//   return () => queryClient.removeQueries(SESSION_KEYS);
// }
