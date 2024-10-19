import Container from '@/shared/ui/wrappers/container.tsx';
import { usePageInfo } from '@/shared/hooks/usePageInfo.tsx';
import { useLayoutEffect } from 'react';

const SignUp = () => {
  const { setPageInfo } = usePageInfo();

  useLayoutEffect(() => {
    setPageInfo({
      title: `Авторизация`,
      name: `Авторизация`,
    });
  }, []);
  return (
    <Container>
      <div>sign up page</div>
    </Container>
  );
};

export default SignUp;
