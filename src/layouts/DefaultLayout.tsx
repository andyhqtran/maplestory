import React, { ReactNode } from 'react';

import { Box } from '~/components/Box';
import { Navigation } from '~/components/Navigation/Navigation';
import { SecondaryNavigation } from '~/components/SecondaryNavigation/SecondaryNavigation';
import { darkTheme, globalStyles } from '~/stitches.config';

export type DefaultLayoutProps = {
  children: ReactNode;
};

export const DefaultLayout = ({ children }: DefaultLayoutProps) => {
  darkTheme.className;
  globalStyles();

  return (
    <Box
      css={{
        display: 'grid',
        gridTemplateColumns: '64px 240px 1fr',
        height: '100%',
      }}
    >
      <Navigation />

      <SecondaryNavigation />

      <Box as='main' css={{ overflowY: 'auto' }}>
        {children}
      </Box>
    </Box>
  );
};
