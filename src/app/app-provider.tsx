import { BrowserRouter } from 'react-router-dom';
import { IWrapperProps } from '@/shared/types/wrapper.interface.ts';
import { ThemeProvider } from '@/features/theme-provider/theme-provider.tsx'; // import { SDKProvider } from "@telegram-apps/sdk-react";
import { QueryClientProvider } from '@tanstack/react-query';
import { queryClient } from '@/shared/api/query-client.ts';
import { Toaster } from '@/shared/ui/sonner.tsx';
import Localize from '@/features/localize/localize.tsx';

const AppProvider = ({ children }: IWrapperProps) => {
  return (
    // <SDKProvider acceptCustomStyles>
    <Localize>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <ThemeProvider defaultTheme="dark" storageKey="ui-theme">
            {children}
            <Toaster position="top-center" />
          </ThemeProvider>
        </BrowserRouter>
      </QueryClientProvider>
    </Localize>
    // </SDKProvider>
  );
};

export default AppProvider;
