import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.min.css'

import { wrapper } from '../redux'

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

MyApp.getInitialProps = async ({Component, ctx}) => {
  console.log('myapp', Component)
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
