import JobCardList from '@/shared/components/lists/job-card-list.tsx';
import { Typography } from '@/shared/ui/typography.tsx';
import HintCardList from '@/shared/components/lists/hint-card-list.tsx';
import SearchInputElement from '@/shared/components/blocks/search-input-element.tsx';
import SearchFilterElement from '@/shared/components/blocks/search-filter-element.tsx';
import SearchMicElement from '@/shared/components/blocks/search-mic-element.tsx';

const SearchJob = () => {
  return (
    <div>
      <main className="sticky top-9 w-full flex gap-1 py-1.5 bg-background/95 backdrop-blur-sm z-10">
        <SearchInputElement />
        <SearchFilterElement />
        <SearchMicElement />
      </main>
      <HintCardList />
      <Typography className="text-center my-2.5" tag="h6">
        10 Подходящих вакансий
      </Typography>
      <JobCardList />
    </div>
  );
};

export default SearchJob;
