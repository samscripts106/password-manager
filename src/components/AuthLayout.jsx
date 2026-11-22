
const AuthLayout = ({ children }) => {
    return (
        <main className="min-h-screen grid md:grid-cols-2 bg-[#0B1020] text-white">

            {/* Left branding section */}
            <section className="hidden md:flex flex-col justify-center px-10 lg:px-16 bg-linear-to-br from-[#151A35] to-[#252A55]">

                {/* Logo and brand */}
                <div className="flex items-center gap-4 mb-16">
                    <img
                        src="/passvault-fox.svg"
                        alt="PassVault Fox"
                        className="w-16 h-16 object-contain"
                    />

                    <h1 className="text-3xl font-bold tracking-wide">
                        PassVault
                    </h1>
                </div>

                {/* Main content */}
                <div className="max-w-lg">
                    <h2 className="text-4xl lg:text-5xl font-bold leading-tight">
                        Your digital life,
                        <span className="block text-violet-400">
                            secured.
                        </span>
                    </h2>

                    <p className="text-gray-300 text-lg mt-6 leading-relaxed">
                        One secure place for all your passwords.
                        Keep your digital identity organized and protected.
                    </p>
                </div>

                {/* Bottom tagline */}
                <div className="mt-16">
                    <div className="w-12 h-1 bg-violet-500 rounded-full mb-4"></div>

                    <p className="text-sm text-gray-400 tracking-wider">
                        SIMPLE. SECURE. PRIVATE.
                    </p>
                </div>

            </section>

            {/* Right form section */}
            <section className="flex items-center justify-center px-6 py-12">
                <div className="w-full max-w-md">

                    {/* Mobile branding */}
                    <div className="md:hidden flex flex-col items-center mb-10">
                        <img
                            src="/passvault-fox.svg"
                            alt="PassVault Fox"
                            className="w-14 h-14 object-contain mb-2"
                        />

                        <h1 className="text-3xl font-bold tracking-wide">
                            PassVault
                        </h1>

                        <p className="text-sm text-gray-400 mt-1">
                            Your credentials. Your control.
                        </p>
                    </div>

                    {children}

                </div>
            </section>

        </main>
    );
};

export default AuthLayout;
