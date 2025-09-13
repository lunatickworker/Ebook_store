import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import { Chrome, Apple } from "lucide-react"

// LoginPage 컴포넌트가 받을 props의 타입을 정의합니다.
interface LoginPageProps {
  onLoginSuccess: () => void;
}

export function LoginPage({ onLoginSuccess }: LoginPageProps) {
  // 실제 로그인 로직은 추후 useAuth() 훅과 연결됩니다.
  // 지금은 성공 콜백만 호출합니다.
  const handleEmailLogin = () => {
    onLoginSuccess();
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900">
      <Card className="w-full max-w-sm">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl">로그인</CardTitle>
          <CardDescription>
            이메일 또는 소셜 계정으로 로그인하세요.
          </CardDescription>
        </CardHeader>
        <CardContent className="grid gap-4">
          <div className="grid gap-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" placeholder="m@example.com" required />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="password">Password</Label>
            <Input id="password" type="password" required />
          </div>
           <Button className="w-full" onClick={handleEmailLogin}>이메일로 로그인</Button>
        </CardContent>
        <Separator className="my-4" />
        <CardFooter className="flex flex-col gap-4">
          <Button variant="outline" className="w-full">
            <Chrome className="mr-2 h-4 w-4" /> Google 계정으로 로그인
          </Button>
           <Button variant="outline" className="w-full">
            <Apple className="mr-2 h-4 w-4" /> Apple 계정으로 로그인
          </Button>
        </CardFooter>
      </Card>
    </div>
  )
}
