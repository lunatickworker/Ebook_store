import { BookText, Github, Twitter, Mail } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-card border-t">
      <div className="container py-12 grid grid-cols-2 md:grid-cols-4 gap-8">
        <div className="col-span-2 md:col-span-1">
          <div className="flex items-center gap-2 mb-4">
            <BookText className="w-8 h-8 text-primary" />
            <span className="text-xl font-bold">Ebookstore</span>
          </div>
          <p className="text-sm text-muted-foreground">
            당신의 다음 이야기를 찾아보세요.
          </p>
        </div>
        <div>
          <h4 className="font-semibold mb-4">Ebookstore</h4>
          <nav className="flex flex-col gap-2 text-sm text-muted-foreground">
            <a href="#" className="hover:text-primary">도서</a>
            <a href="#" className="hover:text-primary">베스트셀러</a>
            <a href="#" className="hover:text-primary">신간</a>
          </nav>
        </div>
        <div>
          <h4 className="font-semibold mb-4">고객센터</h4>
          <nav className="flex flex-col gap-2 text-sm text-muted-foreground">
            <a href="#" className="hover:text-primary">공지사항</a>
            <a href="#" className="hover:text-primary">자주 묻는 질문</a>
            <a href="#" className="hover:text-primary">1:1 문의</a>
          </nav>
        </div>
        <div>
          <h4 className="font-semibold mb-4">Contact Us</h4>
          <div className="flex items-center gap-4">
            <a href="#" className="text-muted-foreground hover:text-primary"><Github /></a>
            <a href="#" className="text-muted-foreground hover:text-primary"><Twitter /></a>
            <a href="#" className="text-muted-foreground hover:text-primary"><Mail /></a>
          </div>
        </div>
      </div>
      <div className="bg-muted text-muted-foreground text-center py-4 text-sm">
        <p>© 2025 Ebookstore. All rights reserved.</p>
      </div>
    </footer>
  )
}
