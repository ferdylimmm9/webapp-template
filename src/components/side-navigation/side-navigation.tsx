import { Button, Container, Flex, Group, Image } from '@mantine/core';
import { Book, Car } from '@phosphor-icons/react';
import Link from 'next/link';
import { useRouter } from 'next/router';

import classes from './NavbarSimple.module.css';

import colors from '@/common/styles/colors';

export enum NavigationRoutes {
  loginAdmin = '/admin/login',
  example = '/example',
  home = '/admin',
  //categories
  categories = '/admin/categories',
  createCategory = '/admin/categories/create',
  viewCategory = '/admin/categories/[id]',
  //brand
  brands = '/admin/brands',
  createBrand = '/admin/brands/create',
  viewBrand = '/admin/brands/[id]',
}

export type SideNavigationLink = {
  href: string;
  label: string;
  icon: React.ReactNode;
};

export default function SideNavigation({
  children,
}: {
  children: React.ReactNode;
}) {
  const { pathname } = useRouter();
  const links: SideNavigationLink[] = [
    {
      href: NavigationRoutes.categories,
      label: 'Kategori',
      icon: <Book size={16} />,
    },
    {
      href: NavigationRoutes.brands,
      label: 'Merk',
      icon: <Car size={16} />,
    },
  ];
  return (
    <Flex miw="100dvw" mih="100dvh">
      <nav className={classes.navbar}>
        <div className={classes.navbarMain}>
          <Group className={classes.header} justify="space-between">
            <Link href={NavigationRoutes.home} passHref>
              <Image w={150} src="/icons/logo.png" m="auto" />
            </Link>
          </Group>

          {links.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link key={link.href} href={link.href} passHref>
                <Button
                  justify="start"
                  w="100%"
                  color={colors.mainWhite}
                  variant={isActive ? 'default' : 'subtle'}
                  leftSection={link.icon}
                >
                  {link.label}
                </Button>
              </Link>
            );
          })}
        </div>

        <div className={classes.footer}>
          <Button fullWidth variant="subtle" color="white">
            Logout
          </Button>
        </div>
      </nav>
      <Container
        w="100%"
        mah="100dvh"
        miw="calc(100dvw - 180px)"
        maw="calc(100dvw - 180px)"
        style={{ overflow: 'auto' }}
        p={16}
      >
        {children}
      </Container>
    </Flex>
  );
}
