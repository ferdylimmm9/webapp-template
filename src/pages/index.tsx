import { Table } from '@mantine/core';

import useTableDataGenerator from '@/components/table/use-table-data-generator';

export default function Main() {
  const elements = [
    { position: 6, mass: 12.011, symbol: 'C', name: 'Carbon' },
    { position: 7, mass: 14.007, symbol: 'N', name: 'Nitrogen' },
    { position: 39, mass: 88.906, symbol: 'Y', name: 'Yttrium' },
    { position: 56, mass: 137.33, symbol: 'Ba', name: 'Barium' },
    { position: 58, mass: 140.12, symbol: 'Ce', name: 'Cerium' },
  ];

  const data = useTableDataGenerator({
    data: elements,
    onClickDelete(item) {
      console.log(item.position);
    },
    onClickDetail(item) {
      console.log(item.symbol);
    },
  });

  return (
    <>
      <Table.ScrollContainer minWidth="800px">
        <Table data={data} />
      </Table.ScrollContainer>
    </>
  );
}
