import { Typography } from '@/shared/ui/typography.tsx';
import ProjectCardList from '@/shared/components/lists/project-card-list.tsx';

const FavoriteProject = () => {
  return (
    <div>
      <Typography className="text-center my-2.5" tag="h6">
        10 Сохраненных проектов
      </Typography>
      <ProjectCardList />
    </div>
  );
};

export default FavoriteProject;
