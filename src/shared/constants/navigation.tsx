import { MailsIcon, SearchCodeIcon, StarIcon, UserIcon } from 'lucide-react';
import { PATHS } from '@/shared/constants/paths.ts';

const navigationSettings = {
  iconStrokeWidth: 2,
  iconsStyle: 'w-9 h-9',
  styles: {
    active: 'text-primary pointer-events-none cursor-default',
    common: 'text-muted hover:text-foreground/25',
  },
};

export const NAVIGATION = [
  {
    icon: <SearchCodeIcon className={navigationSettings.iconsStyle} />,
    path: PATHS.HOME,
    label: 'Search job',
    styles: navigationSettings.styles,
  },
  {
    icon: <StarIcon className={navigationSettings.iconsStyle} />,
    path: PATHS.FAVORITES,
    label: 'Favorites',
    styles: navigationSettings.styles,
  },
  {
    icon: <MailsIcon className={navigationSettings.iconsStyle} />,
    path: PATHS.RESPONSES,
    label: 'Responses',
    styles: navigationSettings.styles,
  },
  {
    icon: <UserIcon className={navigationSettings.iconsStyle} />,
    path: PATHS.PROFILE,
    label: 'Profile',
    styles: navigationSettings.styles,
  },
] as const;
