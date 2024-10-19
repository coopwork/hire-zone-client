import Container from '@/shared/ui/wrappers/container.tsx';
import FavoriteJobProjects from '@/shared/components/blocks/favorite-job-projects.tsx';
import { usePageInfo } from '@/shared/hooks/usePageInfo.tsx';
import { useLayoutEffect } from 'react';

const Favorites = () => {
  const { setPageInfo } = usePageInfo();

  useLayoutEffect(() => {
    setPageInfo({
      title: 'Избранное',
      name: 'Избранное',
    });
  }, []);
  return (
    <Container>
      <FavoriteJobProjects />
    </Container>
  );
};

export default Favorites;
