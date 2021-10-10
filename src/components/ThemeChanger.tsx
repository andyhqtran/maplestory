import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { MoonIcon, SunIcon } from '~/components/Primitives/Icon';
import { IconButton } from '~/components/Primitives/IconButton';
import { VisuallyHidden } from '~/components/VisuallyHidden';
import { THEME_CHANGER } from '~/constants/testIds';

export const ThemeChanger = () => {
  const [isMounted, setIsMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  const isDarkTheme = theme === 'dark';

  useEffect(() => setIsMounted(true), []);

  if (!isMounted) return null;

  return (
    <IconButton
      data-testid={THEME_CHANGER}
      onClick={() => (isDarkTheme ? setTheme('light') : setTheme('dark'))}
      size='small'
    >
      {isDarkTheme ? (
        <>
          <VisuallyHidden>Switch to light mode</VisuallyHidden>
          <SunIcon size='small' />
        </>
      ) : (
        <>
          <VisuallyHidden>Switch to dark mode</VisuallyHidden>
          <MoonIcon size='small' />
        </>
      )}
    </IconButton>
  );
};
