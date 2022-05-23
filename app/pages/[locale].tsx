import type { NextPage, GetStaticProps, GetStaticPaths } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';
import { ParsedUrlQuery } from 'querystring';

//store:
import { wrapper } from '../store';

import nextI18NextConfig from '../next-i18next.config.js';
import { siteLanguages } from '../config/locales.config';
import IndexContent from '../components/IndexContent/IndexContent';

interface PageParams extends ParsedUrlQuery {
  locale?: string;
}

const Home: NextPage = () => {
  const { t } = useTranslation('common');// example

  return (
    <IndexContent/>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = siteLanguages.map((locale: string) => ({
    params: { locale },
  }));

  console.log('~| [locale].tsx getStaticPaths siteLanguages: ', siteLanguages);

  return {
    paths,
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps = wrapper.getStaticProps(
  (store) =>
    async ({ params }) => {
      const { locale = '' } = params as PageParams;
      const pureLocale = locale.replace(/[0-9]/g, '');

      console.log('~| [locale].tsx getStaticProps pureLocale: ', pureLocale);

      return {
        props: {
          ...(await serverSideTranslations(
            pureLocale,
            ['common'],
            nextI18NextConfig
          )),
        },
        revalidate: 600, // In seconds
      };
    }
);

export default Home;
