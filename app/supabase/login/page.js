"use client";

import { useState } from "react";
import { supabase } from "../../../lib/supabase";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleLogin = async () => {
    const { data: _data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });
    if (error) setMessage(error.message);
    else setMessage(`Logged in! Welcome ${_data.user.email}`);
  };

  const handleSignup = async () => {
    const { data: _data, error } = await supabase.auth.signUp({
      email,
      password,
    });
    if (error) setMessage(error.message);
    else setMessage(`Check your email to confirm signup!`);
  };

  return (
    <div className="p-6 max-w-md mx-auto">
      <h1 className="text-2xl font-bold mb-4">Login / Signup</h1>
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
        className="w-full p-2 border mb-2"
      />
      <div className="flex gap-2">
        <button onClick={handleLogin} className="bg-blue-500 text-white p-2 flex-1">
          Login
        </button>
        <button onClick={handleSignup} className="bg-green-500 text-white p-2 flex-1">
          Signup
        </button>
      </div>
      {message && <p className="mt-4">{message}</p>}
    </div>
  );
}
