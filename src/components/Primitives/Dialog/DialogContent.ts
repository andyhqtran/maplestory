import { DialogContent as ReachDialogContent, DialogContentProps as ReachDialogContentProps } from '@reach/dialog';
import { ComponentProps } from 'react';

import { styled } from '~/stitches.config';

export const DialogContent = styled(ReachDialogContent, {
  outline: 'none',
  position: 'relative',
  backgroundColor: '$background',
  width: '100%',
  maxWidth: 480,
  border: '1px solid $colors$gray200',
  borderRadius: 4,
  boxShadow: '0 2px 8px $colors$gray100',
  p: 24,
  mt: '10vh',
  mx: 'auto',
  boxSizing: 'border-box',
});

export type DialogContentProps = ReachDialogContentProps & ComponentProps<typeof DialogContent>;
