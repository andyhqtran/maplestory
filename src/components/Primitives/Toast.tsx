import { noop } from 'lodash';
import React from 'react';
import { ToastProps as ReactToastProps } from 'react-toast-notifications';

import { Box, BoxProps } from '~/components/Primitives/Box';
import { IconButton } from '~/components/Primitives/IconButton';
import { Text } from '~/components/Primitives/Text';
import { XIcon } from './Icon';

export type ToastProps = Pick<ReactToastProps, 'onDismiss'> & BoxProps;

export const Toast = ({ children, css, onDismiss = noop, ...restOfProps }: ToastProps) => {
  return (
    <Box
      css={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        maxWidth: 400,
        backgroundColor: '$background',
        border: '1px solid $colors$gray200',
        borderRadius: 4,
        p: 16,
        mt: 16,
        boxShadow: '0 2px 8px $colors$gray100',
        ...(css as {}),
      }}
      {...restOfProps}
    >
      <Text css={{ mr: 16 }} size='body-14'>
        {children}
      </Text>
      <IconButton css={{ flexShrink: 0 }} onClick={() => onDismiss()} size='tiny'>
        <XIcon size='tiny' />
      </IconButton>
    </Box>
  );
};
