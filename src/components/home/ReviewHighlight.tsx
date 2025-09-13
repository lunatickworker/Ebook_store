// src/components/home/ReviewHighlights.tsx
interface Review {
  user: string;
  comment: string;
  rating: number;
}

const reviews: Review[] = [
  {
    user: '김서연',
    comment: '책 내용이 정말 깊이 있고, 전자책 뷰어도 편리해요!',
    rating: 5,
  },
  {
    user: '이준호',
    comment: '배송 없이 바로 읽을 수 있어서 너무 좋아요.',
    rating: 4,
  },
  {
    user: '박지민',
    comment: '카테고리별 추천이 유용했어요. 다음 책도 여기서 살 예정!',
    rating: 5,
  },
];

const ReviewHighlights = () => {
  return (
    <section className="py-12 px-6 bg-white">
      <h2 className="text-2xl font-bold mb-6">🌟 사용자 리뷰</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {reviews.map((review, idx) => (
          <div
            key={idx}
            className="border rounded-lg shadow-sm p-6 hover:shadow-md transition"
          >
            <div className="text-yellow-500 mb-2">
              {'★'.repeat(review.rating)}{'☆'.repeat(5 - review.rating)}
            </div>
            <p className="text-sm text-gray-700 mb-4">"{review.comment}"</p>
            <p className="text-xs text-gray-500 text-right">– {review.user}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ReviewHighlights;
