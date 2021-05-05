import VisuallyHidden from '@reach/visually-hidden';
import Link from 'next/link';
import React from 'react';

import { Box, BoxProps } from '~/components/Primitives/Box';

export type LogoProps = BoxProps;

export const Logo = ({ css }: LogoProps) => {
  return (
    <Link href='/' passHref>
      <Box
        as='a'
        css={{
          display: 'block',
          backgroundColor: '$gray100',
          width: 40,
          height: 40,
          borderRadius: 20,
          cursor: 'pointer',

          '&:hover': {
            backgroundColor: '$gray200',
          },

          ...(css as {}),
        }}
      >
        <VisuallyHidden>MapleStory Tracker</VisuallyHidden>
        {/** @todo Add logo by @drawwithkristi */}
      </Box>
    </Link>
  );
};
