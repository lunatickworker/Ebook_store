import { BookMarked, Globe, Search, User } from "lucide-react"
// 👇 경로를 @/components/ui/.. 로 수정했습니다.
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center">
        <div className="mr-4 flex items-center">
          <BookMarked className="h-6 w-6 mr-2 text-primary" />
          <span className="font-bold">E-Bookstore</span>
        </div>
        
        <div className="flex flex-1 items-center space-x-2 justify-center">
          <div className="w-full max-w-md relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input placeholder="Search books, authors, genres..." className="pl-9" />
          </div>
        </div>

        <div className="flex items-center justify-end space-x-2">
          <Button variant="ghost" size="icon">
            <Globe className="h-5 w-5" />
          </Button>
          <Button variant="ghost">My Library</Button>
          <Button>
            <User className="h-5 w-5 mr-2" />
            Login
          </Button>
        </div>
      </div>
    </header>
  )
}

