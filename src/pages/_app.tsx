import { NextComponentType } from 'next';
import { DefaultSeo } from 'next-seo';
import { ThemeProvider } from 'next-themes';
import type { AppProps } from 'next/app';
import React, { ReactNode } from 'react';

import { darkTheme } from '~/stitches.config';

type MyAppProps = AppProps & {
  Component: NextComponentType & { layout?: any };
};

const MyApp = ({ Component, pageProps }: MyAppProps) => {
  const Layout = Component.layout ?? ((props: { children: ReactNode }) => <>{props.children}</>);

  return (
    <ThemeProvider
      disableTransitionOnChange={false}
      attribute='class'
      value={{ dark: darkTheme.className, light: 'light-theme' }}
      defaultTheme='system'
    >
      <Layout {...pageProps}>
        <DefaultSeo
          description='A tool to help keep track of all your recurring MapleStory tasks.'
          title='Home'
          titleTemplate='%s | MapleStory Tracker'
        />
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
};

export default MyApp;
