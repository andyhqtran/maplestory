import { ComponentProps } from 'react';
import { CSS, styled } from '~/stitches.config';

export type StyledVerusHillaTimerProps = ComponentProps<typeof StyledVerusHillaTimer> & { css?: CSS };

export const StyledVerusHillaTimer = styled('div', {
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'column',
  justifyContent: 'center',
  border: '1px solid $colors$gray100',
  borderRadius: 4,
  paddingY: 64,
});
