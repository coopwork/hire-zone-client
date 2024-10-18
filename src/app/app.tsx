import '@/shared/styles/app.scss';
import AppProvider from '@/app/app-provider.tsx';
import { mockTelegramData } from '@/config/telegram.mock.ts';
import { ENV } from '@/config/environments.ts';
import { init } from '@telegram-apps/sdk-react';
import AppRouter from '@/app/app-router.tsx';

function App() {
  mockTelegramData(ENV.IS_DEV);
  try {
    init();
  } catch {
    console.warn('is not telegram');
  }
  return (
    <AppProvider>
      <AppRouter />
    </AppProvider>
  );
}

export default App;
