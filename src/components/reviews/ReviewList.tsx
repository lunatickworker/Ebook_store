interface Review {
  rating: number;
  comment: string;
}

const ReviewList = ({ reviews }: { reviews: Review[] }) => {
  return (
    <div className="space-y-6">
      {reviews.length === 0 ? (
        <p className="text-sm text-gray-500">아직 등록된 리뷰가 없습니다.</p>
      ) : (
        reviews.map((r, idx) => (
          <div key={idx} className="border-b pb-4">
            <div className="text-yellow-500 text-sm">
              {'★'.repeat(r.rating)}{'☆'.repeat(5 - r.rating)}
            </div>
            <p className="text-sm text-gray-800 mt-1">{r.comment}</p>
            <p className="text-xs text-gray-500 mt-1">– 사용자</p>
          </div>
        ))
      )}
    </div>
  );
};

export default ReviewList;
