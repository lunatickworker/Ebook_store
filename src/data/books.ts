export interface Book {
  id: number
  title: string
  author: string
  coverImage: string
  price: number
  rating: number
  description: string
}

export const popularBooks: Book[] = [
  {
    id: 1,
    title: "미드나잇 라이브러리",
    author: "매트 헤이그",
    coverImage: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=500&q=80",
    price: 14220,
    rating: 4.5,
    description: "삶의 가장 어두운 순간에 노라 시드는 미드나잇 라이브러리에 도착합니다. 그곳에서 그녀는 자신이 살았을지도 모르는 모든 다른 삶을 탐험할 기회를 얻습니다. 단 한 번의 선택이 수많은 가능성을 만들어내는 경이로운 이야기."
  },
  {
    id: 2,
    title: "달러구트 꿈 백화점",
    author: "이미예",
    coverImage: "https://images.unsplash.com/photo-1593349349909-478631b2d39d?w=500&q=80",
    price: 12420,
    rating: 4.7,
    description: "잠들어야만 입장할 수 있는 기묘한 가게, '달러구트 꿈 백화점'에 오신 것을 환영합니다. 여기서는 모든 종류의 꿈을 사고팔 수 있습니다. 신입 사원 페니의 눈을 통해 꿈의 세계를 탐험하며, 잊고 지냈던 감정들을 되찾아 보세요."
  },
  {
    id: 3,
    title: "아몬드",
    author: "손원평",
    coverImage: "https://images.unsplash.com/photo-1589998059171-988d887df646?w=500&q=80",
    price: 10800,
    rating: 4.6,
    description: "감정을 느끼지 못하는 소년 윤재. 평범한 삶을 살던 그의 인생은 끔찍한 사건으로 인해 송두리째 흔들립니다. 감정 불능인 소년이 세상과 부딪히며 성장하는 특별한 이야기. 사랑, 우정, 그리고 인간다움에 대해 다시 생각하게 만듭니다."
  },
  {
    id: 4,
    title: "불편한 편의점",
    author: "김호연",
    coverImage: "https://images.unsplash.com/photo-1532012197267-da84d127e765?w=500&q=80",
    price: 12600,
    rating: 4.8,
    description: "서울의 오래된 골목길에 자리한 작은 편의점. 그곳에 야간 알바로 들어온 수상한 남자 독고씨를 통해 우리는 잊고 지냈던 삶의 의미와 따뜻한 위로를 발견하게 됩니다. 마음이 힘든 이들에게 건네는 따뜻한 연대의 이야기."
  },
  {
    id: 5,
    title: "팩트풀니스",
    author: "한스 로슬링",
    coverImage: "https://images.unsplash.com/photo-1541963463532-d68292c34b19?w=500&q=80",
    price: 17820,
    rating: 4.9,
    description: "세계는 우리가 생각하는 것보다 훨씬 더 좋은 방향으로 나아가고 있다는 것을 통계와 데이터를 통해 증명하는 책. 우리가 세상을 오해하는 10가지 이유를 분석하고, 올바른 사실에 근거한 세계관을 갖도록 도와줍니다."
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
    description: "수십 년간 쌓아온 세이노의 경험과 지혜가 담긴 책. 부와 성공, 삶의 태도에 대한 날카로운 조언들을 통해 독자들이 스스로의 길을 개척해나갈 수 있도록 용기와 영감을 불어넣어 줍니다."
  },
  {
    id: 7,
    title: "원씽(THE ONE THING)",
    author: "게리 켈러",
    coverImage: "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=500&q=80",
    price: 12600,
    rating: 4.8,
    description: "복잡한 삶 속에서 가장 중요한 '하나'를 찾아 집중하는 방법을 알려주는 자기계발서. 성공을 위한 핵심 원리를 제시하며, 생산성과 목표 달성에 대한 새로운 시각을 제공합니다."
  },
  {
    id: 8,
    title: "해커스 토익 기출 보카",
    author: "David Cho",
    coverImage: "https://images.unsplash.com/photo-1550399105-c4db5fb85c18?w=500&q=80",
    price: 11610,
    rating: 4.7,
    description: "토익 시험을 준비하는 사람들을 위한 필수 어휘 교재. 최신 기출 경향을 분석하여 자주 출제되는 단어들을 엄선하고, 효과적인 학습 방법과 예문을 통해 단기간에 어휘력을 향상시킬 수 있도록 돕습니다."
  },
]

export const allBooks = [...popularBooks, ...recommendedBooks];
