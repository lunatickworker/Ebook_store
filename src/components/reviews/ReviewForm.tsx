import { useState } from 'react';

const ReviewForm = ({ onSubmit }: { onSubmit: (review: any) => void }) => {
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (rating === 0 || comment.trim() === '') {
      alert('별점과 내용을 모두 입력해주세요.');
      return;
    }
    onSubmit({ rating, comment });
    setRating(0);
    setComment('');
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 mt-6">
      <div>
        <label className="block text-sm font-medium mb-1">별점</label>
        <div className="flex space-x-1 text-xl text-yellow-500">
          {[1, 2, 3, 4, 5].map((star) => (
            <button
              type="button"
              key={star}
              onClick={() => setRating(star)}
              className={star <= rating ? '' : 'text-gray-300'}
            >
              ★
            </button>
          ))}
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium mb-1">리뷰 내용</label>
        <textarea
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          rows={4}
          className="w-full border px-3 py-2 rounded"
          placeholder="책을 읽고 느낀 점을 남겨주세요."
        />
      </div>

      <button
        type="submit"
        className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700"
      >
        리뷰 등록
      </button>
    </form>
  );
};

export default ReviewForm;
