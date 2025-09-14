import { useState } from 'react';
import { useRouter } from 'next/router';
import ReviewForm from '@/components/reviews/ReviewForm';
import ReviewList from '@/components/reviews/ReviewList';

interface Review {
  rating: number;
  comment: string;
}

const BookDetailPage = () => {
  const router = useRouter();
  const { id } = router.query;

  const [reviews, setReviews] = useState<Review[]>([]);

  const handleReviewSubmit = (review: Review) => {
    setReviews((prev) => [...prev, review]);
  };

  return (
    <main className="max-w-3xl mx-auto py-12 px-6">
      <h1 className="text-2xl font-bold mb-6">📘 도서 상세 페이지</h1>

      <section className="mb-12">
        <p className="text-lg font-semibold">도서 ID: {id}</p>
        <p className="text-sm text-gray-600">여기에 도서 제목, 저자, 가격 등의 정보를 표시할 수 있어요.</p>
      </section>

      <section>
        <h2 className="text-xl font-bold mb-4">✍️ 사용자 리뷰</h2>
        <ReviewForm onSubmit={handleReviewSubmit} />
        <ReviewList reviews={reviews} />
      </section>
    </main>
  );
};

export default BookDetailPage;
