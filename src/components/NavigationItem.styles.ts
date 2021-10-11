import { ComponentProps } from 'react';
import { CSS, styled } from '~/stitches.config';

export type StyledNavigationItemProps = ComponentProps<typeof StyledNavigationItem> & { css?: CSS };

export const StyledNavigationItem = styled('div', {
  position: 'relative',
  display: 'flex',
  alignItems: 'center',
  height: 40,
  borderRadius: 4,
  marginBottom: 4,
  color: '$gray700',
  fontWeight: '$bold',

  '&:hover': {
    backgroundColor: '$gray100',
  },

  '&:last-of-type': {
    marginBottom: 0,
  },
});

export const StyledNavigationItemAdornment = styled('div', {
  position: 'absolute',
  top: '50%',
  display: 'flex',
  alignItems: 'center',
  flexShrink: 0,
  justifyContent: 'center',
  transform: 'translateY(-50%)',
});

export const StyledNavigationItemAnchor = styled('a', {
  outline: 0,
  display: 'flex',
  alignItems: 'center',
  width: '100%',
  height: '100%',
  borderRadius: 4,
  paddingX: 32,
  color: 'inherit',
  fontWeight: 'inherit',
  textDecoration: 'none',

  '&:focus-visible': {
    boxShadow: '0 0 0 2px $colors$focus',
  },
});
