import { useRouter } from 'next/router';

import SideNavigation from '@/components/side-navigation/side-navigation';

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}): any {
  const { pathname } = useRouter();
  const isAdmin = pathname.includes('admin');

  if (isAdmin) {
    return <SideNavigation>{children}</SideNavigation>;
  }
  return children;
}
