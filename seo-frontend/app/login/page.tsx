"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import type { ChangeEvent, FormEvent } from "react";

interface LoginForm {
  email: string;
  password: string;
}

function Login() {
  const router = useRouter()
  const [form, setForm] = useState<LoginForm>({ email: "", password: "" });
  const [message, setMessage] = useState<string>("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setMessage("");
    
    try {
      const response = await fetch("http://localhost:5300/ad/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify(form),
      });

      const data = await response.json();

      if (!response.ok) {
        setMessage(data.message || "Login failed");
        return;
      }

      localStorage.setItem("user", JSON.stringify(data.log));
      setMessage("Login successful");
      router.push("/admin/products/list")

      
    } catch (err) {
      console.error(err);
      setMessage("Network error, please try again");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4 py-8">
      <div className="bg-white shadow-xl rounded-xl p-8 w-full max-w-md border border-gray-200">
        {/* Heading */}
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
          Admin Login
        </h2>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-600 mb-1">
              Email Address
            </label>
            <input
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Enter your email"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none transition"
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm font-medium text-gray-600 mb-1">
              Password
            </label>
            <input
              name="password"
              type="password"
              value={form.password}
              onChange={handleChange}
              placeholder="Enter your password"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none transition"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-3 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-semibold transition shadow-md"
          >
            Log In
          </button>
        </form>

        {/* Message */}
        {message && (
          <p
            className={`mt-4 text-center font-medium ${
              message === "Login successful" ? "text-green-600" : "text-red-500"
            }`}
          >
            {message}
            
          </p>
        )}

        {/* Footer */}
        <p className="mt-6 text-center text-sm text-gray-500">
          © 2026 Magnetronix. All rights reserved.
        </p>
      </div>
    </div>
  );
}

export default Login;
