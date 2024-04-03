import { SimpleGrid } from '@mantine/core';

import CategoryCard from './components/category-card';
import LoaderView from '../components/loader-view';

import { useGetCategories } from '@/api-hooks/category-api';

export default function AdminHome() {
  const query = useGetCategories();

  return (
    <LoaderView query={query}>
      {(data) => (
        <SimpleGrid cols={3}>
          {data.map((item) => (
            <CategoryCard key={item.id} {...item} />
          ))}
        </SimpleGrid>
      )}
    </LoaderView>
  );
}
