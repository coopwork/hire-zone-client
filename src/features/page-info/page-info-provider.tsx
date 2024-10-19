import { Context, createContext, useState } from 'react';
import { IWrapperProps } from '@/shared/types/wrapper.interface.ts';
import {
  PageInfoProviderType,
  PageInfoType,
  PageSetterInfoType,
} from '@/shared/types/page-info.type.ts';
import { mergeStateObject } from '@/shared/lib/helpers/merge-state-object.tsx';

const defaultValues: PageInfoProviderType = {
  pageInfo: {
    title: 'HiRe - Zone',
    name: 'Главная',
  },
  setPageInfo: (): void => {},
};

export const PageInfoContext: Context<PageInfoProviderType> =
  createContext<PageInfoProviderType>(defaultValues);

const PageInfoProvider = ({ children }: IWrapperProps) => {
  const [pageInfo, setPageInfo] = useState<PageInfoType>({
    title: 'HiRe - Zone',
    name: 'Главная',
  });

  const handleSetPageInfo = (pageInfo: PageSetterInfoType): void => {
    mergeStateObject(setPageInfo, pageInfo);
  };
  const pageValues: PageInfoProviderType = {
    pageInfo,
    setPageInfo: handleSetPageInfo,
  };
  return (
    <PageInfoContext.Provider value={pageValues}>
      {children}
    </PageInfoContext.Provider>
  );
};

export default PageInfoProvider;
