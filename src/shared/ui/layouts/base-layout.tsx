import { IWrapperProps } from '@/shared/types/wrapper.interface.ts';
import BottomNavigation from '@/shared/ui/base/bottom-navigation.tsx';

const BaseLayout = ({ children }: IWrapperProps) => {
  return (
    <div className="w-full h-screen">
      <div className="w-full pt-2 pb-16">{children}</div>
      <BottomNavigation />
    </div>
  );
};

export default BaseLayout;
