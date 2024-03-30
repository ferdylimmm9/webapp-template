import { Table, TableProps } from '@mantine/core';
interface TableListProps extends TableProps {}

export default function TableList(props: TableListProps) {
  return (
    <Table.ScrollContainer minWidth={1000}>
      <Table
        {...props}
        styles={{
          thead: {
            backgroundColor: '#FF852D',
            color: '#FFF',
          },
          th: {
            fontWeight: 400,
          },
        }}
      />
    </Table.ScrollContainer>
  );
}
