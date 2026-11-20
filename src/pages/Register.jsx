
import AuthLayout from '../components/AuthLayout';

const Register = () => {
    return (
        <AuthLayout>
            <div className="space-y-6">

                <div>
                    <h2 className="text-3xl font-bold">
                        Create an account
                    </h2>
                    <p className="text-gray-400 mt-2">
                        Get started with your secure password vault.
                    </p>
                </div>

                <form className="space-y-4">

                    <div>
                        <label className="block text-sm mb-2">
                            Email address
                        </label>
                        <input
                            type="email"
                            placeholder="you@example.com"
                            className="w-full rounded-lg bg-[#1B2238] border border-gray-700 px-4 py-3 outline-none focus:border-violet-500"
                        />
                    </div>

                    <div>
                        <label className="block text-sm mb-2">
                            Master password
                        </label>
                        <input
                            type="password"
                            placeholder="Enter your master password"
                            className="w-full rounded-lg bg-[#1B2238] border border-gray-700 px-4 py-3 outline-none focus:border-violet-500"
                        />
                    </div>

                    <div>
                        <label className="block text-sm mb-2">
                            Confirm password
                        </label>
                        <input
                            type="password"
                            placeholder="Confirm your master password"
                            className="w-full rounded-lg bg-[#1B2238] border border-gray-700 px-4 py-3 outline-none focus:border-violet-500"
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full rounded-lg bg-violet-600 hover:bg-violet-700 py-3 font-semibold transition"
                    >
                        Create Account
                    </button>

                </form>

                <p className="text-center text-sm text-gray-400">
                    Already have an account?{' '}
                    <a href="/login" className="text-violet-400 hover:text-violet-300">
                        Sign in
                    </a>
                </p>

            </div>
        </AuthLayout>
    );
};

export default Register;
