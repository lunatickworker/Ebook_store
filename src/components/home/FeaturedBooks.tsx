import BookCard from '../common/BookCard';
import { Book } from '@/data/books';

const cardTitle = '추천 도서';
const cardDescription = '지금 가장 인기 있는 전자책을 만나보세요.';

interface FeaturedBooksProps {
  books?: Book[];
}

const defaultBooks: Book[] = [
  {
    id: 'book1',
    title: '인간 실격',
    author: '다자이 오사무',
    coverImage: '/books/book1.jpg',
    price: 12000,
    rating: 4.5,
    description: '다자이 오사무의 대표작으로 인간 존재에 대한 깊은 고뇌를 담은 소설입니다.',
  },
  {
    id: 'book2',
    title: '데미안',
    author: '헤르만 헤세',
    coverImage: '/books/book2.jpg',
    price: 13500,
    rating: 4.8,
    description: '자아와 영혼의 성장 과정을 그린 독일 문학의 고전입니다.',
  },
];

const FeaturedBooks = ({ books }: FeaturedBooksProps) => {
  const displayBooks = books && books.length > 0 ? books : defaultBooks;

  return (
    <section className="py-12 px-6">
      <h2 className="text-2xl font-bold mb-2">{cardTitle}</h2>
      <p className="text-md text-gray-600 mb-6">{cardDescription}</p>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
        {displayBooks.map((book) => (
          <BookCard key={book.id} {...book} />
        ))}
      </div>
    </section>
  );
};

export default FeaturedBooks;
