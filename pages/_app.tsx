import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.min.css'

import type { AppProps } from 'next/app'
import { wrapper } from '../redux'

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return <Component {...pageProps} />
}

MyApp.getInitialProps = async ({Component, ctx}) => {
  return {
    pageProps: {
      // Call page-level getInitialProps
      ...(Component.getInitialProps
        ? await Component.getInitialProps(ctx)
        : {}),
      // Some custom thing for all pages
      appProp: ctx.pathname
    }
  };
}

export default wrapper.withRedux(MyApp)
