import { NextComponentType } from 'next';
import { DefaultSeo } from 'next-seo';
import type { AppProps } from 'next/app';
import React, { ReactNode } from 'react';

type MyAppProps = AppProps & {
  Component: NextComponentType & { layout?: any };
};

const MyApp = ({ Component, pageProps }: MyAppProps) => {
  const Layout = Component.layout ?? ((props: { children: ReactNode }) => <>{props.children}</>);

  return (
    <Layout {...pageProps}>
      <DefaultSeo
        description='A tool to help keep track of all your recurring MapleStory tasks.'
        title='Home'
        titleTemplate='%s | MapleStory Tracker'
      />
      <Component {...pageProps} />
    </Layout>
  );
};

export default MyApp;
