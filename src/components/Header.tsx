import React from 'react';

import { Box } from '~/components/Box';
import { Container } from '~/components/Container';
import { Logo } from '~/components/Logo';

export const Header = () => {
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
        width: '100%',
        height: 88,
        borderBottomWidth: 1,
        borderStyle: 'solid',
        borderColor: '$gray200',
      }}
    >
      <Container css={{ display: 'flex' }}>
        <Logo />
        <Box>Back to site</Box>
      </Container>
    </Box>
  );
};
