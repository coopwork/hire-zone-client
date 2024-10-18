import { Typography } from '@/shared/ui/typography.tsx';
import JobCardList from '@/shared/components/lists/job-card-list.tsx';

const FavoriteJob = () => {
  return (
    <div>
      <Typography className="text-center my-2.5" tag="h6">
        10 Сохраненных вакансий
      </Typography>
      <JobCardList />
    </div>
  );
};

export default FavoriteJob;
