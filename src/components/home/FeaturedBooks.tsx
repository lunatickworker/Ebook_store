const CardTitle = "추천 도서";
const CardDescription = "지금 가장 인기 있는 전자책을 만나보세요.";

const FeaturedBooks = () => {
  const books = [
    { id: 'book1', title: '인간 실격', image: '/books/book1.jpg', author: '다자이 오사무' },
    { id: 'book2', title: '데미안', image: '/books/book2.jpg', author: '헤르만 헤세' },
  ];

  return (
    <section className="py-12 px-6">
      <h2 className="text-2xl font-bold mb-2">{CardTitle}</h2>
      <p className="text-sm text-gray-600 mb-6">{CardDescription}</p>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {books.map((book) => (
          <BookCard key={book.id} {...book} />
        ))}
      </div>
    </section>
  );
};
