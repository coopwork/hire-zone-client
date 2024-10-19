import { PageInfoProviderType } from '@/shared/types/page-info.type.ts';
import { useContext } from 'react';
import { PageInfoContext } from '@/features/page-info/page-info-provider.tsx';

export function usePageInfo(): PageInfoProviderType {
  return useContext(PageInfoContext);
}
