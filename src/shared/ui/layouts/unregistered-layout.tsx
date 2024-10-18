import { IWrapperProps } from '@/shared/types/wrapper.interface.ts';

const UnregisteredLayout = ({ children }: IWrapperProps) => {
  return <div className="w-full h-full">{children}</div>;
};

export default UnregisteredLayout;
