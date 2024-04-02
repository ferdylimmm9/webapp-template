import { useRouter } from 'next/router';

import { NavigationRoutes } from '@/common/constants/route';
import SideNavigation from '@/components/side-navigation/side-navigation';

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}): any {
  const { pathname } = useRouter();
  const isAdmin = pathname.includes('admin');
  const isLogin = pathname === NavigationRoutes.loginAdmin;

  if (isLogin) {
    return children;
  }

  if (isAdmin) {
    return <SideNavigation>{children}</SideNavigation>;
  }

  return children;
}
