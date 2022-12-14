import { CacheProvider, EmotionCache } from '@emotion/react';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import { SessionProvider } from 'next-auth/react';
import type { NextPage } from 'next';
import type { AppProps } from 'next/app';
import type { ReactElement, ReactNode } from 'react';

import createEmotionCache from '../lib/createEmotionCache';
import theme from '../lib/theme';

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type MyAppProps = AppProps & {
  Component: NextPageWithLayout;
  emotionCache?: EmotionCache;
};

const MyApp = ({
  Component,
  emotionCache = clientSideEmotionCache,
  pageProps: { session, ...pageProps },
}: MyAppProps) => {
  const getLayout = Component.getLayout ?? ((page) => page);

  return (
    <SessionProvider session={session}>
      <CacheProvider value={emotionCache}>
        <ThemeProvider theme={theme}>
          {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
          <CssBaseline />
          {
            getLayout(<Component {...pageProps} />)
          }
        </ThemeProvider>
      </CacheProvider>
    </SessionProvider>
  );
};

export default MyApp;
