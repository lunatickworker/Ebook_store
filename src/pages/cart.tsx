import Image from 'next/image';
import Link from 'next/link';

const CartPage = () => {
  // TODO: Replace with real cart state
  const cartItems = [
    {
      id: 'book1',
      title: '데미안',
      author: '헤르만 헤세',
      image: '/books/demian.jpg',
      price: 12000,
      quantity: 2,
    },
    {
      id: 'book2',
      title: '죄와 벌',
      author: '도스토예프스키',
      image: '/books/crime.jpg',
      price: 15000,
      quantity: 1,
    },
  ];

  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <main className="max-w-4xl mx-auto py-12 px-6">
      <h1 className="text-2xl font-bold mb-6">🛒 장바구니</h1>

      {cartItems.length === 0 ? (
        <p className="text-gray-600">장바구니가 비어 있습니다.</p>
      ) : (
        <div className="space-y-6">
          {cartItems.map((item) => (
            <div
              key={item.id}
              className="flex items-center border-b pb-4 gap-4"
            >
              <Image
                src={item.image}
                alt={item.title}
                width={80}
                height={120}
                className="rounded"
              />
              <div className="flex-1">
                <h2 className="font-semibold">{item.title}</h2>
                <p className="text-sm text-gray-500">{item.author}</p>
                <p className="text-sm mt-1">₩{item.price.toLocaleString()}</p>
              </div>
              <div className="flex items-center gap-2">
                <button className="px-2 py-1 border rounded">−</button>
                <span>{item.quantity}</span>
                <button className="px-2 py-1 border rounded">＋</button>
              </div>
              <button className="text-red-500 text-sm hover:underline ml-4">
                삭제
              </button>
            </div>
          ))}

          <div className="text-right mt-8">
            <p className="text-lg font-semibold">
              총합: ₩{total.toLocaleString()}
            </p>
            <Link
              href="/checkout"
              className="inline-block mt-4 bg-indigo-600 text-white px-6 py-2 rounded hover:bg-indigo-700"
            >
              결제하기
            </Link>
          </div>
        </div>
      )}
    </main>
  );
};

export default CartPage;
