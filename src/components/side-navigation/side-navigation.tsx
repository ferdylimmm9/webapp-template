import { Button, Container, Flex, Group, Image } from '@mantine/core';
import { Book, Car, SignOut } from '@phosphor-icons/react';
import Link from 'next/link';
import { useRouter } from 'next/router';

import classes from './NavbarSimple.module.css';

import { NavigationRoutes } from '@/common/constants/route';
import colors from '@/common/styles/colors';
import useAuth from '@/hooks/use-auth';

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
  const { pathname, replace } = useRouter();
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

  const { setToken } = useAuth();

  const handleLogout = () => {
    replace(NavigationRoutes.loginAdmin);
    setToken(undefined);
  };
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
          <Button
            leftSection={<SignOut size={16} />}
            fullWidth
            variant="subtle"
            onClick={handleLogout}
            color="white"
          >
            Logout
          </Button>
        </div>
      </nav>
      <Container
        w="100%"
        miw="calc(100dvw - 190px)"
        maw="calc(100dvw - 190px)"
        style={{ overflow: 'auto' }}
        p={16}
      >
        {children}
      </Container>
    </Flex>
  );
}
