import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ArrowLeft, Star, FileText, ShoppingCart, Loader2 } from "lucide-react";

import { Book, popularBooks, recommendedBooks } from "@/data/books";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import ReviewForm from '@/components/reviews/ReviewForm';
import ReviewList from '@/components/reviews/ReviewList';

const BookDetailPage = () => {
  const [reviews, setReviews] = useState([]);

  const handleReviewSubmit = (review: any) => {
    setReviews((prev) => [...prev, review]);
  };

  return (
    <>
      {/* 기존 도서 상세 내용 */}
      <section className="mt-12">
        <h2 className="text-xl font-bold mb-4">사용자 리뷰</h2>
        <ReviewForm onSubmit={handleReviewSubmit} />
        <ReviewList reviews={reviews} />
      </section>
    </>
  );
};

export function BookDetailPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [book, setBook] = useState<Book | null>(null);
  const [activeTab, setActiveTab] = useState<"description" | "toc" | "reviews">("description");

  useEffect(() => {
    const allBooks = [...popularBooks, ...recommendedBooks];
    const foundBook = allBooks.find((b) => b.id === Number(id));
    setBook(foundBook || null);
  }, [id]);

  const handleGoBack = () => {
    navigate(-1);
  };

  const handlePreview = () => {
    // Placeholder for preview functionality
    alert("미리보기 기능을 준비 중입니다.");
  };

  const handlePurchase = () => {
    // Placeholder for purchase functionality
    alert(`${book?.title}을(를) 구매했습니다!`);
  };

  if (!book) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <Loader2 className="h-8 w-8 animate-spin" />
      </div>
    );
  }

  const renderTabContent = () => {
    switch (activeTab) {
      case "description":
        return <p className="text-muted-foreground">{book.description}</p>;
      case "toc":
        return <p className="text-muted-foreground">목차 정보는 준비 중입니다.</p>;
      case "reviews":
        return <p className="text-muted-foreground">리뷰가 아직 없습니다. 첫 번째 리뷰를 작성해주세요!</p>;
      default:
        return null;
    }
  };

  return (
    <div className="container py-12 max-w-5xl mx-auto">
      <Button variant="ghost" className="mb-8" onClick={handleGoBack}>
        <ArrowLeft className="h-4 w-4 mr-2" />
        뒤로가기
      </Button>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="flex justify-center">
          <img
            src={book.coverImage}
            alt={book.title}
            className="w-full max-w-sm rounded-lg shadow-xl"
          />
        </div>
        <div className="space-y-6">
          <h1 className="text-4xl font-bold">{book.title}</h1>
          <p className="text-lg text-muted-foreground">{book.author}</p>
          <div className="flex items-center gap-4">
            <Badge variant="secondary" className="flex items-center gap-1">
              <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
              <span>{book.rating.toFixed(1)}</span>
            </Badge>
            <p className="font-bold text-2xl">{book.price.toLocaleString()}원</p>
          </div>
          
          <div className="flex flex-col gap-4">
            <Button onClick={handlePreview} variant="outline" className="h-12 text-lg">
              <FileText className="h-5 w-5 mr-2" />
              미리보기 / 샘플 읽기
            </Button>
            <Button onClick={handlePurchase} className="h-12 text-lg">
              <ShoppingCart className="h-5 w-5 mr-2" />
              구매하기
            </Button>
          </div>
        </div>
      </div>
      
      <Separator className="my-12" />

      <Card>
        <CardHeader>
          <div className="flex space-x-2 border-b">
            <Button variant="ghost" className="rounded-none border-b-2" data-state={activeTab === "description" ? "active" : "inactive"} onClick={() => setActiveTab("description")}>
              책 설명
            </Button>
            <Button variant="ghost" className="rounded-none border-b-2" data-state={activeTab === "toc" ? "active" : "inactive"} onClick={() => setActiveTab("toc")}>
              목차
            </Button>
            <Button variant="ghost" className="rounded-none border-b-2" data-state={activeTab === "reviews" ? "active" : "inactive"} onClick={() => setActiveTab("reviews")}>
              리뷰
            </Button>
          </div>
        </CardHeader>
        <CardContent className="p-6">
          {renderTabContent()}
        </CardContent>
      </Card>
    </div>
  );
}