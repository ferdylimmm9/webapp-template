import { Button, Flex } from '@mantine/core';
import { ArrowClockwise } from '@phosphor-icons/react';
import { UseQueryResult } from '@tanstack/react-query';

import CreateButton from './create-button';
import Title from './title';

interface ListTitleProps {
  query?: UseQueryResult;
}

export default function ListTitle(props: ListTitleProps) {
  const { query } = props;
  return (
    <Flex align="center" justify="space-between" mb={16}>
      <Title />
      <Flex direction="row" gap={16}>
        {query && (
          <Button
            variant="outline"
            leftSection={<ArrowClockwise size={16} />}
            onClick={() => query.refetch()}
          >
            Refresh
          </Button>
        )}
        <CreateButton />
      </Flex>
    </Flex>
  );
}
