// pages/_app.tsx

import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ScrollToTopButton from '@/components/ScrollToTopButton';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Navbar />
      <Component {...pageProps} />
      <ScrollToTopButton />
      <Footer id="contact_us"/>
    </>
  );
}

export default MyApp;
