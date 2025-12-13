// app/dashboard/login/page.js
'use client'
import { useState } from 'react'
import { useRouter } from 'next/navigation'


export default function LoginPage() {
const [email, setEmail] = useState('')
const [password, setPassword] = useState('')
const router = useRouter()


const handleSubmit = (e) => {
e.preventDefault()
// demo-only: we don't call Supabase here. In your real dashboard, replace
// with supabase.auth.signInWithPassword(...) or your auth flow.
console.log('demo login', { email })
// navigate to dashboard root after "login"
router.push('/dashboard')
}


return (
<div className="p-8 max-w-md mx-auto">
<h1 className="text-2xl font-bold mb-4">Dashboard Login (demo)</h1>
<form onSubmit={handleSubmit} className="space-y-3">
<input value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="Email" className="w-full p-2 border rounded" />
<input value={password} onChange={(e)=>setPassword(e.target.value)} type="password" placeholder="Password" className="w-full p-2 border rounded" />
<button type="submit" className="w-full bg-indigo-600 text-white px-4 py-2 rounded">Sign in (demo)</button>
</form>
</div>
)
}