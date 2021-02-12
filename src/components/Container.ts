import { StitchesProps } from '@stitches/react';

import { styled } from '~/stitches.config';

export const Container = styled('div', {
  width: '100%',
  maxWidth: 1296,
  m: 0,
  mx: 'auto',
  px: 56,
  boxSizing: 'border-box',
});

export type ContainerProps = StitchesProps<typeof Container>;
