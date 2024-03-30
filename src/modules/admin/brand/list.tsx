import { Text } from '@mantine/core';
import { modals } from '@mantine/modals';
import { useRouter } from 'next/router';
import React from 'react';

import { brands } from './components/brand-form-type';
import ListTitle from '../components/list-title';
import TabList from '../components/tab-list';
import TableList from '../components/table-list';

import { NavigationRoutes } from '@/components/side-navigation/side-navigation';
import useTableDataGenerator from '@/components/table/use-table-data-generator';

export default function BrandList() {
  const [type, setType] = React.useState<'car' | 'item'>('car');
  const data = brands.filter((brand) => brand.type === type);
  const { push } = useRouter();

  const table = useTableDataGenerator({
    data,
    onClickDetail(item) {
      push(`${NavigationRoutes.brands}/${item.id}`);
    },
    onClickDelete(item) {
      modals.openConfirmModal({
        title: `Hapus ${item.name}`,
        children: (
          <Text>
            Ad ea incididunt est aliquip eiusmod sint laborum enim irure aute.
            Anim exercitation laboris officia ex do excepteur do quis officia
            aliquip. Cillum culpa tempor excepteur velit aliquip ipsum minim. Do
            veniam amet ut et dolor nostrud et eiusmod veniam. Exercitation
            Lorem eiusmod sunt minim cillum quis nulla minim Lorem incididunt
            dolor aliqua.
          </Text>
        ),
        labels: { confirm: 'Ya', cancel: 'Batal' },
        onCancel: () => console.log('Cancel'),
        onConfirm: () => console.log('Confirmed'),
        confirmProps: {
          color: 'red',
        },
      });
    },
  });
  return (
    <>
      <ListTitle />
      <TabList
        defaultValue={type}
        value={type}
        onChange={(value: any) => setType(value)}
        data={[
          {
            value: 'car',
            children: 'Mobil',
          },
          {
            value: 'item',
            children: 'Barang',
          },
        ]}
      />
      <TableList data={table} />
    </>
  );
}
