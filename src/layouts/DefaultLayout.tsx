import React, { ReactNode } from 'react';

import { Box } from '~/components/Box';
import { Footer } from '~/components/Footer';
import { Header } from '~/components/Header';
import { darkTheme, globalStyles } from '~/stitches.config';

export type DefaultLayoutProps = {
  children: ReactNode;
};

export const DefaultLayout = ({ children }: DefaultLayoutProps) => {
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
