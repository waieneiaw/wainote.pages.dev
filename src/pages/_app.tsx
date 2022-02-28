import * as React from 'react';
import type { AppProps } from 'next/app';

import '@fortawesome/fontawesome-free/css/all.min.css';
import 'prism-themes/themes/prism-coy-without-shadows.css';

import '~self/styles/style.scss';

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
