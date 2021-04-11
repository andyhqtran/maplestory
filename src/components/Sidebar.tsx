import React from 'react';

import { Box, BoxProps } from '~/components/Box';

type SidebarProps = BoxProps;

export const Sidebar = ({ css, ...restOfProps }: SidebarProps) => {
  return (
    <Box
      as='aside'
      css={{ backgroundColor: '$background', borderRight: '1px solid $colors$gray200', p: 24, ...(css as {}) }}
      {...restOfProps}
    />
  );
};
