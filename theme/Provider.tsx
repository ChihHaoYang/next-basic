import { createMuiTheme } from '@material-ui/core/styles';
import { StylesProvider, ThemeProvider } from '@material-ui/core';

export interface ThemeProviderProps {
  locale: string;
}

const Provider: React.FC<ThemeProviderProps> = ({ children, locale }) => {
  const fontFamilyMap = {
    en:
      '-apple-system, BlinkMacSystemFont, Roboto, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
    ja:
      '-apple-system,BlinkMacSystemFont,"Helvetica Neue","游ゴシック Medium",YuGothic,YuGothicM,"Hiragino Kaku Gothic ProN",メイリオ,Meiryo,sans-serif;',
    zh:
      '-apple-system, BlinkMacSystemFont, Roboto, "Noto Sans TC", "Microsoft JhengHei", "Arial", sans-serif',
  };

  function getBrowserLocale(lang: string) {
    switch (lang) {
      case 'en-us':
      case 'en':
      default:
        return 'en';
      case 'ja-jp':
      case 'ja':
        return 'ja';
      case 'zh-tw':
      case 'zh':
        return 'zh';
    }
  }

  const fontFamily = fontFamilyMap[getBrowserLocale(locale)];
  const theme = createMuiTheme({
    palette: {
      // primary: {
      //   main: '#a48867'
      // },
      // mode: 'light',
    },
    typography: {
      fontFamily,
    }
  })

  return (
    <StylesProvider injectFirst>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </StylesProvider>
  )
}

export default Provider;