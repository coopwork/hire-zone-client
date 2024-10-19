import { IWrapperProps } from '@/shared/types/wrapper.interface.ts';
import BottomNavigation from '@/shared/ui/base/bottom-navigation.tsx';
import AppHeader from '@/shared/ui/base/app-header.tsx';

const BaseLayout = ({ children }: IWrapperProps) => {
  return (
    <div className="w-full h-screen">
      <AppHeader />
      <div className="w-full pt-12 pb-16">{children}</div>
      <BottomNavigation />
    </div>
  );
};

export default BaseLayout;
