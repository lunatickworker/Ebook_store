// src/pages/index.tsx
import Head from 'next/head';
import HeroSection from '@/components/home/HeroSection';
import FeaturedBooks from '@/components/home/FeaturedBooks';
import CategoryGrid from '@/components/home/CategoryGrid';
import ReviewHighlights from '@/components/home/ReviewHighlight';
import Footer from '@/components/home/Footer';
import InstallPrompt from '@/components/pwa/InstallPrompt';
import { useTranslation } from 'next-i18next';
import LanguageSwitcher from '@/components/i18n/LanguageSwitcher';

const HomePage = () => {
  const { t } = useTranslation('common');

  return (
    <main>
      <LanguageSwitcher />
      <h1>{t('welcome')}</h1>
      <button>{t('login')}</button>
    </main>
  );
};

export default HomePage;

function MyApp({ Component, pageProps }) {
  return (
    <>
      <InstallPrompt />
      <Component {...pageProps} />
    </>
  );
}

export default function HomePage() {
  return (
    <>
      <Head>
        <title>Ebook Store | 당신의 전자책 서재</title>
        <meta name="description" content="베스트셀러부터 희귀 도서까지, 지금 바로 만나보세요." />
        <meta property="og:title" content="Ebook Store" />
        <meta property="og:description" content="전자책을 쉽고 빠르게 구매하고 열람하세요." />
        <meta property="og:image" content="/og-image.jpg" />
      </Head>

      <main className="bg-white text-gray-900">
        <HeroSection />
        <FeaturedBooks />
        <CategoryGrid />
        <ReviewHighlights />
      </main>

      <Footer />
    </>
  );
}
