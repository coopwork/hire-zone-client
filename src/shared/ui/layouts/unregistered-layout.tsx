import { IWrapperProps } from '@/shared/types/wrapper.interface.ts';

const UnregisteredLayout = ({ children }: IWrapperProps) => {
  return <div className="w-full min-h-screen">{children}</div>;
};

export default UnregisteredLayout;
