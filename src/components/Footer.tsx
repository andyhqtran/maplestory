import Link from 'next/link';
import React from 'react';
import { Anchor } from '~/components/Anchor';

import { Box } from '~/components/Box';
import { Container } from '~/components/Container';
import { Text } from '~/components/Text';

export const Footer = () => {
  return (
    <Box as='footer' css={{ my: 96 }}>
      <Container>
        <Box
          css={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            height: 88,
            border: 0,
            borderTopWidth: 1,
            borderStyle: 'solid',
            borderColor: '$gray200',
          }}
        >
          <Text css={{ color: '$gray600' }} variant='body-14'>
            Copyright &copy; Andy Tran
          </Text>
          <Box>
            <Text css={{ mr: 16 }} variant='body-14'>
              <Link href='/credits' passHref>
                <Anchor css={{ color: '$gray600' }}>Credits</Anchor>
              </Link>
            </Text>
            <Text css={{ mr: 16 }} variant='body-14'>
              <Link href='https://github.com/andyhqtran/maplestory/discussions' passHref>
                <Anchor css={{ color: '$gray600' }}>Feedback</Anchor>
              </Link>
            </Text>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};
