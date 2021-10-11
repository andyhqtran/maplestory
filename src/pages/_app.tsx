import { configure } from '@happykit/flags/config';
import { IdProvider } from '@radix-ui/react-id';
import { NextComponentType } from 'next';
import { DefaultSeo } from 'next-seo';
import { ThemeProvider } from 'next-themes';
import type { AppProps } from 'next/app';
import { ReactNode } from 'react';
import { ToastProvider } from 'react-toast-notifications';

import { Toast } from '~/components/Primitives/Toast';
import { darkTheme } from '~/stitches.config';

/**
 * Feature flag setup
 */
configure({ envKey: process.env.NEXT_PUBLIC_FLAGS_ENVIRONMENT_KEY! });

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
      <IdProvider>
        <ToastProvider autoDismiss autoDismissTimeout={6000} components={{ Toast }} placement='bottom-center'>
          <Layout {...pageProps}>
            <DefaultSeo
              description='A tool to help keep track of all your recurring MapleStory tasks.'
              title='Home'
              titleTemplate='%s | MapleStory Tracker'
            />
            <Component {...pageProps} />
          </Layout>
        </ToastProvider>
      </IdProvider>
    </ThemeProvider>
  );
};

export default MyApp;
