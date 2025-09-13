import { Book } from "@/data/books"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Star } from "lucide-react"

interface BookCardProps {
  book: Book
}

export function BookCard({ book }: BookCardProps) {
  return (
    <Card className="overflow-hidden transition-transform duration-300 hover:scale-105 hover:shadow-xl cursor-pointer">
      <CardHeader className="p-0">
        <div className="aspect-[3/4] overflow-hidden">
          <img
            src={book.coverImage}
            alt={book.title}
            className="w-full h-full object-cover"
          />
        </div>
      </CardHeader>
      <CardContent className="p-4 space-y-2">
        <h3 className="font-bold text-md leading-tight truncate">{book.title}</h3>
        <p className="text-sm text-muted-foreground">{book.author}</p>
        <div className="flex items-center justify-between">
          <Badge variant="secondary" className="flex items-center gap-1">
            <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
            <span>{book.rating.toFixed(1)}</span>
          </Badge>
          <p className="font-bold text-lg">{book.price.toLocaleString()}원</p>
        </div>
      </CardContent>
    </Card>
  )
}
