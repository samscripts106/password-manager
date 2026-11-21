const Profile = () => {
  return (
    <main className="min-h-screen bg-[#0B1020] px-4 py-8 sm:px-8 text-white">
      <div className="max-w-3xl mx-auto">

        {/* Heading */}
        <div className="mb-8">
          <h1 className="text-2xl sm:text-3xl font-bold">My Profile</h1>
          <p className="text-gray-400 mt-1">
            Manage your account information.
          </p>
        </div>

        {/* Profile card */}
        <section className="rounded-xl border border-white/10 bg-[#151A35] p-5 sm:p-8">

          {/* Avatar */}
          <div className="flex items-center gap-4 mb-8">
            <div className="w-16 h-16 rounded-full bg-purple-500/20 flex items-center justify-center">
              <img
                src="/icons/profile.svg"
                alt="Profile"
                className="w-8 h-8"
              />
            </div>

            <div>
              <h2 className="text-lg font-semibold">Your Account</h2>
              <p className="text-sm text-gray-400">
                PassVault member
              </p>
            </div>
          </div>

          <div className="border-t border-white/10 pt-6 space-y-6">

            {/* Email */}
            <div>
              <p className="text-xs text-gray-400 uppercase tracking-wider mb-2">
                Email Address
              </p>
              <p className="text-gray-200">Not connected yet</p>
            </div>

            {/* Account creation date */}
            <div>
              <p className="text-xs text-gray-400 uppercase tracking-wider mb-2">
                Account Created
              </p>
              <p className="text-gray-200">Not available yet</p>
            </div>

            {/* Account ID */}
            <div>
              <p className="text-xs text-gray-400 uppercase tracking-wider mb-2">
                Account ID
              </p>
              <p className="text-gray-200">Not available yet</p>
            </div>

          </div>

          {/* Logout */}
          <div className="border-t border-white/10 mt-8 pt-6">
            <button
              className="w-full sm:w-auto flex items-center justify-center gap-2 rounded-lg border border-red-500/30 bg-red-500/10 px-5 py-2.5 text-red-400 hover:bg-red-500/20 transition-colors"
            >
              <img
                src="/icons/logout.svg"
                alt=""
                className="w-5 h-5"
              />
              Logout
            </button>
          </div>

        </section>
      </div>
    </main>
  )
}

export default Profile
