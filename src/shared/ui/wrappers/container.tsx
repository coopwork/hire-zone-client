import { IWrapperProps } from '@/shared/types/wrapper.interface.ts';
import { cn } from '@/shared/lib/helpers/class-merger.ts';

const Container = ({ className, children }: IWrapperProps) => {
  return <div className={cn('container', className)}>{children}</div>;
};

export default Container;
