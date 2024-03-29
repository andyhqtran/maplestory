import { ComponentProps } from 'react';

import { CSS, styled, VariantProps } from '~/stitches.config';

export type TextVariants = VariantProps<typeof Text>;

export type TextProps = ComponentProps<typeof Text> &
  TextVariants & {
    css?: CSS;
  };

export const Text = styled('span', {
  margin: 0,
  boxSizing: 'border-box',
  color: '$gray800',
  fontFamily: '$inter',

  variants: {
    size: {
      'heading-70': {
        fontSize: 70,
        fontWeight: '$black',
        letterSpacing: -2,
        lineHeight: 1.1,
      },
      'heading-50': {
        fontSize: 50,
        fontWeight: '$black',
        letterSpacing: -1,
        lineHeight: 1.1,
      },
      'heading-32': {
        fontSize: 32,
        fontWeight: '$black',
        letterSpacing: -1,
        lineHeight: 1.1,
      },
      'heading-24': {
        fontSize: 24,
        fontWeight: '$bold',
        letterSpacing: -0.3,
        lineHeight: 1.1,
      },
      'heading-20': {
        fontSize: 20,
        fontWeight: '$bold',
        letterSpacing: -0.3,
        lineHeight: 1.1,
      },
      'heading-16': {
        fontSize: 16,
        fontWeight: '$bold',
        letterSpacing: -0.3,
        lineHeight: 1.1,
      },
      'heading-14': {
        fontSize: 14,
        fontWeight: '$bold',
        letterSpacing: -0.3,
        lineHeight: '18px',
      },
      'heading-14-uppercase': {
        fontSize: 14,
        fontWeight: '$bold',
        letterSpacing: 0.8,
        lineHeight: '18px',
        textTransform: 'uppercase',
      },
      'heading-12': {
        fontSize: 12,
        fontWeight: '$bold',
        letterSpacing: -0.3,
        lineHeight: '18px',
      },
      'heading-12-uppercase': {
        fontSize: 12,
        fontWeight: '$bold',
        letterSpacing: 0.8,
        lineHeight: '18px',
        textTransform: 'uppercase',
      },
      'body-24': {
        fontSize: 24,
        fontWeight: '$regular',
        letterSpacing: -0.1,
        lineHeight: '34px',
      },
      'body-21': {
        fontSize: 21,
        fontWeight: '$regular',
        letterSpacing: -0.1,
        lineHeight: '32px',
      },
      'body-18': {
        fontSize: 18,
        fontWeight: '$regular',
        letterSpacing: 0.1,
        lineHeight: '28px',
      },
      'body-16': {
        fontSize: 16,
        letterSpacing: 0,
        fontWeight: '$regular',
        lineHeight: '24px',
      },
      'body-14': {
        fontSize: 14,
        letterSpacing: 0,
        fontWeight: '$regular',
        lineHeight: '22px',
      },
      'body-12': {
        fontSize: 12,
        letterSpacing: 0,
        fontWeight: '$regular',
        lineHeight: '18px',
      },
    },
  },

  defaultVariants: {
    size: 'body-16',
  },
});
