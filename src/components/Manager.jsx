import React from 'react'
import { useState } from 'react'

const Manager = () => {
    const [showPassword, setShowPassword] = useState(false)
  return (
    <>
        <div class="absolute inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]"></div>

        <main className='px-2 py-4 mt-8'>
            <div className='flex flex-col items-center justify-center'>
                <h1 className='text-gray-200 text-3xl font-bold'>Welcome to PassVault</h1>
                <h3 className='text-lg text-gray-400 mt-3'>Your passwords, securedly stored at one place</h3>
            </div>

            <section className="mt-10 mx-auto max-w-2xl rounded-xl border border-white/10 bg-white/5 p-6">
                <h2 className="text-xl font-semibold text-white mb-5">Add a Password</h2>

                <div className='flex flex-col gap-2'>
                    <div>
                    <input type="text" placeholder="Website" className="w-full rounded-lg border border-white/10 bg-black/30 px-4 py-3 text-white outline-none"/>
                    </div>

                    <input type="text" placeholder="Username / Email" className="w-full rounded-lg border border-white/10 bg-black/30 px-4 py-3 text-white outline-none"/>

                    <div className="relative">
                            <input
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
        </main>
        
    </>
  )
}

export default Manager
