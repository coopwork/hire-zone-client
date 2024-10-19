import UnregisteredLayout from '@/shared/ui/layouts/unregistered-layout.tsx';
import { RoutesType, RouteType } from '@/shared/types/routes.type.ts';
import { PATHS } from '@/shared/constants/paths.ts';
import { lazy } from 'react';
import BaseLayout from '@/shared/ui/layouts/base-layout.tsx';

const PAGE = {
  HOME: lazy(() => import('@/pages/home.tsx')),
  FAVORITES: lazy(() => import('@/pages/favorites.tsx')),
  RESPONSES: lazy(() => import('@/pages/responses.tsx')),
  PROFILE: lazy(() => import('@/pages/profile.tsx')),
  REGISTRATION: lazy(() => import('@/pages/sign-up.tsx')),
  JOB_DETAILS: lazy(() => import('@/pages/job-details.tsx')),
  PROJECT_DETAILS: lazy(() => import('@/pages/project-details.tsx')),
  HINT_DETAILS: lazy(() => import('@/pages/hint-details.tsx')),
};

const unknown: RouteType[] = [
  {
    path: '*',
    element: <PAGE.REGISTRATION />,
    layout: UnregisteredLayout,
  },
  {
    path: PATHS.SIGN_UP,
    element: <PAGE.REGISTRATION />,
    layout: UnregisteredLayout,
  },
];

const user: RouteType[] = [
  {
    path: '*',
    element: <PAGE.HOME />,
    layout: BaseLayout,
  },
  {
    path: PATHS.HOME,
    element: <PAGE.HOME />,
    layout: BaseLayout,
  },
  {
    path: PATHS.FAVORITES,
    element: <PAGE.FAVORITES />,
    layout: BaseLayout,
  },
  {
    path: PATHS.RESPONSES,
    element: <PAGE.RESPONSES />,
    layout: BaseLayout,
  },
  {
    path: PATHS.PROFILE,
    element: <PAGE.PROFILE />,
    layout: BaseLayout,
  },
  {
    path: PATHS.JOB_DETAILS,
    element: <PAGE.JOB_DETAILS />,
    layout: BaseLayout,
  },
  {
    path: PATHS.PROJECT_DETAILS,
    element: <PAGE.PROJECT_DETAILS />,
    layout: BaseLayout,
  },
  {
    path: PATHS.HINT_DETAILS,
    element: <PAGE.HINT_DETAILS />,
    layout: BaseLayout,
  },
];

export const ROUTES: RoutesType = {
  unknown,
  user,
};
