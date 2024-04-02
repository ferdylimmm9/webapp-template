import { useRouter } from 'next/router';
import React from 'react';

import { NavigationRoutes } from '@/common/constants/route';
import useAuth from '@/hooks/use-auth';

const privateRoutes = [NavigationRoutes.example];

export default function PrivateRoute({
  children,
}: {
  children: React.ReactNode;
}): any {
  const { token } = useAuth();
  const { push, pathname } = useRouter();
  const isPrivate =
    privateRoutes.findIndex((route) => route === pathname) !== -1;
  React.useEffect(() => {
    if (token || !isPrivate) return;
    push('/login');
  }, [isPrivate, push, token]);

  return children; //show the page component
}
