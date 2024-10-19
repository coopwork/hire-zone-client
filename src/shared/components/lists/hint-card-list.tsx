import HintCard from '@/shared/components/cards/hint-card.tsx';

const HintCardList = () => {
  return (
    <section className="flex gap-2 w-full py-4 scroll-hide overflow-x-auto">
      {[...Array(5)].map((_, index) => (
        <HintCard hint={{ id: index + 1 }} key={index} />
      ))}
    </section>
  );
};

export default HintCardList;
