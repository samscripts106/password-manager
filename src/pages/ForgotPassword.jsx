
import { useState } from 'react';
import AuthLayout from '../components/AuthLayout';

const ForgotPassword = () => {
    const [step, setStep] = useState(1);

    const [email, setEmail] = useState('');
    const [otp, setOtp] = useState('');
    const [recoveryKey, setRecoveryKey] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const [error, setError] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    const handleEmailSubmit = (e) => {
        e.preventDefault();
        setError('');

        if (!email) {
            setError('Please enter your email address.');
            return;
        }

        setStep(2);
    };

    const handleOtpSubmit = (e) => {
        e.preventDefault();
        setError('');

        if (otp.length !== 6) {
            setError('Please enter a valid 6-digit OTP.');
            return;
        }

        setStep(3);
    };

    const handleRecoverySubmit = (e) => {
        e.preventDefault();
        setError('');

        if (!recoveryKey.trim()) {
            setError('Please enter your recovery key.');
            return;
        }

        setStep(4);
    };

    const handlePasswordSubmit = (e) => {
        e.preventDefault();
        setError('');

        if (password.length < 8) {
            setError('Password must be at least 8 characters long.');
            return;
        }

        if (password !== confirmPassword) {
            setError('Passwords do not match.');
            return;
        }

        setStep(5);
    };

    const steps = [
        'Email',
        'OTP',
        'Recovery Key',
        'New Password'
    ];

    const getPasswordStrength = (password) => {
        if (!password) return 0;

        let score = 0;

        if (password.length >= 8) score++;
        if (/[A-Z]/.test(password)) score++;
        if (/[0-9]/.test(password)) score++;
        if (/[^A-Za-z0-9]/.test(password)) score++;

        return score;
    };

    const strength = getPasswordStrength(password);

    const strengthLabels = ['', 'Weak', 'Fair', 'Good', 'Strong'];

    const strengthColors = [
        'bg-gray-700',
        'bg-red-500',
        'bg-yellow-500',
        'bg-blue-500',
        'bg-green-500'
    ];



    return (
        <AuthLayout>
            <div className="space-y-6">

                {/* Heading */}
                <div>
                    <h2 className="text-3xl font-bold">
                        {step === 5 ? 'Vault recovered!' : 'Recover your account'}
                    </h2>

                    <p className="text-gray-400 mt-2">
                        {step === 1 && 'Enter your registered email to begin recovery.'}
                        {step === 2 && 'Enter the verification code sent to your email.'}
                        {step === 3 && 'Enter your saved PassVault recovery key.'}
                        {step === 4 && 'Create a new master password for your account.'}
                        {step === 5 && 'Your recovery process is complete.'}
                    </p>
                </div>

                {/* Progress indicator */}
                {step < 5 && (
                    <div className="space-y-3">
                        <div className="flex justify-between gap-1">
                            {steps.map((label, index) => (
                                <div
                                    key={label}
                                    className={`h-1.5 flex-1 rounded-full ${
                                        index + 1 <= step
                                            ? 'bg-violet-500'
                                            : 'bg-gray-700'
                                    }`}
                                />
                            ))}
                        </div>

                        <p className="text-xs text-gray-400">
                            Step {step} of 4 — {steps[step - 1]}
                        </p>
                    </div>
                )}

                {/* Step 1: Email */}
                {step === 1 && (
                    <form onSubmit={handleEmailSubmit} className="space-y-4">
                        <div>
                            <label className="block text-sm mb-2">
                                Email address
                            </label>

                            <input
                                type="email"
                                required
                                placeholder="you@example.com"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="w-full rounded-lg bg-[#1B2238] border border-gray-700 px-4 py-3 outline-none focus:border-violet-500"
                            />
                        </div>

                        <button
                            type="submit"
                            className="w-full rounded-lg bg-violet-600 hover:bg-violet-700 py-3 font-semibold transition"
                        >
                            Continue
                        </button>
                    </form>
                )}

                {/* Step 2: OTP */}
                {step === 2 && (
                    <form onSubmit={handleOtpSubmit} className="space-y-4">
                        <div>
                            <label className="block text-sm mb-2">
                                6-digit verification code
                            </label>

                            <input
                                type="text"
                                inputMode="numeric"
                                maxLength={6}
                                required
                                placeholder="Enter OTP"
                                value={otp}
                                onChange={(e) =>
                                    setOtp(e.target.value.replace(/\D/g, ''))
                                }
                                className="w-full rounded-lg bg-[#1B2238] border border-gray-700 px-4 py-3 outline-none focus:border-violet-500 tracking-widest"
                            />
                        </div>

                        <button
                            type="submit"
                            className="w-full rounded-lg bg-violet-600 hover:bg-violet-700 py-3 font-semibold transition"
                        >
                            Verify OTP
                        </button>
                    </form>
                )}

                {/* Step 3: Recovery Key */}
                {step === 3 && (
                    <form onSubmit={handleRecoverySubmit} className="space-y-4">
                        <div>
                            <label className="block text-sm mb-2">
                                Recovery key
                            </label>

                            <input
                                type="text"
                                required
                                placeholder="Enter your recovery key"
                                value={recoveryKey}
                                onChange={(e) => setRecoveryKey(e.target.value)}
                                className="w-full rounded-lg bg-[#1B2238] border border-gray-700 px-4 py-3 outline-none focus:border-violet-500"
                            />

                            <p className="text-xs text-gray-400 mt-2">
                                Find this key in the Emergency Kit you saved
                                when creating your account.
                            </p>
                        </div>

                        <button
                            type="submit"
                            className="w-full rounded-lg bg-violet-600 hover:bg-violet-700 py-3 font-semibold transition"
                        >
                            Verify Recovery Key
                        </button>
                    </form>
                )}

                {/* Step 4: New Password */}
                {step === 4 && (
                    <form onSubmit={handlePasswordSubmit} className="space-y-4">
                        <div>
                            <label className="block text-sm mb-2">
                                New master password
                            </label>

                            <input
                                type={showPassword ? 'text' : 'password'}
                                required
                                placeholder="Enter new master password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="w-full rounded-lg bg-[#1B2238] border border-gray-700 px-4 py-3 outline-none focus:border-violet-500"
                            />
                        </div>

                        {/* Password strength indicator */}
                        {password && (
                            <div className="space-y-2 mt-2">
                                <div className="flex gap-1.5">
                                    {[1, 2, 3, 4].map((bar) => (
                                        <div
                                            key={bar}
                                            className={`h-1.5 flex-1 rounded-full ${
                                                bar <= strength
                                                    ? strengthColors[strength]
                                                    : 'bg-gray-700'
                                            }`}
                                        />
                                    ))}
                                </div>

                                <p className="text-xs text-gray-400">
                                    Password strength:{' '}
                                    <span className="font-medium text-white">
                                        {strengthLabels[strength]}
                                    </span>
                                </p>
                            </div>
                        )}

                        <p className="text-xs text-gray-400 mt-2">
                            Use at least 8 characters, including an uppercase letter,
                            a number, and a special character.
                        </p>

                        <div>
                            <label className="block text-sm mb-2">
                                Confirm new master password
                            </label>

                            <input
                                type={showPassword ? 'text' : 'password'}
                                required
                                placeholder="Confirm new master password"
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                                className="w-full rounded-lg bg-[#1B2238] border border-gray-700 px-4 py-3 outline-none focus:border-violet-500"
                            />
                        </div>

                        <label className="flex items-center gap-2 text-sm text-gray-400">
                            <input
                                type="checkbox"
                                checked={showPassword}
                                onChange={(e) => setShowPassword(e.target.checked)}
                                className="accent-violet-500"
                            />
                            Show passwords
                        </label>

                        <button
                            type="submit"
                            className="w-full rounded-lg bg-violet-600 hover:bg-violet-700 py-3 font-semibold transition"
                        >
                            Reset Master Password
                        </button>
                    </form>
                )}

                {/* Step 5: Success */}
                {step === 5 && (
                    <div className="space-y-4">
                        <div className="rounded-xl border border-green-500/30 bg-green-500/10 p-5 text-center">
                            <div className="text-3xl mb-3">✓</div>
                            <p className="font-semibold text-green-400">
                                Recovery completed
                            </p>
                        </div>

                        <a
                            href="/login"
                            className="block text-center w-full rounded-lg bg-violet-600 hover:bg-violet-700 py-3 font-semibold transition"
                        >
                            Back to Sign In
                        </a>
                    </div>
                )}

                {/* Error */}
                {error && (
                    <p className="text-red-400 text-sm">
                        {error}
                    </p>
                )}

                {/* Back button */}
                {step > 1 && step < 5 && (
                    <button
                        type="button"
                        onClick={() => {
                            setError('');
                            setStep(step - 1);
                        }}
                        className="text-sm text-gray-400 hover:text-white transition"
                    >
                        ← Go back
                    </button>
                )}

                {step === 1 && (
                    <p className="text-center text-sm text-gray-400">
                        Remember your password?{' '}
                        <a
                            href="/login"
                            className="text-violet-400 hover:text-violet-300"
                        >
                            Sign in
                        </a>
                    </p>
                )}

            </div>
        </AuthLayout>
    );
};

export default ForgotPassword;
