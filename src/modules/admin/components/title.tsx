import { Text, TextProps } from '@mantine/core';
import { useRouter } from 'next/router';
import React from 'react';

import { NavigationRoutes } from '@/common/constants/route';

export function getTitle(pathname: string) {
  switch (pathname as NavigationRoutes) {
    case NavigationRoutes.loginAdmin:
      return 'Login';
    case NavigationRoutes.example:
      return 'Example';
    case NavigationRoutes.home:
      return 'Beranda';
    case NavigationRoutes.categories:
      return 'Kategori';
    case NavigationRoutes.createCategory:
      return 'Tambah Kategori';
    case NavigationRoutes.viewCategory:
      return 'Edit Katagori';
    case NavigationRoutes.brands:
      return 'Merk';
    case NavigationRoutes.createBrand:
      return 'Buat Merk';
    case NavigationRoutes.viewBrand:
      return 'Ubah Merk';
    default:
      return '';
  }
}

interface TitleProps extends TextProps {}

export default function Title(props: TitleProps) {
  const { pathname } = useRouter();
  const label = React.useMemo(() => {
    return getTitle(pathname);
  }, [pathname]);

  return (
    <Text fz={32} fw={400} {...props}>
      {label}
    </Text>
  );
}
