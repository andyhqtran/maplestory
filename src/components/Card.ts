import { StitchesProps } from '@stitches/react';
import { styled } from '~/stitches.config';

export const Card = styled('div', {
  backgroundColor: '$gray100',
  borderRadius: 20,
  margin: 0,
  boxSizing: 'border-box',
});

export type CardProps = StitchesProps<typeof Card>;
