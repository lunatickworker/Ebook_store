// src/components/i18n/LanguageSwitcher.tsx
import { useRouter } from 'next/router';

const LanguageSwitcher = () => {
  const router = useRouter();
  const changeLanguage = (lang: string) => {
    router.push(router.pathname, router.asPath, { locale: lang });
  };

  return (
    <div className="space-x-2">
      <button onClick={() => changeLanguage('ko')}>🇰🇷 한국어</button>
      <button onClick={() => changeLanguage('en')}>🇺🇸 English</button>
      <button onClick={() => changeLanguage('ja')}>🇯🇵 日本語</button>
    </div>
  );
};

export default LanguageSwitcher;
