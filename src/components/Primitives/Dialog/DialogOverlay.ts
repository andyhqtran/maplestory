import { DialogOverlay as ReachDialogOverlay, DialogOverlayProps as ReachDialogOverlayProps } from '@reach/dialog';
import { ComponentProps } from 'react';

import { styled } from '~/stitches.config';

export const DialogOverlay = styled(ReachDialogOverlay, {
  zIndex: 9999,
  position: 'fixed',
  top: 0,
  right: 0,
  bottom: 0,
  left: 0,
  background: '$overlay',
  overflow: 'auto',
});

export type DialogOverlayProps = ReachDialogOverlayProps & ComponentProps<typeof DialogOverlay>;
