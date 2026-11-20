
import { useState } from 'react';
import AuthLayout from '../components/AuthLayout';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();

        setError('');

        if (!email || !password) {
            setError('Please fill in all fields.');
            return;
        }

        console.log('Login form submitted!');
    };

    return (
        <AuthLayout>
            <div className="space-y-6">
                <div>
                    <h2 className="text-3xl font-bold">
                        Welcome back
                    </h2>
                    <p className="text-gray-400 mt-2">
                        Sign in to access your secure password vault.
                    </p>
                </div>

                <form className="space-y-4" onSubmit={handleSubmit}>
                    <div>
                        <label className="block text-sm mb-2">
                            Email address
                        </label>
                        <input
                            type="email"
                            required
                            placeholder="you@example.com"
                            className="w-full rounded-lg bg-[#1B2238] border border-gray-700 px-4 py-3 outline-none focus:border-violet-500"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>

                    <div>
                        <label className="block text-sm mb-2">
                            Master password
                        </label>

                        <div className="relative">
                            <input
                                type={showPassword ? 'text' : 'password'}
                                required
                                placeholder="Enter your master password"
                                className="w-full rounded-lg bg-[#1B2238] border border-gray-700 px-4 py-3 pr-12 outline-none focus:border-violet-500"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />

                            <button
                                type="button"
                                onClick={() => setShowPassword(!showPassword)}
                                className="absolute right-4 top-1/2 -translate-y-1/2"
                            >
                                <img
                                    src={showPassword ? '/icons/eye-open.svg' : '/icons/eye-closed.svg'}
                                    alt={showPassword ? 'Hide password' : 'Show password'}
                                    className="w-5 h-5 invert"
                                />
                            </button>
                        </div>
                    </div>

                    {error && (
                        <p className="text-red-400 text-sm">
                            {error}
                        </p>
                    )}

                    <div className="flex justify-end">
                        <button
                            type="button"
                            className="text-sm text-violet-400 hover:text-violet-300 transition"
                        >
                            Forgot password?
                        </button>
                    </div>

                    <button
                        type="submit"
                        className="w-full rounded-lg bg-violet-600 hover:bg-violet-700 py-3 font-semibold transition"
                    >
                        Sign In
                    </button>
                </form>

                <p className="text-center text-sm text-gray-400">
                    Don't have an account?{' '}
                    <a href="/register" className="text-violet-400 hover:text-violet-300">
                        Create account
                    </a>
                </p>
            </div>
        </AuthLayout>
    );
};

export default Login;
