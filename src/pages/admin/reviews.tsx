import { useState } from 'react';

interface Review {
  id: string;
  bookTitle: string;
  user: string;
  rating: number;
  comment: string;
  date: string;
  reported: boolean;
}

const AdminReviewsPage = () => {
  const [reviews, setReviews] = useState<Review[]>([
    {
      id: 'r001',
      bookTitle: '데미안',
      user: '김서연',
      rating: 5,
      comment: '정말 감동적인 책이에요!',
      date: '2025-09-10',
      reported: false,
    },
    {
      id: 'r002',
      bookTitle: '죄와 벌',
      user: '이준호',
      rating: 2,
      comment: '내용이 너무 어렵고 지루했어요.',
      date: '2025-09-09',
      reported: true,
    },
  ]);

  const deleteReview = (id: string) => {
    setReviews((prev) => prev.filter((r) => r.id !== id));
  };

  const markResolved = (id: string) => {
    setReviews((prev) =>
      prev.map((r) => (r.id === id ? { ...r, reported: false } : r))
    );
  };

  return (
    <main className="max-w-5xl mx-auto py-12 px-6">
      <h1 className="text-2xl font-bold mb-6">📝 리뷰 관리</h1>

      <table className="w-full border text-sm">
        <thead className="bg-gray-100">
          <tr>
            <th className="p-2 text-left">도서</th>
            <th className="p-2 text-left">작성자</th>
            <th className="p-2 text-left">별점</th>
            <th className="p-2 text-left">내용</th>
            <th className="p-2 text-left">작성일</th>
            <th className="p-2 text-left">신고</th>
            <th className="p-2 text-left">관리</th>
          </tr>
        </thead>
        <tbody>
          {reviews.map((r) => (
            <tr key={r.id} className="border-t">
              <td className="p-2">{r.bookTitle}</td>
              <td className="p-2">{r.user}</td>
              <td className="p-2 text-yellow-500">{'★'.repeat(r.rating)}</td>
              <td className="p-2">{r.comment}</td>
              <td className="p-2">{r.date}</td>
              <td className="p-2">{r.reported ? '🚨 신고됨' : '✅'}</td>
              <td className="p-2 space-x-2">
                <button
                  onClick={() => deleteReview(r.id)}
                  className="text-red-500 hover:underline"
                >
                  삭제
                </button>
                {r.reported && (
                  <button
                    onClick={() => markResolved(r.id)}
                    className="text-indigo-600 hover:underline"
                  >
                    신고 처리
                  </button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  );
};

export default AdminReviewsPage;
