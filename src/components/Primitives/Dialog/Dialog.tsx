import VisuallyHidden from '@reach/visually-hidden';
import React from 'react';
import { Box } from '~/components/Primitives/Box';
import { DialogContent } from '~/components/Primitives/Dialog/DialogContent';

import { DialogOverlay, DialogOverlayProps } from '~/components/Primitives/Dialog/DialogOverlay';
import { XIcon } from '~/components/Primitives/Icon';
import { IconButton } from '~/components/Primitives/IconButton';
import { Text } from '~/components/Primitives/Text';

export type DialogProps = Pick<DialogOverlayProps, 'children' | 'isOpen' | 'onDismiss' | 'title'> & {
  title: string;
};

export const Dialog = ({ children, isOpen, onDismiss, title }: DialogProps) => {
  return (
    <DialogOverlay isOpen={isOpen} onDismiss={onDismiss}>
      <DialogContent aria-label={title}>
        <Box as='header' css={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 24 }}>
          <Text as='h1' size='heading-20'>
            {title}
          </Text>
          <IconButton onClick={onDismiss}>
            <VisuallyHidden>Close dialog (ESC)</VisuallyHidden>
            <XIcon size='tiny' />
          </IconButton>
        </Box>
        {children}
      </DialogContent>
    </DialogOverlay>
  );
};
