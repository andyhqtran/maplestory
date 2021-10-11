import { ComponentProps } from 'react';
import { CSS, styled } from '~/stitches.config';

export type StyledHeaderProps = ComponentProps<typeof StyledHeader> & { css?: CSS };

export const StyledHeader = styled('header', {
  position: 'sticky',
  top: 0,
  left: 0,
  display: 'flex',
  alignItems: 'center',
  backgroundColor: '$background',
  width: '100%',
  height: 80,
  border: 0,
  borderBottom: '1px solid $colors$gray100',
});
