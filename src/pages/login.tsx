import { useState } from 'react';
import Link from 'next/link';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: 로그인 처리 로직
    alert('로그인 성공!');
  };

  return (
    <main className="max-w-md mx-auto py-12 px-6">
      <h1 className="text-2xl font-bold mb-6 text-center">🔐 로그인</h1>
      <form onSubmit={handleLogin} className="space-y-4">
        <input
          type="email"
          placeholder="이메일"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="w-full border px-3 py-2 rounded"
        />
        <input
          type="password"
          placeholder="비밀번호"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          className="w-full border px-3 py-2 rounded"
        />
        <button
          type="submit"
          className="w-full bg-indigo-600 text-white py-2 rounded hover:bg-indigo-700"
        >
          로그인
        </button>
      </form>
      <p className="text-sm text-center mt-4">
        아직 계정이 없으신가요?{' '}
        <Link href="/signup" className="text-indigo-600 hover:underline">
          회원가입
        </Link>
      </p>
    </main>
  );
};

export default LoginPage;
