import * as RadixDropdownMenu from '@radix-ui/react-dropdown-menu';
import { styled } from '~/stitches.config';

export const StyledDropdownMenuContent = styled(RadixDropdownMenu.Content, {
  display: 'block',
  backgroundColor: '$background',
  width: 200,
  minWidth: 160,
  py: 8,
  border: '1px solid $colors$gray200',
  borderRadius: 4,
  boxShadow: '0 2px 8px $colors$gray100',
});

export const StyledDropdownMenuItem = styled(RadixDropdownMenu.Item, {
  outline: 'none',
  display: 'flex',
  alignItems: 'center',
  height: 40,
  p: 0,
  px: 16,
  fontWeight: '$semibold',
  color: '$gray800',
  cursor: 'pointer',

  '&:hover': {
    backgroundColor: '$gray100',
  },

  '&:focus': {
    backgroundColor: '$gray100',
  },

  '&[data-disabled]': {
    color: '$gray600',
    cursor: 'not-allowed',
  },
});

export const StyledDropdownMenuItemAdornment = styled('div', {
  flexShrink: 0,
  marginRight: 12,
});
