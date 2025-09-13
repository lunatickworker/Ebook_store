import { useState } from 'react';

interface User {
  id: string;
  name: string;
  email: string;
  role: 'user' | 'admin';
  joined: string;
}

const AdminUsersPage = () => {
  const [users, setUsers] = useState<User[]>([
    {
      id: 'u001',
      name: '김서연',
      email: 'seoyeon@example.com',
      role: 'user',
      joined: '2025-08-01',
    },
    {
      id: 'u002',
      name: '이준호',
      email: 'junho@example.com',
      role: 'admin',
      joined: '2025-07-15',
    },
  ]);

  const toggleRole = (id: string) => {
    setUsers((prev) =>
      prev.map((user) =>
        user.id === id
          ? { ...user, role: user.role === 'admin' ? 'user' : 'admin' }
          : user
      )
    );
  };

  const deleteUser = (id: string) => {
    setUsers((prev) => prev.filter((user) => user.id !== id));
  };

  return (
    <main className="max-w-5xl mx-auto py-12 px-6">
      <h1 className="text-2xl font-bold mb-6">👥 사용자 관리</h1>

      <table className="w-full border text-sm">
        <thead className="bg-gray-100">
          <tr>
            <th className="p-2 text-left">이름</th>
            <th className="p-2 text-left">이메일</th>
            <th className="p-2 text-left">권한</th>
            <th className="p-2 text-left">가입일</th>
            <th className="p-2 text-left">관리</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id} className="border-t">
              <td className="p-2">{user.name}</td>
              <td className="p-2">{user.email}</td>
              <td className="p-2">{user.role}</td>
              <td className="p-2">{user.joined}</td>
              <td className="p-2 space-x-2">
                <button
                  onClick={() => toggleRole(user.id)}
                  className="text-indigo-600 hover:underline"
                >
                  권한 변경
                </button>
                <button
                  onClick={() => deleteUser(user.id)}
                  className="text-red-500 hover:underline"
                >
                  삭제
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  );
};

export default AdminUsersPage;
