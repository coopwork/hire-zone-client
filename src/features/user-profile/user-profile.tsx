import { Context, createContext, useLayoutEffect, useState } from 'react';
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
import { useMutation } from '@tanstack/react-query';
import { postSignIn } from '@/shared/api/hire-req/post.auth.ts';
import { toast } from 'sonner';
import { PATHS } from '@/shared/constants/paths.ts';
import { useNavigate } from 'react-router-dom';

const defaultValues: UserProviderType = {
  user: null,
  setUser: (): void => {},
};

export const UserContext: Context<UserProviderType> =
  createContext<UserProviderType>(defaultValues);

const UserProfile = ({ children }: IWrapperProps) => {
  const navigate = useNavigate();
  const { initData } = retrieveLaunchParams();
  const [user, setUser] = useState<UserType>(null);

  const handleSetUser = (user: UserSetterType): void => {
    if (user) {
      mergeStateObject(setUser, user);
    }
  };

  const signInMutation = useMutation({
    mutationFn: () => {
      return postSignIn({
        email: `${user?.firstName}_${user?.id}@gmail.com`,
        password: `${user?.id}`,
      });
    },
    onSuccess: () => {
      handleSetUser({
        isAuth: true,
      });
      toast.success(`С возвращением ${user?.firstName || ''}!`);
      navigate(PATHS.HOME);
    },
    onError: () => {
      navigate(PATHS.SIGN_UP);
    },
  });

  const { isError, isLoading } = useSessionQuery();

  useLayoutEffect(() => {
    if (!user) {
      handleSetUser(initData?.user);
    }
    signInMutation.mutate();
    if (isError) {
      handleSetUser({ isAuth: false });
    } else {
      handleSetUser({ isAuth: true });
    }
  }, [isError]);

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
