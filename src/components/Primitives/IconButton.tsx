import { ComponentProps } from 'react';

import { styled } from '~/stitches.config';

export const IconButton = styled('button', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: 'transparent',
  p: 0,
  border: '1px solid transparent',
  borderRadius: 4,
  color: '$gray600',
  textDecoration: 'none',
  cursor: 'pointer',

  '&:hover': {
    backgroundColor: '$gray100',
    color: '$gray800',
  },

  '&:active': {
    borderColor: '$gray200',
  },

  '&:focus': {
    outline: 'none',
  },

  '&:focus-visible': {
    borderColor: 'transparent',
    boxShadow: '0 0 0 2px $colors$focus',
    color: '$gray800',
  },

  variants: {
    size: {
      large: {
        width: 48,
        height: 48,
        fontSize: 18,
      },
      medium: {
        width: 40,
        height: 40,
        fontSize: 18,
      },
      small: {
        width: 32,
        height: 32,
        fontSize: 16,
      },
      tiny: {
        width: 24,
        height: 24,
        fontSize: 14,
      },
      micro: {
        width: 16,
        height: 16,
      },
    },
  },

  defaultVariants: {
    size: 'small',
  },
});

export type IconButtonProps = ComponentProps<typeof IconButton>;
