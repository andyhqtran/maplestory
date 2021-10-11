import { useFlags } from '@happykit/flags/client';
import { ReactNode } from 'react';
import { Box } from '~/components/Primitives/Box';
import { Navigation } from '~/components/Navigation';
import { globalStyles } from '~/stitches.config';
import { Sidebar } from '~/components/Primitives/Sidebar';
import { NavigationItem } from '~/components/NavigationItem';
import { Routes } from '~/constants/routes';
import { CheckSquareIcon, CircleIcon, DotsVerticalIcon, WrenchIcon } from '~/components/Primitives/Icon';
import { Logo } from '~/components/Primitives/Logo';
import { Divider } from '~/components/Primitives/Divider';
import { CharacterDropdownMenu } from '~/components/menus/CharacterDropdownMenu';

export type DefaultLayoutProps = {
  children: ReactNode;
  sidebar?: ReactNode;
};

export const DefaultLayout = ({ children }: DefaultLayoutProps) => {
  const { flags } = useFlags();

  globalStyles();

  return (
    <Box
      css={{
        display: 'grid',
        gridTemplateColumns: '280px 1fr',
        height: '100%',
      }}
    >
      <Sidebar>
        <Logo css={{ mb: 24 }} />
        <Navigation>
          {flags?.hasTracker && (
            <NavigationItem href={Routes.Tracker} adornmentLeft={<CheckSquareIcon size='small' />} label='Tasks' />
          )}
          <NavigationItem href={Routes.Tools} adornmentLeft={<WrenchIcon size='small' />} label='Tools' />
        </Navigation>

        {flags?.hasCharacters && (
          <>
            <Divider css={{ marginY: 24 }} />

            <Navigation label='Characters'>
              <NavigationItem
                adornmentLeft={<CircleIcon size='micro' />}
                adornmentRight={<CharacterDropdownMenu />}
                href='/'
                label='Buccaneer'
              />
              <NavigationItem adornmentLeft={<CircleIcon size='micro' />} href='/' label='Night Lord' />
            </Navigation>
          </>
        )}
      </Sidebar>

      <Box as='main' css={{ overflowY: 'auto' }}>
        {children}
      </Box>
    </Box>
  );
};
