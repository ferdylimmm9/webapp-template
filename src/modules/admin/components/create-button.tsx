import { Button } from '@mantine/core';
import { Plus } from '@phosphor-icons/react';
import Link from 'next/link';
import { useRouter } from 'next/router';

export default function CreateButton() {
  const { pathname } = useRouter();
  const route = pathname + '/create';
  return (
    <Link href={route} passHref>
      <Button leftSection={<Plus size={16} weight="bold" />}>Tambah</Button>
    </Link>
  );
}
