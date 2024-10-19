import { MailsIcon, SearchCodeIcon, StarIcon, UserIcon } from 'lucide-react';
import { PATHS } from '@/shared/constants/paths.ts';

const navigationSettings = {
  iconStrokeWidth: 1.75,
  iconsStyle: 'w-7 h-7',
  styles: {
    active: 'text-accent/50 pointer-events-none cursor-default',
    common: 'text-secondary-foreground/75 hover:text-foreground',
  },
};

export const NAVIGATION = [
  {
    icon: (
      <SearchCodeIcon
        strokeWidth={navigationSettings.iconStrokeWidth}
        className={navigationSettings.iconsStyle}
      />
    ),
    path: PATHS.HOME,
    label: 'Search job',
    styles: navigationSettings.styles,
  },
  {
    icon: (
      <StarIcon
        strokeWidth={navigationSettings.iconStrokeWidth}
        className={navigationSettings.iconsStyle}
      />
    ),
    path: PATHS.FAVORITES,
    label: 'Favorites',
    styles: navigationSettings.styles,
  },
  {
    icon: (
      <MailsIcon
        strokeWidth={navigationSettings.iconStrokeWidth}
        className={navigationSettings.iconsStyle}
      />
    ),
    path: PATHS.RESPONSES,
    label: 'Responses',
    styles: navigationSettings.styles,
  },
  {
    icon: (
      <UserIcon
        strokeWidth={navigationSettings.iconStrokeWidth}
        className={navigationSettings.iconsStyle}
      />
    ),
    path: PATHS.PROFILE,
    label: 'Profile',
    styles: navigationSettings.styles,
  },
] as const;
