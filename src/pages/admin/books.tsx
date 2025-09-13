import { useState } from 'react';
import Image from 'next/image';

interface Book {
  id: string;
  title: string;
  author: string;
  price: number;
  image: string;
}

const AdminBooksPage = () => {
  const [books, setBooks] = useState<Book[]>([
    {
      id: 'book1',
      title: '데미안',
      author: '헤르만 헤세',
      price: 12000,
      image: '/books/demian.jpg',
    },
    {
      id: 'book2',
      title: '죄와 벌',
      author: '도스토예프스키',
      price: 15000,
      image: '/books/crime.jpg',
    },
  ]);

  const handleDelete = (id: string) => {
    setBooks((prev) => prev.filter((book) => book.id !== id));
  };

  return (
    <main className="max-w-6xl mx-auto py-12 px-6">
      <h1 className="text-2xl font-bold mb-6">📚 도서 관리</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {books.map((book) => (
          <div
            key={book.id}
            className="border rounded-lg p-4 shadow-sm hover:shadow-md transition"
          >
            <div className="relative w-full h-48 mb-4">
              <Image
                src={book.image}
                alt={book.title}
                layout="fill"
                objectFit="cover"
                className="rounded"
              />
            </div>
            <h2 className="text-lg font-semibold">{book.title}</h2>
            <p className="text-sm text-gray-600">저자: {book.author}</p>
            <p className="text-sm text-gray-600">가격: ₩{book.price.toLocaleString()}</p>

            <div className="flex justify-between mt-4">
              <button className="text-indigo-600 text-sm hover:underline">수정</button>
              <button
                onClick={() => handleDelete(book.id)}
                className="text-red-500 text-sm hover:underline"
              >
                삭제
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* TODO: 도서 등록 폼 추가 예정 */}
    </main>
  );
};

export default AdminBooksPage;
