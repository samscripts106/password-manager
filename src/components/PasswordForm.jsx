import React from 'react'

const PasswordForm = ({
    website,
    setWebsite,
    username,
    setUsername,
    password,
    setPassword,
    showPassword,
    setShowPassword,
    editIndex,
    savePassword,
    setEditIndex
}) => {
  return (
    <div>
      <section className="mt-10 mx-auto max-w-2xl rounded-xl border border-white/10 bg-white/5 p-6">
                <h2 className="text-xl font-semibold text-white mb-5">{editIndex === null ? "Add a Password" : "Edit Password"}</h2>

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

                    <button onClick={savePassword} className="rounded-lg bg-purple-600 px-5 py-3 font-medium text-white hover:bg-purple-500"> {editIndex === null ? "Save Password" : "Update Password"} </button>

                    {editIndex !== null && (
                        <button
                            type = "button"
                            onClick={()=>{
                                setEditIndex(null);
                                setWebsite("");
                                setUsername("");
                                setPassword("");
                            }}
                            className='rounded-lg border border-white/20 px-5 py-3 text-gray-300 hover:bg-white/10'
                        >
                            Cancel
                        </button>
                    )}
                </div>
            </section>
    </div>
  )
}

export default PasswordForm
