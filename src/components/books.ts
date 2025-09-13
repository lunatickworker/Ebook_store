export interface Book {
  id: number
  title: string
  author: string
  coverImage: string
  price: number
  rating: number
}

export const popularBooks: Book[] = [
  {
    id: 1,
    title: "미드나잇 라이브러리",
    author: "매트 헤이그",
    coverImage: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=500&q=80",
    price: 14220,
    rating: 4.5,
  },
  {
    id: 2,
    title: "달러구트 꿈 백화점",
    author: "이미예",
    coverImage: "https://images.unsplash.com/photo-1592496431122-2349e0fbc666?w=500&q=80",
    price: 12420,
    rating: 4.7,
  },
  {
    id: 3,
    title: "아몬드",
    author: "손원평",
    coverImage: "https://images.unsplash.com/photo-1589998059171-988d887df646?w=500&q=80",
    price: 10800,
    rating: 4.6,
  },
  {
    id: 4,
    title: "불편한 편의점",
    author: "김호연",
    coverImage: "https://images.unsplash.com/photo-1532012197267-da84d127e765?w=500&q=80",
    price: 12600,
    rating: 4.8,
  },
  {
    id: 5,
    title: "팩트풀니스",
    author: "한스 로슬링",
    coverImage: "https://images.unsplash.com/photo-1541963463532-d68292c34b19?w=500&q=80",
    price: 17820,
    rating: 4.9,
  },
]

export const recommendedBooks: Book[] = [
    {
    id: 6,
    title: "세이노의 가르침",
    author: "세이노",
    coverImage: "https://images.unsplash.com/photo-1592496431122-2349e0fbc666?w=500&q=80",
    price: 6480,
    rating: 4.9,
  },
  {
    id: 7,
    title: "원씽(THE ONE THING)",
    author: "게리 켈러",
    coverImage: "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=500&q=80",
    price: 12600,
    rating: 4.8,
  },
   {
    id: 8,
    title: "해커스 토익 기출 보카",
    author: "David Cho",
    coverImage: "https://images.unsplash.com/photo-1550399105-c4db5fb85c18?w=500&q=80",
    price: 11610,
    rating: 4.7,
  },
]
