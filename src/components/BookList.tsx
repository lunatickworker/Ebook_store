import BookCard from './common/BookCard'; // ✅ default import
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
            title={book.title}
            image={book.image}
            author={book.author}
            id={book.id}
          />
        ))}
      </div>
    </section>
  );
};

export default BookList;
