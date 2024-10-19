import { BrowserRouter } from 'react-router-dom';
import { IWrapperProps } from '@/shared/types/wrapper.interface.ts';
import { ThemeProvider } from '@/features/theme-provider/theme-provider.tsx'; // import { SDKProvider } from "@telegram-apps/sdk-react";
import { QueryClientProvider } from '@tanstack/react-query';
import { queryClient } from '@/shared/api/query-client.ts';
import { Toaster } from '@/shared/ui/sonner.tsx';
import Localize from '@/features/localize/localize.tsx';
import PageInfoProvider from '@/features/page-info/page-info-provider.tsx';
import UserProfile from '@/features/user-profile/user-profile.tsx';

const AppProvider = ({ children }: IWrapperProps) => {
  return (
    <Localize>
      <QueryClientProvider client={queryClient}>
        <UserProfile>
          <BrowserRouter>
            <PageInfoProvider>
              <ThemeProvider defaultTheme="dark" storageKey="ui-theme">
                {children}
                <Toaster position="top-center" />
              </ThemeProvider>
            </PageInfoProvider>
          </BrowserRouter>
        </UserProfile>
      </QueryClientProvider>
    </Localize>
  );
};

export default AppProvider;
