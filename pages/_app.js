import Header from '../components/Header';
import Footer from '../components/Footer';
import { ThemeProvider } from 'next-themes';
import '@/styles/globals.css';
//import '@/styles/build.css';

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider forcedTheme={Component.theme || undefined} attribute="class">
      <Header />
      <Component {...pageProps} />
      <Footer />
    </ThemeProvider>
  );
}
