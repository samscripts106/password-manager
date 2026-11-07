import React from 'react'
import { useState } from 'react'

const Manager = () => {
    const [showPassword, setShowPassword] = useState(false)
    const [website, setWebsite] = useState("")
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    const [passwords, setPasswords] = useState([]); //saved credentials
    // Index 0
    // GitHub
    // Username: sam
    // Password: •••••••

    // Index 1
    // Google
    // Username: sam
    // Password: •••••••

    // Index 2
    // LinkedIn
    // Username: sam
    // Password: •••••••

  return (
    <>
        <div className="fixed inset-0 -z-10 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]"></div>

        <main className='px-2 py-4 mt-8'>
            <div className='flex flex-col items-center justify-center'>
                <h1 className='text-gray-200 text-3xl font-bold'>Welcome to PassVault</h1>
                <h3 className='text-lg text-gray-400 mt-3'>Your passwords, securedly stored at one place</h3>
            </div>

            <section className="mt-10 mx-auto max-w-2xl rounded-xl border border-white/10 bg-white/5 p-6">
                <h2 className="text-xl font-semibold text-white mb-5">Add a Password</h2>

                <div className='flex flex-col gap-4'>
                    <input value={website} onChange={(e)=>setWebsite(e.target.value)} type="text" placeholder="Website" className="w-full rounded-lg border border-white/10 bg-black/30 px-4 py-3 text-white outline-none"/>

                    <input value={username} onChange={(e)=>setUsername(e.target.value)} type="text" placeholder="Username / Email" className="w-full rounded-lg border border-white/10 bg-black/30 px-4 py-3 text-white outline-none"/>

                    <div className="relative">
                            <input value={password} onChange={(e)=>setPassword(e.target.value)}
                            type={showPassword ? "text" : "password"} 
                            placeholder="Password"
                            className="w-full rounded-lg border border-white/10 bg-black/30 px-4 py-3 pr-12 text-white outline-none"/>

                        <button type="button"
                            onClick={() => setShowPassword(!showPassword)}
                            className="absolute right-4 top-1/2 -translate-y-1/2"
                        >
                            <img
                                src={showPassword ? "/icons/eye-open.svg" : "/icons/eye-closed.svg"}
                                alt="Toggle password visibility"
                                className="w-5 h-5 invert"
                            />
                        </button>
                    </div>

                    <button className="rounded-lg bg-purple-600 px-5 py-3 font-medium text-white hover:bg-purple-500"> Save Password </button>
                </div>
            </section>

            <section className="mt-10 mx-auto max-w-2xl">
            <h2 className="text-xl font-semibold text-white mb-4">
                Your Saved Passwords
            </h2>

            <div className="rounded-xl border border-white/10 bg-white/5 p-6">

                <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-semibold text-white">
                        GitHub
                    </h3>

                    <div className="flex gap-3">
                        <button className="text-purple-400 hover:text-purple-300">
                            Edit
                        </button>
                        <button className="text-red-400 hover:text-red-300">
                            Delete
                        </button>
                    </div>
                </div>

                <div className="flex flex-col gap-2 text-gray-400">
                    <p>Username: sopranos</p>
                    <p>Password: ••••••••••</p>
                </div>

            </div>
        </section>
        </main>
        
    </>
  )
}

export default Manager
