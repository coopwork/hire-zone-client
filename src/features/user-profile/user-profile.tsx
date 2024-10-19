import { Context, createContext, useEffect, useState } from 'react';
import { mergeStateObject } from '@/shared/lib/helpers/merge-state-object.tsx';
import { IWrapperProps } from '@/shared/types/wrapper.interface.ts';
import { retrieveLaunchParams } from '@telegram-apps/bridge';
import {
  UserProviderType,
  UserSetterType,
  UserType,
} from '@/shared/types/user.type.ts';
import { useSessionQuery } from '@/entities/session/queries.ts';
import PageLoader from '@/shared/ui/page-loader.tsx';

const defaultValues: UserProviderType = {
  user: null,
  setUser: (): void => {},
};

export const UserContext: Context<UserProviderType> =
  createContext<UserProviderType>(defaultValues);

const UserProfile = ({ children }: IWrapperProps) => {
  const { initData } = retrieveLaunchParams();
  const [user, setUser] = useState<UserType>(null);

  const handleSetUser = (user: UserSetterType): void => {
    if (user) {
      mergeStateObject(setUser, user);
    }
  };
  const { isError, isLoading } = useSessionQuery();

  useEffect(() => {
    handleSetUser(initData?.user);

    if (isError) {
      handleSetUser({ isAuth: false });
    } else {
      handleSetUser({ isAuth: true });
    }
  }, []);

  if (isLoading) {
    return <PageLoader />;
  }

  const userValues: UserProviderType = {
    user,
    setUser: handleSetUser,
  };
  return (
    <UserContext.Provider value={userValues}>{children}</UserContext.Provider>
  );
};

export default UserProfile;
