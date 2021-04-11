import VisuallyHidden from '@reach/visually-hidden';
import React from 'react';
import useDarkMode from 'use-dark-mode';

import { Box } from '~/components/Box';
import { CheckSquareIcon, MoonIcon, MusicIcon, SunIcon } from '~/components/Icon';
import { IconButton } from '~/components/IconButton';
import { Logo } from '~/components/Logo';
import { NavigationItem } from '~/components/Navigation/NavigationItem';
import { ROUTES } from '~/constants/routes';

export const Navigation = () => {
  const darkMode = useDarkMode(true);

  return (
    <Box
      as='nav'
      css={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: '$background',
        py: 24,
        borderRight: '1px solid $colors$gray200',
      }}
    >
      <Box>
        <Logo css={{ mb: 24 }} />
        <NavigationItem href={ROUTES.tracker} icon={CheckSquareIcon} label='Daily tracker' />
        <NavigationItem href={ROUTES.music} icon={MusicIcon} label='Music' />
      </Box>
      <Box>
        <IconButton onClick={darkMode.toggle} size='small'>
          <VisuallyHidden>Switch between dark and light mode</VisuallyHidden>
          <SunIcon css={{ '.light-mode &': { display: 'none' } }} size='small' />
          <MoonIcon css={{ '.dark-mode &': { display: 'none' } }} size='small' />
        </IconButton>
      </Box>
    </Box>
  );
};
