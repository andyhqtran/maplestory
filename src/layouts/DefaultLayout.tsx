import React, { ReactNode } from 'react';

import { Box } from '~/components/Box';
import { CharacterList } from '~/components/CharacterList/CharacterList';
import { Navigation } from '~/components/Navigation/Navigation';
import { Sidebar } from '~/components/Sidebar';
import { CharactersProvider } from '~/context/characters';
import { globalStyles } from '~/stitches.config';

export type DefaultLayoutProps = {
  children: ReactNode;
};

export const DefaultLayout = ({ children }: DefaultLayoutProps) => {
  globalStyles();

  return (
    <CharactersProvider>
      <Box
        css={{
          display: 'grid',
          gridTemplateColumns: '64px 240px 1fr',
          height: '100%',
        }}
      >
        <Navigation />

        <Sidebar>
          <CharacterList />
        </Sidebar>

        <Box as='main' css={{ overflowY: 'auto' }}>
          {children}
        </Box>
      </Box>
    </CharactersProvider>
  );
};
