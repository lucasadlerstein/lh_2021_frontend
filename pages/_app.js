import '../styles/globals.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'intl-tel-input/build/css/intlTelInput.css';
import { appWithTranslation } from '../i18n';
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";


const initialOptions = {
  "client-id": process.env.clientID,
  currency: "USD",
  intent: "capture",
  "data-client-token": process.env.secretTKN,
};

function MyApp({ Component, pageProps }) {
  return (
    <Component {...pageProps} />

    // <PayPalScriptProvider options={initialOptions}>
    //   <Component {...pageProps} />
    // </PayPalScriptProvider>

  )
}

export default appWithTranslation(MyApp);