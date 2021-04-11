import React from 'react';

import { Box, BoxProps } from '~/components/Box';

export type TabsProps = BoxProps;

export const Tabs = ({ children, css }: TabsProps) => {
  return (
    <Box css={{ display: 'inline-flex', backgroundColor: '$gray100', borderRadius: 4, p: 4, ...(css as {}) }}>
      {children}
    </Box>
  );
};
