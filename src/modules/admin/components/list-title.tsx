import { Flex } from '@mantine/core';

import CreateButton from './create-button';
import Title from './title';

export default function ListTitle() {
  return (
    <Flex align="center" justify="space-between" mb={16}>
      <Title />
      <CreateButton />
    </Flex>
  );
}
