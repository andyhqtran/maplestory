import { ComponentProps } from 'react';

import { styled } from '~/stitches.config';

export const Card = styled('div', {
  backgroundColor: '$gray100',
  borderRadius: 12,
  margin: 0,
  boxSizing: 'border-box',
});

export type CardProps = ComponentProps<typeof Card>;
