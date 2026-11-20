import { useState } from 'react'
import AuthLayout from '../components/AuthLayout';

const Register = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();

        setError(''); //clears any previous errors

        if (!email || !password || !confirmPassword) {
            setError('Please fill in all fields.');
            return;
        }

        if (password !== confirmPassword) {
            setError('Passwords do not match.');
            return;
        }

        console.log('Registration form submitted!');
    };

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
                            value={email} onChange={(e)=>setEmail(e.target.value)}
                        />
                    </div>

                    
                    <div>
                        <label className="block text-sm mb-2">
                            Master password
                        </label>

                        <div className="relative">
                            <input
                                type={showPassword ? "text" : "password"}
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
                                    src={showPassword ? "/icons/eye-open.svg" : "/icons/eye-closed.svg"}
                                    alt={showPassword ? "Hide password" : "Show password"}
                                    className="w-5 h-5 invert"
                                />
                            </button>
                        </div>
                    </div>

                    <div>
                        <label className="block text-sm mb-2">
                            Confirm password
                        </label>

                        <div className="relative">
                            <input
                                type={showConfirmPassword ? "text" : "password"}
                                required
                                placeholder="Confirm your master password"
                                className="w-full rounded-lg bg-[#1B2238] border border-gray-700 px-4 py-3 pr-12 outline-none focus:border-violet-500"
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                            />

                            <button
                                type="button"
                                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                                className="absolute right-4 top-1/2 -translate-y-1/2"
                            >
                                <img
                                    src={showConfirmPassword ? "/icons/eye-open.svg" : "/icons/eye-closed.svg"}
                                    alt={showConfirmPassword ? "Hide password" : "Show password"}
                                    className="w-5 h-5 invert"
                                />
                            </button>
                        </div>
                    </div>


                    {error && (
                        <p className='text-red-400 text-sm'>
                            {error}
                        </p>
                    )}

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
