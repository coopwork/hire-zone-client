import { useParams } from 'react-router-dom';
import Container from '@/shared/ui/wrappers/container.tsx';
import { usePageInfo } from '@/shared/hooks/usePageInfo.tsx';
import { useLayoutEffect } from 'react';

const HintDetails = () => {
  const { hintId } = useParams();
  const { setPageInfo } = usePageInfo();

  useLayoutEffect(() => {
    setPageInfo({
      title: 'Помощь',
      name: 'Помощь',
    });
  }, []);
  return (
    <Container>
      <div>hint details: {hintId}</div>
    </Container>
  );
};

export default HintDetails;
