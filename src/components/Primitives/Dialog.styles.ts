import * as RadixDialog from '@radix-ui/react-dialog';
import { ComponentProps } from 'react';
import { IconButton } from '~/components/Primitives/IconButton';
import { CSS, styled } from '~/stitches.config';

export const StyledDialogOverlay = styled(RadixDialog.Overlay, {
  position: 'fixed',
  inset: 0,
  background: '$overlay',
});

export type StyledDialogContentProps = ComponentProps<typeof StyledDialogContent> & { css?: CSS };

export const StyledDialogContent = styled(RadixDialog.Content, {
  outline: 'none',
  position: 'fixed',
  top: '50%',
  left: '50%',
  backgroundColor: '$background',
  width: '100%',
  maxWidth: 480,
  maxHeight: '85vh',
  border: '1px solid $colors$gray200',
  borderRadius: 4,
  boxShadow: '0 2px 8px $colors$gray100',
  marginX: 'auto',
  padding: 24,
  transform: 'translate(-50%, -50%)',
});

export const StyledDialogClose = styled(IconButton, {
  position: 'absolute',
  top: 12,
  right: 12,
});
