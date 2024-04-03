import { Box, Card, Text } from '@mantine/core';
import Link from 'next/link';

import { CategoryModel } from '../../category/components/category-form-type';

import { NavigationRoutes } from '@/common/constants/route';

export default function CategoryCard(props: CategoryModel) {
  return (
    <Link href={`${NavigationRoutes.categories}/${props.id}`}>
      <Card withBorder shadow="xs">
        <Box w={128} h={128} bg="gray" m="auto" />
        <Text fw={600} ta="center" my={4}>
          {props.name}
        </Text>
        <Text ta="center">{props.description}</Text>
      </Card>
    </Link>
  );
}
