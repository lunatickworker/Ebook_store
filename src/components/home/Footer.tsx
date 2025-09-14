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
            <li><Link href="/about" legacyBehavior><a>회사 소개</a></Link></li>
            <li><Link href="/contact" legacyBehavior><a>문의하기</a></Link></li>
            <li><Link href="/privacy" legacyBehavior><a>개인정보 처리방침</a></Link></li>
            <li><Link href="/terms" legacyBehavior><a>이용약관</a></Link></li>
          </ul>
        </div>

        {/* SNS 아이콘 */}
        <div>
          <h4 className="text-md font-semibold mb-2">팔로우하기</h4>
          <div className="flex space-x-4 text-xl">
            <Link href="https://facebook.com" legacyBehavior><a target="_blank" className="hover:text-white">📘</a></Link>
            <Link href="https://twitter.com" legacyBehavior><a target="_blank" className="hover:text-white">🐦</a></Link>
            <Link href="https://instagram.com" legacyBehavior><a target="_blank" className="hover:text-white">📸</a></Link>
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
