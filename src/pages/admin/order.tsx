import { useState } from 'react';

interface Order {
  id: string;
  user: string;
  date: string;
  total: number;
  status: '결제 완료' | '배송 중' | '배송 완료';
}

const AdminOrdersPage = () => {
  const [orders, setOrders] = useState<Order[]>([
    {
      id: 'ORD20250913-001',
      user: '김서연',
      date: '2025-09-13',
      total: 39000,
      status: '결제 완료',
    },
    {
      id: 'ORD20250912-002',
      user: '이준호',
      date: '2025-09-12',
      total: 15000,
      status: '배송 중',
    },
  ]);

  const updateStatus = (id: string) => {
    setOrders((prev) =>
      prev.map((order) =>
        order.id === id
          ? {
              ...order,
              status:
                order.status === '결제 완료'
                  ? '배송 중'
                  : order.status === '배송 중'
                  ? '배송 완료'
                  : '배송 완료',
            }
          : order
      )
    );
  };

  return (
    <main className="max-w-5xl mx-auto py-12 px-6">
      <h1 className="text-2xl font-bold mb-6">📦 주문 관리</h1>

      <table className="w-full border text-sm">
        <thead className="bg-gray-100">
          <tr>
            <th className="p-2 text-left">주문 번호</th>
            <th className="p-2 text-left">사용자</th>
            <th className="p-2 text-left">주문일</th>
            <th className="p-2 text-left">총액</th>
            <th className="p-2 text-left">상태</th>
            <th className="p-2 text-left">관리</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => (
            <tr key={order.id} className="border-t">
              <td className="p-2">{order.id}</td>
              <td className="p-2">{order.user}</td>
              <td className="p-2">{order.date}</td>
              <td className="p-2">₩{order.total.toLocaleString()}</td>
              <td className="p-2">{order.status}</td>
              <td className="p-2">
                <button
                  onClick={() => updateStatus(order.id)}
                  className="text-indigo-600 hover:underline"
                >
                  상태 변경
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  );
};

export default AdminOrdersPage;
