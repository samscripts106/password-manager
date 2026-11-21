import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className="border-b border-white/20 bg-[#0B1020] px-4 sm:px-6 py-3 shadow-[0_4px_25px_rgba(99,62,238,0.3)]">

      <div className="flex items-center justify-between">

        {/* Logo */}
        <Link to="/vault" className="flex items-center gap-2">
            <img
                src="/icons/logo.svg"
                alt="PassVault logo"
                className="w-9 h-9 sm:w-12 sm:h-12 object-contain"
            />
            <div className="font-bold text-gray-300 text-2xl sm:text-3xl">
                PassVault
            </div>
        </Link>

        {/* Desktop navigation */}
        <ul className="hidden sm:flex items-center gap-6 text-gray-300">
          <li>
            <Link to="/vault" className="hover:text-white transition-colors">
                Vault
            </Link>
          </li>
          <li>
            <Link to="/settings" className="hover:text-white transition-colors">
                Settings
            </Link>
          </li>
          <li>
            <a className="hover:opacity-70 transition-opacity" href="#">
              <img
                src="/icons/profile.svg"
                alt="Profile"
                className="w-7 h-7"
              />
            </a>
          </li>
        </ul>

        {/* Mobile profile */}
        <div className="sm:hidden">
          <a href="#">
            <img
              src="/icons/profile.svg"
              alt="Profile"
              className="w-7 h-7"
            />
          </a>
        </div>

      </div>

      {/* Mobile navigation */}
      <div className="sm:hidden flex items-center justify-center gap-10 mt-3 pt-3 border-t border-white/10 text-gray-300">
        <Link to="/vault" className="hover:text-white transition-colors">
            Vault
        </Link>
        <Link to="/settings" className="hover:text-white transition-colors">
            Settings
        </Link>
      </div>

    </nav>
  )
}

export default Navbar
