import { Input } from '@/shared/ui/input.tsx';
import { Button } from '@/shared/ui/button.tsx';
import { SearchIcon } from 'lucide-react';
import React from 'react';

const SearchInputElement = () => {
  const handleSubmitSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('form has submited');
  };

  return (
    <form onSubmit={handleSubmitSearch} className="relative w-full flex gap-1">
      <Input className="w-full" placeholder="Поиск..." type="search" />
      <Button
        className="absolute right-0 h-full p-3"
        variant="secondary"
        size="icon"
      >
        <SearchIcon />
      </Button>
    </form>
  );
};

export default SearchInputElement;
