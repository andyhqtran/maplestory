import { ComponentProps } from 'react';
import { CSS, styled } from '~/stitches.config';

export type StyledLogoProps = ComponentProps<typeof StyledLogo> & { css?: CSS };

export const StyledLogo = styled('a', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: '$gray100',
  width: 40,
  height: 40,
  borderRadius: 20,
  cursor: 'pointer',
  textDecoration: 'none',

  '&:hover': {
    backgroundColor: '$gray200',
  },

  '&:focus': {
    boxShadow: '0 0 0 2px $colors$focus',
  },
});
