import type { AppProps } from 'next/app';
import { appWithTranslation } from 'next-i18next';
import nextI18NextConfig from '../next-i18next.config.js';

import Layout from '../components/Layout/Layout';
import { wrapper } from '../store';

import '../styles/normalize.css';
import '../styles/globals.scss';
import '../styles/media.scss';
import { useRouter } from 'next/router';

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();

  return (
    <Layout >
      <Component {...pageProps} />
    </Layout>
  );
}

export default wrapper.withRedux(appWithTranslation(MyApp, nextI18NextConfig));
