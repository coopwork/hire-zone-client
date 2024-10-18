import JobCard from '@/shared/components/cards/job-card.tsx';

const JobCardList = () => {
  return (
    <div className="flex flex-col gap-4">
      {[...Array(10)].map((_, index) => (
        <JobCard
          details={{
            id: index + 1,
            title: `Backend React Developer ${index + 1}`,
          }}
          key={index}
        />
      ))}
    </div>
  );
};

export default JobCardList;
