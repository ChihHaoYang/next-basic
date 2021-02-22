import { useEffect } from 'react';
import LocaleProvider from '../locales/Provider';
import CssBaseline from '@material-ui/core/CssBaseline';
import ThemeProvider from '../theme/Provider';
import { Provider } from 'react-redux';
import { useRouter } from 'next/router';
import store from '../store';
import { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const { locale } = router;

  useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  return (
    <Provider store={store}>
      <LocaleProvider
        locale={locale}
      >
        <ThemeProvider locale={locale}>
          <CssBaseline />
          <Component {...pageProps} />
        </ThemeProvider>
      </LocaleProvider>
    </Provider>
  )
}

export default MyApp
