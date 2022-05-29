// в идеале переписать на типы но i18n и c ними не дружит
const commonLocalesConfig = [
  { code: 'de', iso: 'de', label: 'Deutsch' },
  { code: 'es', iso: 'es', label: 'Español' },
  { code: 'fr', iso: 'fr', label: 'Français' },
  { code: 'it', iso: 'it', label: 'Italiano' },
  { code: 'ru', iso: 'ru', label: 'Русский' },
  { code: 'en', iso: 'en', label: 'English' },
];

export const siteLanguages = String(process.env.LANGS_LIST).split(',');

export const siteLocalesConfig = commonLocalesConfig.filter((localeObj) =>
  siteLanguages.includes(localeObj.code)
);

export const siteLanguagesWithLabels = commonLocalesConfig.filter(({ code }) =>
  siteLanguages.includes(code)
);

export const langIncrementSuffix = process.env.LANG_INCREMENT_SUFFIX
  ? process.env.LANG_INCREMENT_SUFFIX.split(',').map((suffix) =>
      parseInt(suffix, 10)
    )
  : [];

export const defaultLocale = process.env.DEFAULT_LOCALE || 'en';
