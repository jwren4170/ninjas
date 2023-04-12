import '@/styles/globals.css';
import Layout from '../../components/Layout';

export default function App({ Component, pageProps, Head }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
