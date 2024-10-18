import { useState } from 'react';
import { cn } from '@/shared/lib/helpers/class-merger.ts';
import { Skeleton } from '@/shared/ui/skeleton.tsx';

type ImageProps = {
  className?: string;
  src: string;
  alt?: string;
};

const Image = ({ className, src, alt = '' }: ImageProps) => {
  const [isLoaded, setIsLoaded] = useState(false);
  return (
    <div className={cn('relative w-full h-full object-cover', className)}>
      <img
        className={cn(
          `absolute top-0 left-0 transition-opacity duration-500 ${isLoaded ? 'opacity-100 z-[1]' : 'opacity-0'} w-full h-full object-cover`,
          className,
        )}
        src={src}
        loading="lazy"
        alt={alt}
        onLoad={() => setIsLoaded(true)}
      />
      <Skeleton
        className={cn(
          `absolute top-0 left-0 transition-opacity duration-500 ${isLoaded ? 'opacity-0 -z-10' : 'opacity-100'} w-full h-full object-cover`,
          className,
        )}
      />
    </div>
  );
};

export default Image;
