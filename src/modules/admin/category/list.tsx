import { Text } from '@mantine/core';
import { modals } from '@mantine/modals';
import { useRouter } from 'next/router';

import { CategoryModel } from './components/category-form-type';
import ListTitle from '../components/list-title';
import LoaderView from '../components/loader-view';
import TableList from '../components/table-list';

import { useDeleteCategory, useGetCategories } from '@/api-hooks/category-api';
import { NavigationRoutes } from '@/common/constants/route';
import notification from '@/common/helpers/notifications';
import { formatDate } from '@/common/helpers/string';
import useTableDataGenerator from '@/components/table/use-table-data-generator';

export function useDeleteCategoryHook() {
  const { mutateAsync } = useDeleteCategory();
  const onDelete = (item: CategoryModel) => {
    modals.openConfirmModal({
      title: `Hapus ${item.name}`,
      children: (
        <Text>
          Apakah Anda yakin untuk menghapus{' '}
          <Text span fw={600}>
            {item.name}
          </Text>{' '}
          ?
        </Text>
      ),
      labels: { confirm: 'Ya', cancel: 'Batal' },
      onCancel: () => {},
      onConfirm: async () => {
        try {
          await mutateAsync(item.id);
        } catch (e: any) {
          notification.error({
            message: e?.message,
          });
        }
      },
      confirmProps: {
        color: 'red',
      },
    });
  };

  return onDelete;
}

export default function CategoryList() {
  const query = useGetCategories();
  const { data = [] } = query;
  const { push } = useRouter();

  const onClickDelete = useDeleteCategoryHook();

  const table = useTableDataGenerator({
    data,
    onClickDetail(item) {
      push(`${NavigationRoutes.categories}/${item.id}`);
    },
    onClickDelete,
    onRowCustom(item) {
      return [
        item.name,
        item.description,
        formatDate(item.created_at),
        formatDate(item.updated_at),
      ];
    },
    onGenerateHead(item) {
      return ['Nama', 'Deskripsi', 'Created At', 'Updated At', 'Action'];
    },
  });
  return (
    <LoaderView query={query}>
      {(data) => (
        <>
          <ListTitle query={query} />
          <TableList data={table} />
        </>
      )}
    </LoaderView>
  );
}
