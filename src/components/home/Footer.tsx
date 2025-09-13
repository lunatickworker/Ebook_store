// src/components/home/Footer.tsx
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* 브랜드 소개 */}
        <div>
          <h3 className="text-lg font-semibold mb-2">📚 Ebook Store</h3>
          <p className="text-sm">
            당신의 서재를 채워줄 전자책 플랫폼. 언제 어디서나 지식을 만나보세요.
          </p>
        </div>

        {/* 링크 섹션 */}
        <div>
          <h4 className="text-md font-semibold mb-2">빠른 링크</h4>
          <ul className="text-sm space-y-1">
            <li><Link href="/about" className="hover:underline">회사 소개</Link></li>
            <li><Link href="/contact" className="hover:underline">문의하기</Link></li>
            <li><Link href="/privacy" className="hover:underline">개인정보 처리방침</Link></li>
            <li><Link href="/terms" className="hover:underline">이용약관</Link></li>
          </ul>
        </div>

        {/* SNS 아이콘 */}
        <div>
          <h4 className="text-md font-semibold mb-2">팔로우하기</h4>
          <div className="flex space-x-4 text-xl">
            <Link href="https://facebook.com" target="_blank" className="hover:text-white">📘</Link>
            <Link href="https://twitter.com" target="_blank" className="hover:text-white">🐦</Link>
            <Link href="https://instagram.com" target="_blank" className="hover:text-white">📸</Link>
          </div>
        </div>
      </div>

      {/* 저작권 */}
      <div className="mt-10 text-center text-xs text-gray-500">
        © 2025 Ebook Store. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
