import { Header } from "@/components/Header"
import { HeroBanner } from "@/components/HeroBanner"
import { BookList } from "@/components/BookList"
import { CategorySection } from "@/components/CategorySection"
import { Footer } from "@/components/Footer"
import { popularBooks, recommendedBooks } from "@/data/books"

function App() {
  return (
    <div className="min-h-screen bg-background font-sans antialiased flex flex-col">
      <Header />
      <main className="flex-grow">
        <HeroBanner />
        <BookList title="인기 도서" books={popularBooks} />
        <CategorySection />
        <BookList title="추천 신간" books={recommendedBooks} />
      </main>
      <Footer />
    </div>
  )
}

export default App

