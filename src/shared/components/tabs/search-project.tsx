import { Input } from '@/shared/ui/input.tsx';
import { Button } from '@/shared/ui/button.tsx';
import { FilterIcon, MicIcon, SearchIcon } from 'lucide-react';
import { Typography } from '@/shared/ui/typography.tsx';
import React from 'react';
import ProjectCardList from '@/shared/components/lists/project-card-list.tsx';

const SearchProject = () => {
  const handleSubmitSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('form has submited');
  };
  return (
    <div>
      <form
        onSubmit={handleSubmitSearch}
        className="sticky top-0 w-full flex gap-1 py-1.5 bg-background/95 backdrop-blur-sm z-10"
      >
        <Input placeholder="Поиск..." type="search" />
        <Button className="p-3" variant="ghost" size="icon">
          <SearchIcon />
        </Button>
        <Button type="button" className="p-3" variant="outline" size="icon">
          <FilterIcon />
        </Button>
        <Button type="button" className="p-3" variant="outline" size="icon">
          <MicIcon />
        </Button>
      </form>
      <Typography className="text-center my-2.5" tag="h6">
        10 Подходящих проектов
      </Typography>
      <ProjectCardList />
    </div>
  );
};

export default SearchProject;
