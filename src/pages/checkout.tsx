import { useState } from 'react';

const CheckoutPage = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    address: '',
    payment: 'card',
  });

  const cartItems = [
    { id: 'book1', title: '데미안', price: 12000, quantity: 2 },
    { id: 'book2', title: '죄와 벌', price: 15000, quantity: 1 },
  ];

  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: 결제 처리 로직
    alert('주문이 완료되었습니다!');
  };

  return (
    <main className="max-w-3xl mx-auto py-12 px-6">
      <h1 className="text-2xl font-bold mb-6">🧾 결제하기</h1>

      {/* 주문 요약 */}
      <section className="mb-8">
        <h2 className="text-lg font-semibold mb-4">주문 요약</h2>
        <ul className="space-y-2 text-sm">
          {cartItems.map((item) => (
            <li key={item.id}>
              {item.title} × {item.quantity} = ₩{(item.price * item.quantity).toLocaleString()}
            </li>
          ))}
        </ul>
        <p className="mt-4 font-semibold text-right">
          총합: ₩{total.toLocaleString()}
        </p>
      </section>

      {/* 배송 및 결제 정보 */}
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block text-sm font-medium mb-1">이름</label>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            className="w-full border px-3 py-2 rounded"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">이메일</label>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            className="w-full border px-3 py-2 rounded"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">배송 주소</label>
          <input
            type="text"
            name="address"
            value={form.address}
            onChange={handleChange}
            className="w-full border px-3 py-2 rounded"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">결제 수단</label>
          <select
            name="payment"
            value={form.payment}
            onChange={handleChange}
            className="w-full border px-3 py-2 rounded"
          >
            <option value="card">신용카드</option>
            <option value="bank">계좌이체</option>
            <option value="point">포인트</option>
          </select>
        </div>

        <button
          type="submit"
          className="w-full bg-indigo-600 text-white py-3 rounded font-semibold hover:bg-indigo-700"
        >
          결제 완료
        </button>
      </form>
    </main>
  );
};

export default CheckoutPage;
