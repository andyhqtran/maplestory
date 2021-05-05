import VisuallyHidden from '@reach/visually-hidden';
import { useTheme } from 'next-themes';
import React from 'react';

import { Box } from '~/components/Primitives/Box';
import {
  ArrowToLeftIcon,
  ArrowToRightIcon,
  CheckSquareIcon,
  IdCardIcon,
  MoonIcon,
  MusicIcon,
  SunIcon,
} from '~/components/Primitives/Icon';
import { IconButton } from '~/components/Primitives/IconButton';
import { Logo } from '~/components/Primitives/Logo';
import { NavigationItem } from '~/components/Navigation/NavigationItem';
import { Routes } from '~/constants/routes';
import { useSettings } from '~/hooks/useSettings';

export type NavigationProps = {
  hasSidebar?: boolean;
};

export const Navigation = ({ hasSidebar = false }) => {
  const { theme, setTheme } = useTheme();
  const { getSettingStatus, updateSetting } = useSettings();
  const isSidebarOpened = getSettingStatus('sidebar');
  const isDarkMode = theme === 'dark';

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
        <NavigationItem href={Routes.Tracker} icon={CheckSquareIcon} label='Daily tracker' />
        <NavigationItem href={Routes.Characters} icon={IdCardIcon} label='Characters' />
        <NavigationItem href={Routes.Music} icon={MusicIcon} label='Music' />
      </Box>

      <Box>
        {hasSidebar && (
          <IconButton css={{ mb: 8 }} onClick={() => updateSetting('sidebar', !isSidebarOpened)} size='small'>
            {isSidebarOpened ? <ArrowToLeftIcon size='small' /> : <ArrowToRightIcon size='small' />}
          </IconButton>
        )}
        <IconButton onClick={() => (isDarkMode ? setTheme('light') : setTheme('dark'))} size='small'>
          <VisuallyHidden>Switch between dark and light mode</VisuallyHidden>
          <SunIcon css={{ '.light-theme &': { display: 'none' } }} size='small' />
          <MoonIcon css={{ '.dark-theme &': { display: 'none' } }} size='small' />
        </IconButton>
      </Box>
    </Box>
  );
};
