import { IntlProvider } from 'react-intl';
import enLocaleData from './en';
import jaLocaleData from './ja';
import zhLocaleData from './zh';

export interface LocaleProviderProps {
  locale: string
}


interface LocaleDataMap {
  [lang: string]: {
    [wordString: string]: string;
  }
}
const Provider: React.FC<LocaleProviderProps> = ({ children, locale }) => {
  const localeDataMap: LocaleDataMap = {
    'en-us': enLocaleData,
    'en': enLocaleData,
    'zh-tw': zhLocaleData,
    'zh': zhLocaleData,
    'ja-jp': jaLocaleData,
    'ja': jaLocaleData,
  };
  const localeData = localeDataMap[locale.toLocaleLowerCase()] || enLocaleData;
  const providerLocale = locale.split('-')[0];


  return (
    <IntlProvider locale={providerLocale} textComponent="span" messages={localeData}>
      {children}
    </IntlProvider>
  )
}

export default Provider;