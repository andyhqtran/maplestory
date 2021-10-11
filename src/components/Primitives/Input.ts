import { ComponentProps } from 'react';

import { styled } from '~/stitches.config';

export const Input = styled('input', {
  outline: 'none',
  display: 'block',
  backgroundColor: '$gray100',
  border: 0,
  borderRadius: 4,
  p: 0,
  fontFamily: '$inter',
  fontWeight: '$regular',
  boxSizing: 'border-box',

  '&:focus': {
    boxShadow: '0 0 0 2px $colors$focus',
  },

  variants: {
    size: {
      large: {
        height: 48,
        paddingLeft: 24,
        paddingRight: 24,
        fontSize: 18,
      },
      medium: {
        height: 40,
        paddingLeft: 24,
        paddingRight: 24,
        fontSize: 16,
      },
      small: {
        height: 32,
        paddingLeft: 20,
        paddingRight: 20,
        fontSize: 14,
      },
    },
  },

  defaultVariants: {
    size: 'small',
  },
});

export type InputProps = ComponentProps<typeof Input>;
