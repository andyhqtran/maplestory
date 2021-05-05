import { MenuItem as ReachMenuItem, MenuItemProps as ReachMenuItemProps } from '@reach/menu-button';
import { ComponentProps } from 'react';

import { styled } from '~/stitches.config';

export const MenuItem = styled(ReachMenuItem, {
  display: 'flex',
  alignItems: 'center',
  height: 32,
  p: 0,
  px: 16,
  color: '$gray800',

  '&:hover': {
    backgroundColor: '$gray100',
  },

  '&[data-selected]': {
    backgroundColor: '$gray100',
  },
});

export type MenuItemProps = ReachMenuItemProps & ComponentProps<typeof MenuItem>;
