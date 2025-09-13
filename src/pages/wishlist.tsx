import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

interface Book {
  id: string;
  title: string;
  author: string;
  price: number;
  image: string;
}

const WishlistPage = () => {
  const [wishlist, setWishlist] = useState<Book[]>([
    {
      id: 'book1',
      title: '데미안',
      author: '헤르만 헤세',
      price: 12000,
      image: '/books/demian.jpg',
    },
    {
      id: 'book2',
      title: '호밀밭의 파수꾼',
      author: 'J.D. 샐린저',
      price: 13500,
      image: '/books/catcher.jpg',
    },
  ]);

  const removeFromWishlist = (id: string) => {
    setWishlist((prev) => prev.filter((book) => book.id !== id));
  };

  return (
    <main className="max-w-5xl mx-auto py-12 px-6">
      <h1 className="text-2xl font-bold mb-6">❤️ 찜한 도서</h1>

      {wishlist.length === 0 ? (
        <p className="text-gray-600">찜한 도서가 없습니다.</p>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {wishlist.map((book) => (
            <div
              key={book.id}
              className="border rounded-lg p-4 shadow-sm hover:shadow-md transition"
            >
              <Link href={`/books/${book.id}`}>
                <div className="relative w-full h-48 mb-4 cursor-pointer">
                  <Image
                    src={book.image}
                    alt={book.title}
                    layout="fill"
                    objectFit="cover"
                    className="rounded"
                  />
                </div>
              </Link>
              <h2 className="text-lg font-semibold">{book.title}</h2>
              <p className="text-sm text-gray-600">{book.author}</p>
              <p className="text-sm text-gray-600">₩{book.price.toLocaleString()}</p>
              <button
                onClick={() => removeFromWishlist(book.id)}
                className="mt-4 text-red-500 text-sm hover:underline"
              >
                찜 목록에서 제거
              </button>
            </div>
          ))}
        </div>
      )}
    </main>
  );
};

export default WishlistPage;
