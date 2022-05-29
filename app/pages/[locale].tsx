import type { NextPage, GetStaticProps, GetStaticPaths } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';
import { ParsedUrlQuery } from 'querystring';
import Head from 'next/head';

//store:
import { wrapper } from '../store';

import nextI18NextConfig from '../next-i18next.config.js';
import { siteLanguages } from '../config/locales.config';
import IndexContent from '../components/pages/index/IndexContent/IndexContent';

interface PageParams extends ParsedUrlQuery {
  locale?: string;
}

const Home: NextPage = () => {
  const { t } = useTranslation('common');// example

  return (
    <>
      <Head>
        <title></title>
      </Head>
      <IndexContent/>
    </>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = siteLanguages.map((locale: string) => ({
    params: { locale },
  }));

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

      return {
        props: {
          ...(await serverSideTranslations(
            pureLocale,
            ['common', 'indexPage'],
            nextI18NextConfig
          )),
        },
        revalidate: 600, // In seconds
      };
    }
);

export default Home;
