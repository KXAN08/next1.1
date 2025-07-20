"use client";

import Link from "next/link";
import { useAuthStore } from "@/store/authStore";
import { useEffect } from "react";

export default function Navbar() {
  const token = useAuthStore((s) => s.token);
  const setToken = useAuthStore((s) => s.setToken);
  const logout = useAuthStore((s) => s.logout);

  useEffect(() => {
    const localToken = localStorage.getItem("token");
    if (localToken) setToken(localToken);
  }, [setToken]);

  return (
    <nav className="bg-indigo-600 text-white py-4 px-8 ">
      <div className="flex justify-between container mx-auto"> <div className="text-xl font-semibold  ">
        MySayt
      </div>
      {token ? (
        <div className="space-x-4">
          <Link href="/">Products</Link>
          <Link href="/users">Users</Link>
          <Link href="/posts">Posts</Link>
          <Link href="/recipes">Recipes</Link>
          <button onClick={logout} className="bg-red-500 px-3 py-1 rounded">Logout</button>
        </div>
      ) : (
        <Link href="/login" className="bg-white text-indigo-600 px-3 py-1 rounded">Login</Link>
      )}</div>
    </nav>
  );
}
