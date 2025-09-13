import Link from 'next/link';

const OrderConfirmationPage = () => {
  // TODO: Replace with real order data
  const order = {
    id: 'ORD20250913-001',
    name: '김서연',
    email: 'seoyeon@example.com',
    address: '경기도 화성시 동탄대로 123',
    items: [
      { title: '데미안', quantity: 2, price: 12000 },
      { title: '죄와 벌', quantity: 1, price: 15000 },
    ],
  };

  const total = order.items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <main className="max-w-3xl mx-auto py-12 px-6 text-center">
      <h1 className="text-3xl font-bold text-indigo-600 mb-4">🎉 주문 완료!</h1>
      <p className="text-sm text-gray-700 mb-6">
        감사합니다, {order.name}님. 주문이 성공적으로 접수되었습니다.
      </p>

      <div className="bg-gray-50 border rounded-lg p-6 text-left">
        <p className="text-sm mb-2">📦 주문 번호: <strong>{order.id}</strong></p>
        <p className="text-sm mb-2">📍 배송 주소: {order.address}</p>
        <p className="text-sm mb-4">📧 이메일: {order.email}</p>

        <h2 className="text-md font-semibold mb-2">🧾 주문 내역</h2>
        <ul className="text-sm space-y-1">
          {order.items.map((item, idx) => (
            <li key={idx}>
              {item.title} × {item.quantity} = ₩{(item.price * item.quantity).toLocaleString()}
            </li>
          ))}
        </ul>

        <p className="mt-4 font-semibold text-right">
          총합: ₩{total.toLocaleString()}
        </p>
      </div>

      <div className="mt-8 flex justify-center gap-4">
        <Link
          href="/"
          className="bg-indigo-600 text-white px-6 py-2 rounded hover:bg-indigo-700"
        >
          홈으로 돌아가기
        </Link>
        <Link
          href="/my-orders"
          className="border border-indigo-600 text-indigo-600 px-6 py-2 rounded hover:bg-indigo-50"
        >
          주문 내역 보기
        </Link>
      </div>
    </main>
  );
};

export default OrderConfirmationPage;
