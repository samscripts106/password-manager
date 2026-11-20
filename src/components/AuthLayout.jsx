
const AuthLayout = ({ children }) => {
    return (
        <main className="min-h-screen grid md:grid-cols-2 bg-[#0B1020] text-white">

            {/* Left branding section */}
            <section className="hidden md:flex flex-col justify-center px-16 bg-gradient-to-br from-[#151A35] to-[#252A55]">
                <h1 className="text-4xl font-bold mb-4">
                    PassVault
                </h1>

                <p className="text-gray-300 text-lg max-w-md">
                    Your credentials. Your control.
                    Keep your digital life secure in one place.
                </p>

                <div className="mt-10 text-sm text-gray-400">
                    Simple. Secure. Private.
                </div>
            </section>

            {/* Right form section */}
            <section className="flex items-center justify-center px-6 py-12">
                <div className="w-full max-w-md">

                    <div className="md:hidden mb-10">
                        <h1 className="text-3xl font-bold">
                            PassVault
                        </h1>
                    </div>

                    {children}

                </div>
            </section>

        </main>
    );
};

export default AuthLayout;
