import ResponseCard from '@/shared/components/cards/response-card.tsx';

const ResponseCardList = () => {
  return (
    <div className="flex flex-col gap-4">
      {[...Array(10)].map((_, index) => (
        <ResponseCard key={index} />
      ))}
    </div>
  );
};

export default ResponseCardList;
