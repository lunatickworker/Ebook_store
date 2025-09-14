import Head from 'next/head';
import { NextPage } from 'next';
import { useTranslation } from 'next-i18next';

import LanguageSwitcher from '@/components/i18n/LanguageSwitcher';
import HeroSection from '@/components/home/HeroSection';
import FeaturedBooks from '@/components/home/FeaturedBooks';
import CategoryGrid from '@/components/home/CategoryGrid';
import ReviewHighlights from '@/components/home/ReviewHighlights';
import Footer from '@/components/home/Footer';

const HomePage: NextPage = () => {
  const { t } = useTranslation('common');

  return (
    <>
      <Head>
        <title>Ebook Store | 당신의 전자책 서재</title>
        <meta name="description" content="베스트셀러부터 희귀 도서까지, 지금 바로 만나보세요." />
        <meta property="og:title" content="Ebook Store" />
        <meta property="og:description" content="전자책을 쉽고 빠르게 구매하고 열람하세요." />
        <meta property="og:image" content="/og-image.jpg" />
      </Head>

      <main className="bg-white text-gray-900 px-6 py-8">
        <LanguageSwitcher />
        <h1 className="text-3xl font-bold mb-4">{t('welcome')}</h1>
        <button className="bg-blue-600 text-white px-4 py-2 rounded mb-8">{t('login')}</button>

        <HeroSection />
        <FeaturedBooks />
        <CategoryGrid />
        <ReviewHighlights />
      </main>

      <Footer />
    </>
  );
};

export default HomePage;
