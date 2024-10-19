import { Typography } from '@/shared/ui/typography.tsx';
import { LoaderIcon } from 'lucide-react';

const PageLoader = () => {
  return (
    <div className="h-screen flex flex-col justify-center items-center">
      <LoaderIcon className="w-10 h-10 animate-spin ease-in-out duration-1000" />
      <Typography tag="h2">loading...</Typography>
    </div>
  );
};

export default PageLoader;
