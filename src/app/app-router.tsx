import { Route, Routes } from 'react-router-dom';
import { ROUTES } from '@/shared/lib/routing/routes.tsx';
import { useSessionQuery } from '@/entities/session/queries.ts';
import { useLaunchParams } from '@telegram-apps/sdk-react';
import { Suspense } from 'react';
import PageLoader from '@/shared/ui/page-loader.tsx';

const AppRouter = () => {
  const { initData } = useLaunchParams();
  console.log(initData);
  const { isLoading, isError } = useSessionQuery();
  if (isLoading) {
    return <PageLoader />;
  }
  return (
    <Routes>
      {ROUTES[isError ? 'unknown' : 'user'].map(({ path, element }) => (
        <Route
          key={path}
          path={path}
          element={<Suspense fallback={<PageLoader />}>{element}</Suspense>}
        />
      ))}
    </Routes>
  );
};

export default AppRouter;
