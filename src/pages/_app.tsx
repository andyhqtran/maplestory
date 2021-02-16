import { NextComponentType } from 'next';
import type { AppProps } from 'next/app';
import React, { ReactNode } from 'react';

type MyAppProps = AppProps & {
  Component: NextComponentType & { layout?: any };
};

const MyApp = ({ Component, pageProps }: MyAppProps) => {
  const Layout = Component.layout ?? ((props: { children: ReactNode }) => <>{props.children}</>);

  return (
    <Layout {...pageProps}>
      <Component {...pageProps} />
    </Layout>
  );
};

export default MyApp;
