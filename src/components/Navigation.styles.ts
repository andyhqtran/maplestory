import { ComponentProps } from 'react';
import { CSS, styled } from '~/stitches.config';

export type StyledNavigationProps = ComponentProps<typeof StyledNavigation> & {
  css?: CSS;
};

export const StyledNavigation = styled('nav', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'space-between',
  backgroundColor: '$background',
  py: 24,
  borderRight: '1px solid $colors$gray200',
});
