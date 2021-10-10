import { useTheme } from 'next-themes';
import { Box } from '~/components/Primitives/Box';
import {
  ArrowToLeftIcon,
  ArrowToRightIcon,
  CheckSquareIcon,
  IdCardIcon,
  MusicIcon,
  WrenchIcon,
} from '~/components/Primitives/Icon';
import { IconButton } from '~/components/Primitives/IconButton';
import { Logo } from '~/components/Primitives/Logo';
import { NavigationItem } from '~/components/NavigationItem';
import { Routes } from '~/constants/routes';
import { useSettings } from '~/hooks/useSettings';
import { StyledNavigation, StyledNavigationProps } from '~/components/Navigation.styles';
import { ThemeChanger } from '~/components/ThemeChanger';

export type NavigationProps = Pick<StyledNavigationProps, 'css'> & {
  hasSidebar?: boolean;
};

export const Navigation = ({ css, hasSidebar = false }: NavigationProps) => {
  const { theme, setTheme } = useTheme();
  const { getSettingStatus, updateSetting } = useSettings();
  const isSidebarOpened = getSettingStatus('sidebar');
  const isDarkMode = theme === 'dark';

  return (
    <StyledNavigation css={css}>
      <Box>
        <Logo css={{ mb: 24 }} />
        <NavigationItem href={Routes.Tracker} icon={CheckSquareIcon} label='Daily tracker' />
        <NavigationItem href={Routes.Characters} icon={IdCardIcon} label='Characters' />
        <NavigationItem href={Routes.Tools} icon={WrenchIcon} label='Tools' />
        <NavigationItem href={Routes.Music} icon={MusicIcon} label='Music' />
      </Box>

      <Box>
        {hasSidebar && (
          <IconButton css={{ mb: 8 }} onClick={() => updateSetting('sidebar', !isSidebarOpened)} size='small'>
            {isSidebarOpened ? <ArrowToLeftIcon size='small' /> : <ArrowToRightIcon size='small' />}
          </IconButton>
        )}
        <ThemeChanger />
      </Box>
    </StyledNavigation>
  );
};

Navigation.toString = () => StyledNavigation.className;
