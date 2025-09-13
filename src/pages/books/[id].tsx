import { useRouter } from 'next/router';
import Image from 'next/image';
import Link from 'next/link';

const BookDetailPage = () => {
  const router = useRouter();
  const { id } = router.query;

  // TODO: Replace with real API call
  const book = {
    id,
    title: '데미안',
    author: '헤르만 헤세',
    image: '/books/demian.jpg',
    category: '소설',
    published: '2023-05-01',
    price: 12000,
    description:
      '자아를 찾아가는 한 소년의 내면 여행. 고전이지만 여전히 현대적인 울림을 주는 작품.',
    rating: 4.8,
  };

  return (
    <main className="max-w-5xl mx-auto py-12 px-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* 이미지 */}
        <div className="relative w-full h-[400px]">
          <Image
            src={book.image}
            alt={`${book.title} 표지`}
            layout="fill"
            objectFit="cover"
            className="rounded-lg shadow"
          />
        </div>

        {/* 정보 */}
        <div>
          <h1 className="text-3xl font-bold mb-2">{book.title}</h1>
          <p className="text-sm text-gray-600 mb-1">저자: {book.author}</p>
          <p className="text-sm text-gray-600 mb-1">출판일: {book.published}</p>
          <p className="text-sm text-gray-600 mb-4">카테고리: {book.category}</p>

          <div className="text-xl font-semibold text-indigo-600 mb-4">
            ₩{book.price.toLocaleString()}
          </div>

          <div className="flex space-x-4 mb-6">
            <button className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700">
              장바구니 담기
            </button>
            <button className="border border-indigo-600 text-indigo-600 px-4 py-2 rounded hover:bg-indigo-50">
              찜하기
            </button>
          </div>

          <p className="text-gray-800 text-sm leading-relaxed">{book.description}</p>
        </div>
      </div>

      {/* 리뷰 */}
      <section className="mt-12">
        <h2 className="text-xl font-bold mb-4">사용자 리뷰</h2>
        <p className="text-yellow-500 text-lg">★ {book.rating} / 5.0</p>
        <p className="text-sm text-gray-600 mt-2">“정말 감동적인 책이에요. 다시 읽고 싶어요.”</p>
      </section>

      {/* 추천 도서 */}
      <section className="mt-16">
        <h2 className="text-xl font-bold mb-6">이 책을 읽은 사람들이 좋아한 도서</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {/* TODO: Replace with dynamic data */}
          <Link href="/books/book2" className="text-sm hover:underline">
            📘 <span>죄와 벌</span>
          </Link>
          <Link href="/books/book3" className="text-sm hover:underline">
            📗 <span>카라마조프가의 형제들</span>
          </Link>
          <Link href="/books/book4" className="text-sm hover:underline">
            📕 <span>호밀밭의 파수꾼</span>
          </Link>
          <Link href="/books/book5" className="text-sm hover:underline">
            📙 <span>1984</span>
          </Link>
        </div>
      </section>
    </main>
  );
};

export default BookDetailPage;
