import Document, { Html, Head, Main, NextScript } from 'next/document';

import { getCssString } from '~/stitches.config';

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang='en'>
        <Head>
          <meta charSet='utf-8' />
          <meta httpEquiv='X-UA-Compatible' content='IE=edge' />
          {/* <meta
            name='viewport'
            content='width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no'
          /> */}

          <link href='/css/normalize.css' rel='stylesheet' />

          <link href='/manifest.json' rel='manifest' />
          <link href='/images/icons/favicon-16x16.png' rel='icon' type='image/png' sizes='16x16' />
          <link href='/images/icons/favicon-32x32.png' rel='icon' type='image/png' sizes='32x32' />

          <link rel='apple-touch-icon' href='/images/icons/apple-icon.png'></link>
          <style>{getCssString()}</style>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
