import { AppProps } from 'next/app';
import { appWithTranslation } from 'next-i18next';
import InstallPrompt from '@/components/pwa/InstallPrompt';
import '@/styles/globals.css'; // ✅ 글로벌 스타일 (필요 시)

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <InstallPrompt />
      <Component {...pageProps} />
    </>
  );
}

export default appWithTranslation(MyApp);
