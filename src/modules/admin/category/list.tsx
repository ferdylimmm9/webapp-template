import { Text } from '@mantine/core';
import { modals } from '@mantine/modals';
import { useRouter } from 'next/router';

import { categories } from './components/category-form-type';
import ListTitle from '../components/list-title';
import TableList from '../components/table-list';

import { NavigationRoutes } from '@/components/side-navigation/side-navigation';
import useTableDataGenerator from '@/components/table/use-table-data-generator';

export default function CategoryList() {
  const data = categories;
  const { push } = useRouter();

  const table = useTableDataGenerator({
    data,
    onClickDetail(item) {
      push(`${NavigationRoutes.categories}/${item.id}`);
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
      <TableList data={table} />
    </>
  );
}
