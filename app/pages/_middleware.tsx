import { NextRequest, NextResponse } from 'next/server';

import {
  currentLangSuffix,
  injectSuffix,
  isNeedRedirectToCurrentSuffix,
  splitSuffix,
} from '../utils/locales.utils';
import { defaultLocale, siteLocalesConfig } from '../config/locales.config';
import { baseUrl } from '../config/site.config';

const PUBLIC_FILE = /\.(.*)$/;

export function middleware(request: NextRequest) {
  const { href } = request.nextUrl;
  const [, , , langPart, ...otherPath] = href.split('/');
  const { locale, suffix } = splitSuffix(langPart);

  const shouldHandleLocale =
    !PUBLIC_FILE.test(request.nextUrl.pathname) &&
    !request.nextUrl.pathname.includes('/api/');

  if (!locale && !href.includes('sitemap.xml') && shouldHandleLocale) {
    const userLang = request.headers
      .get('accept-language')
      ?.slice(0, 2)
      .toLowerCase();
    const hasUserLang = siteLocalesConfig.some((el) => el.code === userLang);
    const [, , , ...otherPathWithoutLocale] = href.split('/');
    const correctLocale = hasUserLang ? userLang : defaultLocale;
    const urlWithLocale = [
      baseUrl,
      `${correctLocale}${currentLangSuffix}`,
      ...otherPathWithoutLocale,
    ].join('/');

    return NextResponse.redirect(
      urlWithLocale.endsWith('/') ? urlWithLocale.slice(0, -1) : urlWithLocale
    );
  }

  if (
    isNeedRedirectToCurrentSuffix(locale, Number(suffix)) &&
    shouldHandleLocale
  ) {
    const newLangPart = injectSuffix(locale, currentLangSuffix);
    const newUrl = [baseUrl, newLangPart, ...otherPath].join('/');

    return NextResponse.redirect(newUrl);
  }
}
