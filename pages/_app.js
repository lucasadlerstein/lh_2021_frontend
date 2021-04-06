import '../styles/globals.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { appWithTranslation } from '../i18n'

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default appWithTranslation(MyApp);