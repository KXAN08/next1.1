"use client";

import { useState } from "react";
import { useAuthStore } from "@/store/authStore";
import { useRouter } from "next/navigation";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const setToken = useAuthStore((state: any) => state.setToken);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await fetch("https://dummyjson.com/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      });

      if (!res.ok) throw new Error("Login failed");

      const data = await res.json();
      setToken(data.token);
      router.push("/");
    } catch (err: any) {
      setError("Kirish muvaffaqiyatsiz: " + err.message);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gradient-to-r from-indigo-500 to-purple-600">
      <form onSubmit={handleSubmit} className="bg-white p-10 rounded-xl shadow-2xl w-80">
        <h2 className="text-3xl mb-6 text-center font-bold text-indigo-600">Kirish</h2>

        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="border border-gray-300 p-3 w-full mb-4 rounded focus:outline-none focus:ring-2 focus:ring-indigo-400"
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="border border-gray-300 p-3 w-full mb-4 rounded focus:outline-none focus:ring-2 focus:ring-indigo-400"
          required
        />
        {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
        <button className="bg-indigo-500 hover:bg-indigo-600 text-white p-3 w-full rounded transition">
          Kirish
        </button>
      </form>
    </div>
  );
};

export default Login;
