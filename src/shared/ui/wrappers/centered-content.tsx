import { IWrapperProps } from '@/shared/types/wrapper.interface.ts';
import { cn } from '@/shared/lib/helpers/class-merger.ts';

const CenteredContent = ({ className, children }: IWrapperProps) => {
  return (
    <div
      className={cn(
        'w-full h-full flex justify-center items-center',
        className,
      )}
    >
      {children}
    </div>
  );
};

export default CenteredContent;
