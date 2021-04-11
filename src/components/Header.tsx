import React from 'react';

import { Box, BoxProps } from '~/components/Box';
import { Container } from '~/components/Container';

export type HeaderProps = BoxProps;

export const Header = ({ children, css, ...restOfProps }: HeaderProps) => {
  return (
    <Box
      as='header'
      css={{
        zIndex: 1,
        position: 'sticky',
        top: 0,
        left: 0,
        display: 'flex',
        alignItems: 'center',
        backgroundColor: '$background',
        width: '100%',
        height: 64,
        border: 0,
        borderBottomWidth: 1,
        borderStyle: 'solid',
        borderColor: '$gray100',
        ...(css as {}),
      }}
      {...restOfProps}
    >
      <Container css={{ display: 'flex', alignItems: 'center' }}>{children}</Container>
    </Box>
  );
};
