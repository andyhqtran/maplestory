import React from 'react';

import { Box, BoxProps } from '~/components/Primitives/Box';

type SidebarProps = BoxProps;

export const Sidebar = ({ css, ...restOfProps }: SidebarProps) => {
  return (
    <Box
      as='aside'
      css={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        backgroundColor: '$background',
        borderRight: '1px solid $colors$gray200',
        p: 24,
        overflowY: 'auto',
        ...(css as {}),
      }}
      {...restOfProps}
    />
  );
};
