import Container from '@/shared/ui/wrappers/container.tsx';
import { usePageInfo } from '@/shared/hooks/usePageInfo.tsx';
import { useLayoutEffect } from 'react';
import Stepper from '@/shared/ui/stepper.tsx';
import { onboardingSteps } from '@/shared/components/steps/onboarding/steps.tsx';
import { useMutation } from '@tanstack/react-query';
import { toast } from 'sonner';
import { postSignUp } from '@/shared/api/hire-req/post.auth.ts';
import useUser from '@/shared/hooks/useUser.tsx';
import { useNavigate } from 'react-router-dom';
import { PATHS } from '@/shared/constants/paths.ts';

const SignUp = () => {
  const navigate = useNavigate();
  const { user, setUser } = useUser();
  const { setPageInfo } = usePageInfo();

  const signUpMutation = useMutation({
    mutationFn: () => {
      return postSignUp({
        email: `${user?.firstName}_${user?.id}@gmail.com`,
        password: `${user?.id}`,
      });
    },
    onSuccess: () => {
      setUser({
        isAuth: true,
      });
      toast.success('Регистрация прошла успешно');
      navigate(PATHS.PROFILE);
    },
    onError: () => {
      toast.error('Ошибка! Что-то пошло не так');
    },
  });

  useLayoutEffect(() => {
    setPageInfo({
      title: `Авторизация`,
      name: `Авторизация`,
    });
  }, []);
  return (
    <Container className="h-screen overflow-hidden">
      <Stepper
        steps={onboardingSteps}
        finishAction={() => signUpMutation.mutate()}
      />
    </Container>
  );
};

export default SignUp;
