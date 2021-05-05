import { MenuList as ReachMenuList, MenuListProps as ReachMenuListProps } from '@reach/menu-button';
import { ComponentProps } from 'react';

import { styled } from '~/stitches.config';

export const MenuList = styled(ReachMenuList, {
  zIndex: 9999,
  display: 'block',
  backgroundColor: '$background',
  width: 200,
  minWidth: 160,
  py: 8,
  border: '1px solid $colors$gray200',
  borderRadius: 4,
  boxShadow: '0 2px 8px $colors$gray100',
});

export type MenuListProps = ReachMenuListProps & ComponentProps<typeof MenuList>;
