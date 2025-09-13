import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

// DB가 없으므로 임시 배너 데이터를 만듭니다.
const bannerItems = [
  {
    title: "새로운 우주, 새로운 시작",
    description: "올해 최고의 SF 신작을 지금 만나보세요.",
    imageUrl: "https://images.unsplash.com/photo-1534796636912-3b95b3ab5986?q=80&w=2071&auto=format&fit=crop",
    bgColor: "bg-slate-900",
  },
  {
    title: "마음을 울리는 한 문장",
    description: "독자들이 선정한 베스트셀러 에세이 컬렉션.",
    imageUrl: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?q=80&w=2070&auto=format&fit=crop",
    bgColor: "bg-amber-800",
  },
  {
    title: "여름, 추리의 계절",
    description: "더위를 잊게 할 미스터리 스릴러 추천작.",
    imageUrl: "https://images.unsplash.com/photo-1507842217343-583bb7270b66?q=80&w=2100&auto=format&fit=crop",
    bgColor: "bg-indigo-900",
  },
]

export function HeroBanner() {
  return (
    <div className="container my-8">
      <Carousel className="w-full" opts={{ loop: true }}>
        <CarouselContent>
          {bannerItems.map((item, index) => (
            <CarouselItem key={index}>
              <Card className={`overflow-hidden ${item.bgColor}`}>
                <CardContent className="flex flex-col md:flex-row items-center justify-center p-0">
                  <div className="w-full md:w-1/2 text-white p-12 text-center md:text-left">
                    <h2 className="text-3xl md:text-4xl font-bold">{item.title}</h2>
                    <p className="mt-4 text-lg text-white/80">{item.description}</p>
                  </div>
                  <div className="w-full md:w-1/2 h-64 md:h-80">
                    <img src={item.imageUrl} alt={item.title} className="w-full h-full object-cover" />
                  </div>
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="hidden sm:flex" />
        <CarouselNext className="hidden sm:flex" />
      </Carousel>
    </div>
  )
}
