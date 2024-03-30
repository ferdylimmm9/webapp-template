import { Tabs, TabsProps, TabsTabProps } from '@mantine/core';

import colors from '@/common/styles/colors';

interface TabListProps extends Omit<TabsProps, 'children'> {
  data: TabsTabProps[];
}

export default function TabList(props: TabListProps) {
  const { data, ...rest } = props;
  return (
    <Tabs {...rest} mb={16} color={colors.orange}>
      <Tabs.List>
        {data.map((item) => {
          const isActive = item.value === rest.value;
          return (
            <Tabs.Tab
              styles={{
                tab: {
                  fontWeight: isActive ? 600 : undefined,
                  color: isActive ? colors.orange : undefined,
                },
              }}
              key={item.value}
              {...item}
            />
          );
        })}
      </Tabs.List>
    </Tabs>
  );
}
