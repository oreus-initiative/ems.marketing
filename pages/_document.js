import Document, { Html, Head, Main, NextScript } from 'next/document';
// import MessengerContainer from '../components/_plugins/messenger/MessengerContainer';
// import MessengerScript from '../components/_plugins/messenger/MessengerScript';
import GoogleAnalyticsScript from '../components/_plugins/GoogleAnalyticsScript';
import { GA_TRACKING_ID } from '../gtag';

export default class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <meta property="title" content="Split" />
          <meta name="description" content="Free apps mostly rely on monetisation methods worsening user experience. We’re here to solve that problem by building a tool for developers to reward their users using EOS." />
          <link rel="icon" href="/favicon.ico" />
          <meta property="og:url" content="https://split.oreus.ca" />
          <meta property="og:type" content="website" />
          <meta property="og:image" content="/preview.png" />
          <meta property="og:image:width" content="1200" />
          <meta property="og:image:height" content="1200" />
          <meta property="og:site_name" content="Split" />
          <meta name="robots" content="index,follow" />
          <meta name="googlebot" content="index,follow" />
          <meta charSet="utf-8" />
          <GoogleAnalyticsScript gaTrackingId={GA_TRACKING_ID} />
          {/* <MessengerScript /> */}
        </Head>
        <body>
          {/* <MessengerContainer pageId="***REMOVED***"> */}
            <Main />
            <NextScript />
          {/* </MessengerContainer> */}
        </body>
      </Html>
    )
  }
}