import { hireCRM } from '@/shared/api/hire-instance.ts';

type PostAuthBody = {
  email: string;
  password: string;
};

export function postSignUp(body: PostAuthBody) {
  return hireCRM.post('/users/register', body);
}

export function postSignIn(body: PostAuthBody) {
  return hireCRM.post('/auth/login', body);
}
