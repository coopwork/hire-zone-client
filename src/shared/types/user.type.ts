export type UserType =
  | {
      isAuth: boolean;
      allowsWriteToPm: boolean;
      firstName: string;
      id: number;
      isPremium: boolean;
      languageCode: string;
      lastName: string;
      username: string;
    }
  | null
  | undefined;

export type UserSetterType =
  | {
      isAuth?: boolean;
      allowsWriteToPm?: boolean;
      firstName?: string;
      id?: number;
      isPremium?: boolean;
      languageCode?: string;
      lastName?: string;
      username?: string;
    }
  | null
  | undefined;

export type UserProviderType = {
  user: UserType;
  setUser: (user: UserSetterType) => void;
};
