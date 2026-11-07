import React from 'react'

const Navbar = () => {
  return (
    <nav className='bg-[#542A91]/80 backdrop-blur-xl border-b px-6 py-4 flex items-center justify-between'>
        <div className='logo font-bold text-gray-300 text-2xl flex gap-2'> 
            <img src="/icons/logo.svg" alt="logo" className='invert'/>
            PassVault 
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
