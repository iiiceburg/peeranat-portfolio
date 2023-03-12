import Theme from '../styles/theme';
import Head from 'next/head'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Peeranat Ounhanan</title>
      </Head>
      <Theme>
        <Component {...pageProps} />
      </Theme>
    </>
  );
}
