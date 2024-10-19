export type PageInfoType = {
  title: string;
  name: string;
};

export type PageSetterInfoType = {
  title?: string;
  name?: string;
};

export type PageInfoProviderType = {
  pageInfo: PageInfoType;
  setPageInfo: (pageInfo: PageInfoType) => void;
};
