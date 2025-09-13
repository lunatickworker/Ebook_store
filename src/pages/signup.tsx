import { useState } from 'react';
import Link from 'next/link';

const SignupPage = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    password: '',
    agree: false,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSignup = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.agree) {
      alert('약관에 동의해주세요.');
      return;
    }
    // TODO: 회원가입 처리 로직
    alert('회원가입 완료!');
  };

  return (
    <main className="max-w-md mx-auto py-12 px-6">
      <h1 className="text-2xl font-bold mb-6 text-center">📝 회원가입</h1>
      <form onSubmit={handleSignup} className="space-y-4">
        <input
          type="text"
          name="name"
          placeholder="이름"
          value={form.name}
          onChange={handleChange}
          required
          className="w-full border px-3 py-2 rounded"
        />
        <input
          type="email"
          name="email"
          placeholder="이메일"
          value={form.email}
          onChange={handleChange}
          required
          className="w-full border px-3 py-2 rounded"
        />
        <input
          type="password"
          name="password"
          placeholder="비밀번호"
          value={form.password}
          onChange={handleChange}
          required
          className="w-full border px-3 py-2 rounded"
        />
        <label className="flex items-center text-sm">
          <input
            type="checkbox"
            name="agree"
            checked={form.agree}
            onChange={handleChange}
            className="mr-2"
          />
          이용약관에 동의합니다.
        </label>
        <button
          type="submit"
          className="w-full bg-indigo-600 text-white py-2 rounded hover:bg-indigo-700"
        >
          회원가입
        </button>
      </form>
      <p className="text-sm text-center mt-4">
        이미 계정이 있으신가요?{' '}
        <Link href="/login" className="text-indigo-600 hover:underline">
          로그인
        </Link>
      </p>
    </main>
  );
};

export default SignupPage;
