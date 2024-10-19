import { Route, Routes } from 'react-router-dom';
import { ROUTES } from '@/shared/lib/routing/routes.tsx';
import { Suspense } from 'react';
import PageLoader from '@/shared/ui/page-loader.tsx';
import useUser from '@/shared/hooks/useUser.tsx';

const AppRouter = () => {
  const { user } = useUser();
  return (
    <Routes>
      {ROUTES[user?.isAuth ? 'user' : 'unknown'].map(
        ({ path, element, layout: Layout }) => (
          <Route
            key={path}
            path={path}
            element={
              <Layout>
                <Suspense fallback={<PageLoader />}>{element}</Suspense>
              </Layout>
            }
          />
        ),
      )}
    </Routes>
  );
};

export default AppRouter;
