import Container from '@/shared/ui/wrappers/container.tsx';
import ResponseCardList from '@/shared/components/lists/response-card-list.tsx';
import { usePageInfo } from '@/shared/hooks/usePageInfo.tsx';
import { useLayoutEffect } from 'react';

const Responses = () => {
  const { setPageInfo } = usePageInfo();

  useLayoutEffect(() => {
    setPageInfo({
      title: `Отклики`,
      name: `Отклики`,
    });
  }, []);
  return (
    <Container>
      <ResponseCardList />
    </Container>
  );
};

export default Responses;
