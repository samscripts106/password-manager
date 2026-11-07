import React from 'react'

const Navbar = () => {
  return (
    <nav className='border-b border-white/20 px-6 py-4 flex items-center justify-between shadow-[0_4px_25px_rgba(99,62,238,0.3)]'>
        <div className='flex gap-2'> 
            <img src="/icons/logo.svg" alt="logo" className='invert'/>
            <div className='font-bold text-gray-300 text-3xl'>PassVault</div>
        </div>
        <ul>
            <li className='flex gap-4 text-gray-300'>
                <a className='hover:font-bold' href="/">Home</a>
                <a className='hover:font-bold' href="#">About</a>
                <a className='hover:font-bold' href="#">
                    <img src="/icons/settings.svg" alt="Settings" className="hover:opacity-70 transition-opacity w-6 h-6 invert"/>
                </a>
            </li>
        </ul>
    </nav>
  )
}

export default Navbar
