import React, { ReactNode } from 'react';

import { Box } from '~/components/Box';
import { Footer } from '~/components/Footer';
import { Header } from '~/components/Header';
import { darkTheme, globalStyles } from '~/stitches.config';

export type DefaultLayout = {
  children: ReactNode;
};

export const DefaultLayout = ({ children }) => {
  darkTheme.className;
  globalStyles();

  return (
    <>
      <Header />
      <Box as='main'>{children}</Box>
      <Footer />
    </>
  );
};
