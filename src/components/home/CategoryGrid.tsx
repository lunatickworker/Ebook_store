// src/components/home/CategoryGrid.tsx
import Link from 'next/link';

interface Category {
  name: string;
  icon: string;
  slug: string;
}

const categories: Category[] = [
  { name: '소설', icon: '📖', slug: 'novel' },
  { name: '자기계발', icon: '💡', slug: 'self-help' },
  { name: '경제/경영', icon: '📊', slug: 'business' },
  { name: 'IT/프로그래밍', icon: '💻', slug: 'tech' },
  { name: '역사', icon: '🏺', slug: 'history' },
  { name: '예술', icon: '🎨', slug: 'art' },
];

const CategoryGrid = () => {
  return (
    <section className="py-12 px-6 bg-gray-50">
      <h2 className="text-2xl font-bold mb-6">📚 카테고리별 탐색</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
        {categories.map((category) => (
          <Link
            key={category.slug}
            href={`/category/${category.slug}`}
            className="bg-white rounded-lg shadow hover:shadow-md p-4 text-center transition"
          >
            <div className="text-4xl mb-2">{category.icon}</div>
            <div className="text-sm font-medium">{category.name}</div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default CategoryGrid;
