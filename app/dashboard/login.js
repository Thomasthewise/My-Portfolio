"use client";

import { useState } from "react";
import { supabase } from "../../lib/supabase";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleLogin = async () => {
    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });
    if (error) setMessage(error.message);
    else {
      setMessage("Login successful!");
      window.location.href = "/dashboard"; // redirect after login
    }
  };

  return (
    <div className="p-6 max-w-md mx-auto mt-20 bg-white rounded shadow">
      <h1 className="text-2xl font-bold mb-4">Login</h1>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="w-full p-2 border mb-2"
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="w-full p-2 border mb-4"
      />
      <button
        onClick={handleLogin}
        className="w-full p-2 bg-blue-600 text-white rounded"
      >
        Login
      </button>
      {message && <p className="mt-2 text-red-500">{message}</p>}
    </div>
  );
}
