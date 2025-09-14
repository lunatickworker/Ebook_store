import BookCard from './common/BookCard';
import { Book } from '@/data/books';

interface BookListProps {
  title: string;
  books: Book[];
}

const BookList = ({ title, books }: BookListProps) => {
  return (
    <section className="container my-12">
      <h2 className="text-2xl font-bold mb-6">{title}</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
        {books.map((book) => (
          <BookCard
            key={book.id}
            id={book.id}
            title={book.title}
            author={book.author}
            coverImage={book.coverImage}
            price={book.price}
            rating={book.rating}
            description={book.description}
          />
        ))}
      </div>
    </section>
  );
};

export default BookList;

