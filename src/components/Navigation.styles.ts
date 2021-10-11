import { ComponentProps } from 'react';
import { CSS, styled } from '~/stitches.config';

export type StyledNavigationProps = ComponentProps<typeof StyledNavigation> & {
  css?: CSS;
};

export const StyledNavigation = styled('aside', {
  display: 'flex',
  flexDirection: 'column',
});
