"use client"
import Link from "next/link";
import { useState } from "react";

interface Login  {
  gmail: string;
  password:number
}

function Login() {
 const [email, setEmail] = useState<string>(""); // Ensure the type is string
 const [password, setPassword] = useState<string>(""); // Keep password as string if you're treating it as text

 const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
   e.preventDefault();
   console.log("Email:", email, "Password:", password);
 };
  return (
    <div className="flex h-screen items-center justify-center bg-gray-100">
      <div className="w-full max-w-md bg-white p-8 rounded shadow-lg">
        <h2 className="text-2xl font-bold text-center mb-6">Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email Address
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1 block w-full p-2 border border-gray-300 rounded focus:ring focus:ring-blue-200"
              placeholder="Enter your email"
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-1 block w-full p-2 border border-gray-300 rounded focus:ring focus:ring-blue-200"
              placeholder="Enter your password"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            <Link href="/about/product">Login</Link>
          </button>
        </form>
      </div>
    </div>
  );
}


export default Login