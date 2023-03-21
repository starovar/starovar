import Navigation from '../components/Navigation';
import { ThemeProvider } from 'next-themes';
import '@/styles/globals.css';

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider attribute="class">
      <Navigation />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
