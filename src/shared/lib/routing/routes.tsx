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
};

const unknown: RouteType[] = [
  {
    path: '*',
    element: <UnregisteredLayout children={<PAGE.REGISTRATION />} />,
  },
  {
    path: PATHS.SIGN_UP,
    element: <UnregisteredLayout children={<PAGE.REGISTRATION />} />,
  },
];

const user: RouteType[] = [
  {
    path: '*',
    element: <BaseLayout children={<PAGE.HOME />} />,
  },
  {
    path: PATHS.HOME,
    element: <BaseLayout children={<PAGE.HOME />} />,
  },
  {
    path: PATHS.FAVORITES,
    element: <BaseLayout children={<PAGE.FAVORITES />} />,
  },
  {
    path: PATHS.RESPONSES,
    element: <BaseLayout children={<PAGE.RESPONSES />} />,
  },
  {
    path: PATHS.PROFILE,
    element: <BaseLayout children={<PAGE.PROFILE />} />,
  },
  {
    path: PATHS.JOB_DETAILS,
    element: <BaseLayout children={<PAGE.JOB_DETAILS />} />,
  },
  {
    path: PATHS.PROJECT_DETAILS,
    element: <BaseLayout children={<PAGE.PROJECT_DETAILS />} />,
  },
];

export const ROUTES: RoutesType = {
  unknown,
  user,
};
