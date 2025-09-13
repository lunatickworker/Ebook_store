import Link from 'next/link';

const AdminDashboard = () => {
  return (
    <main className="max-w-5xl mx-auto py-12 px-6">
      <h1 className="text-3xl font-bold mb-6">🛠️ 관리자 대시보드</h1>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
        <Link href="/admin/books" className="admin-card">📚 도서 관리</Link>
        <Link href="/admin/users" className="admin-card">👥 사용자 관리</Link>
        <Link href="/admin/orders" className="admin-card">📦 주문 관리</Link>
        <Link href="/admin/reviews" className="admin-card">📝 리뷰 관리</Link>
        <Link href="/admin/stats" className="admin-card">📊 통계 보기</Link>
      </div>
    </main>
  );
};

export default AdminDashboard;
