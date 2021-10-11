import { ComponentProps } from 'react';

import { styled } from '~/stitches.config';

export const Button = styled('button', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: 'transparent',
  border: '1px solid $colors$gray200',
  borderRadius: 4,
  color: '$gray800',
  fontFamily: '$inter',
  fontWeight: '$regular',
  letterSpacing: -0.2,
  textAlign: 'center',
  textDecoration: 'none',
  cursor: 'pointer',

  '&:hover': {
    backgroundColor: '$gray100',
  },

  '&:focus': {
    outline: 'none',
  },

  '&:focus-visible': {
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

export type ButtonProps = ComponentProps<typeof Button>;
