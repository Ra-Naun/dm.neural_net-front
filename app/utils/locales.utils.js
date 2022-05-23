import { langIncrementSuffix, siteLanguages } from '../config/locales.config';

export const calcCurrentSuffix = (suffixes) => {
  return (
    suffixes
      .slice()
      .sort((a, b) => a - b)
      .pop() || ''
  );
};

export const injectSuffix = (locale, suffix) => `${locale}${suffix}`;

export const currentLangSuffix = calcCurrentSuffix(langIncrementSuffix);

const langPartRegexp = new RegExp(`^(${siteLanguages.join('|')})(\\w+)?$`, 'i');

export const splitSuffix = (url) => {
  const [, locale, suffix] = url.match(langPartRegexp) || [];

  return {
    locale,
    suffix,
  };
};

/**
 * Проверяем, является ли это суффикс одним из предыдущих (заход по старой ссылке)
 * @param suffix
 * @returns {boolean}
 */
const isPastSuffix = (suffix) => {
  // если инкремента нет, то суффикс === undefined
  return langIncrementSuffix.length
    ? !langIncrementSuffix.includes(suffix)
    : !(suffix === undefined);
};

export const isNeedRedirectToCurrentSuffix = (locale, suffix) => {
  if (!locale) {
    return false;
  }

  return isPastSuffix(suffix);
};

export const prepareLocales = () =>
  siteLanguages
    .map((lang) => {
      return langIncrementSuffix.map((suffix) => injectSuffix(lang, suffix));
    })
    .flat();
