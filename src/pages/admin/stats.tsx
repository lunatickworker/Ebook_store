import { useState } from 'react';

const AdminStatsPage = () => {
  const [stats] = useState({
    totalSales: 1250000,
    monthlySales: [
      { month: '5월', amount: 300000 },
      { month: '6월', amount: 350000 },
      { month: '7월', amount: 250000 },
      { month: '8월', amount: 350000 },
    ],
    topBooks: [
      { title: '데미안', sales: 1200 },
      { title: '죄와 벌', sales: 950 },
      { title: '1984', sales: 870 },
    ],
    newUsers: 320,
    totalReviews: 1450,
  });

  return (
    <main className="max-w-5xl mx-auto py-12 px-6">
      <h1 className="text-2xl font-bold mb-6">📊 통계 대시보드</h1>

      <section className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-10">
        <div className="stat-card">💰 총 판매액<br />₩{stats.totalSales.toLocaleString()}</div>
        <div className="stat-card">🧑 신규 가입자<br />{stats.newUsers}명</div>
        <div className="stat-card">📝 총 리뷰 수<br />{stats.totalReviews}개</div>
        <div className="stat-card">📚 인기 도서<br />{stats.topBooks[0].title}</div>
      </section>

      <section className="mb-10">
        <h2 className="text-lg font-semibold mb-4">📅 월별 판매 추이</h2>
        <ul className="space-y-2 text-sm">
          {stats.monthlySales.map((m, idx) => (
            <li key={idx}>
              {m.month}: ₩{m.amount.toLocaleString()}
            </li>
          ))}
        </ul>
      </section>

      <section>
        <h2 className="text-lg font-semibold mb-4">🔥 인기 도서 TOP 3</h2>
        <ul className="space-y-2 text-sm">
          {stats.topBooks.map((book, idx) => (
            <li key={idx}>
              {idx + 1}. {book.title} – {book.sales}권 판매
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
};

export default AdminStatsPage;
