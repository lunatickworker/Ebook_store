import { Button } from "@/components/ui/button"
import { Grid } from "lucide-react"

const categories = [
  "소설",
  "경영/경제",
  "자기계발",
  "인문/사회/역사",
  "과학",
  "에세이/시",
  "만화",
  "외국어",
]

export function CategorySection() {
  return (
    <section className="container my-12">
      <div className="flex items-center gap-2 mb-6">
        <Grid className="w-6 h-6" />
        <h2 className="text-2xl font-bold">카테고리</h2>
      </div>
      <div className="flex flex-wrap gap-3">
        {categories.map((category) => (
          <Button key={category} variant="outline" size="lg">
            {category}
          </Button>
        ))}
      </div>
    </section>
  )
}
