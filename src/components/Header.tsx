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
        backgroundColor: '$background',
        width: '100%',
        height: 88,
        border: 0,
        borderBottomWidth: 1,
        borderStyle: 'solid',
        borderColor: '$gray200',
      }}
    >
      <Container css={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <Logo />
      </Container>
    </Box>
  );
};
