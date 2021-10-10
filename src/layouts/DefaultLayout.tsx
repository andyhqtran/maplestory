import { ReactNode } from 'react';

import { Box } from '~/components/Primitives/Box';
import { Navigation } from '~/components/Navigation';
import { useSettings } from '~/hooks/useSettings';
import { globalStyles } from '~/stitches.config';
import { Sidebar } from '~/components/Primitives/Sidebar';

export type DefaultLayoutProps = {
  children: ReactNode;
  sidebar?: ReactNode;
};

export const DefaultLayout = ({ sidebar, children }: DefaultLayoutProps) => {
  const { getSettingStatus } = useSettings();
  const isSidebarOpened = getSettingStatus('sidebar');
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
