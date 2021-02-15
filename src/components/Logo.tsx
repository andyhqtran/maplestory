import VisuallyHidden from '@reach/visually-hidden';
import Link from 'next/link';
import React from 'react';

import { Box } from '~/components/Box';

export const Logo = () => {
  return (
    <Link href='/' passHref>
      <Box
        as='a'
        css={{
          backgroundColor: '$gray100',
          width: 56,
          height: 56,
          borderRadius: 28,
          cursor: 'pointer',
          '&:hover': {
            backgroundColor: '$gray200',
          },
        }}
      >
        <VisuallyHidden>MapleStory Tracker</VisuallyHidden>
        {/** @todo Add logo by @drawwithkristi */}
      </Box>
    </Link>
  );
};
