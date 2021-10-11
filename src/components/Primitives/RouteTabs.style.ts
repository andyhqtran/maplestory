import { ComponentProps } from 'react';
import { CSS, styled } from '~/stitches.config';

export type StyledRouteTabsProps = ComponentProps<typeof StyledRouteTabs> & { css?: CSS };

export const StyledRouteTabs = styled('nav', {
  display: 'flex',
  alignItems: 'center',
  boxShadow: 'inset 0 -1px 0 $colors$gray200',
});

export const StyledRouteTabsItem = styled('a', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  height: 48,
  borderTop: '2px solid transparent',
  marginRight: 24,
  color: '$gray800',
  fontWeight: '$semibold',
  textDecoration: 'none',
  cursor: 'pointer',

  '&:hover': {
    color: '$primary800',
  },
});
