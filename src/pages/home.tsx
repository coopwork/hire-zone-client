import Container from '@/shared/ui/wrappers/container.tsx';
import SearchJobProjects from '@/shared/components/blocks/search-job-projects.tsx';
import { usePageInfo } from '@/shared/hooks/usePageInfo.tsx';
import { useLayoutEffect } from 'react';

const Home = () => {
  const { setPageInfo } = usePageInfo();

  useLayoutEffect(() => {
    setPageInfo({
      title: 'Работа',
      name: 'Работа',
    });
  }, []);
  return (
    <Container>
      <SearchJobProjects />
    </Container>
  );
};

export default Home;
