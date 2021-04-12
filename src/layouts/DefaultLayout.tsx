import React, { ReactNode } from 'react';

import { Box } from '~/components/Box';
import { Navigation } from '~/components/Navigation/Navigation';
import { Sidebar } from '~/components/Sidebar';
import { globalStyles } from '~/stitches.config';
import { useSidebar } from '../hooks/useSidebar';

export type DefaultLayoutProps = {
  children: ReactNode;
  sidebar?: ReactNode;
};

export const DefaultLayout = ({ sidebar, children }: DefaultLayoutProps) => {
  const { isSidebarOpened } = useSidebar();
  globalStyles();

  return (
    <Box
      css={{
        display: 'grid',
        gridTemplateColumns: sidebar && isSidebarOpened ? '64px 240px 1fr' : '64px 1fr',
        height: '100%',
      }}
    >
      <Navigation hasSidebar={!!sidebar} />

      {sidebar && isSidebarOpened && <Sidebar>{sidebar}</Sidebar>}

      <Box as='main' css={{ overflowY: 'auto' }}>
        {children}
      </Box>
    </Box>
  );
};
