import { createContext, useState, useContext, ReactNode } from "react"

interface AuthContextType {
  isLoggedIn: boolean
  login: () => void
  logout: () => void
}

// 앱 전체에 공유될 Context 생성
const AuthContext = createContext<AuthContextType | undefined>(undefined)

// Context를 자식 컴포넌트들에게 제공하는 Provider 컴포넌트
export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  const login = () => setIsLoggedIn(true)
  const logout = () => setIsLoggedIn(false)

  return (
    <AuthContext.Provider value={{ isLoggedIn, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

// 다른 컴포넌트에서 쉽게 AuthContext를 사용할 수 있게 해주는 커스텀 훅
export const useAuth = () => {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider")
  }
  return context
}
