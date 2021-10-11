import { styled } from '~/stitches.config';

export const StyledNavigationItem = styled('a', {
  display: 'flex',
  alignItems: 'center',
  height: 40,
  borderRadius: 4,
  marginBottom: 4,
  paddingX: 12,
  color: '$gray700',
  fontWeight: '$bold',
  textDecoration: 'none',

  '&:hover': {
    backgroundColor: '$gray100',
  },

  '&:last-of-type': {
    marginBottom: 0,
  },
});

export const StyledNavigationItemAdornment = styled('div', {
  display: 'flex',
  alignItems: 'center',
  flexShrink: 0,
  justifyContent: 'center',
});
