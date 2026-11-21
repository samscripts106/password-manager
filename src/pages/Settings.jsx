
const Settings = () => {
  return (
    <main className="min-h-screen bg-[#0B1020] px-4 py-8 sm:px-8">
      <div className="mx-auto max-w-4xl">

        {/* Page heading */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-white">
            Settings
          </h1>
          <p className="mt-2 text-gray-400">
            Manage your account and vault preferences.
          </p>
        </div>

        <div className="flex flex-col gap-6">

          {/* Account Settings */}
          <section className="rounded-xl border border-white/10 bg-white/5 p-5 sm:p-6">
            <div className="mb-5">
              <h2 className="text-xl font-semibold text-white">
                Account
              </h2>
              <p className="mt-1 text-sm text-gray-400">
                Manage your PassVault account information.
              </p>
            </div>

            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-purple-600/20 text-xl text-purple-400">
                <span>U</span>
              </div>
              <div>
                <p className="font-medium text-white">Your Account</p>
                <p className="text-sm text-gray-400">
                  Account information and email address
                </p>
              </div>
            </div>
          </section>

          {/* Security Settings */}
          <section className="rounded-xl border border-white/10 bg-white/5 p-5 sm:p-6">
            <div className="mb-5">
              <h2 className="text-xl font-semibold text-white">
                Security
              </h2>
              <p className="mt-1 text-sm text-gray-400">
                Keep your account and passwords protected.
              </p>
            </div>

            <div className="flex flex-col gap-5">
              <div>
                <p className="font-medium text-white">Master Password</p>
                <p className="mt-1 text-sm text-gray-400">
                  Change the password used to access your account.
                </p>
              </div>

              <div className="border-t border-white/10 pt-5">
                <p className="font-medium text-white">Active Sessions</p>
                <p className="mt-1 text-sm text-gray-400">
                  Manage devices and sessions where your account is signed in.
                </p>
              </div>
            </div>
          </section>

          {/* Vault Settings */}
          <section className="rounded-xl border border-white/10 bg-white/5 p-5 sm:p-6">
            <div className="mb-5">
              <h2 className="text-xl font-semibold text-white">
                Vault
              </h2>
              <p className="mt-1 text-sm text-gray-400">
                Configure how your password vault behaves.
              </p>
            </div>

            <div>
              <p className="font-medium text-white">Automatic Lock</p>
              <p className="mt-1 text-sm text-gray-400">
                Choose how long your vault can remain inactive before locking.
              </p>
            </div>
          </section>

          {/* Appearance Settings */}
          <section className="rounded-xl border border-white/10 bg-white/5 p-5 sm:p-6">
            <div className="mb-5">
              <h2 className="text-xl font-semibold text-white">
                Appearance
              </h2>
              <p className="mt-1 text-sm text-gray-400">
                Customize how PassVault looks.
              </p>
            </div>

            <div>
              <p className="font-medium text-white">Theme</p>
              <p className="mt-1 text-sm text-gray-400">
                Dark theme is currently the default appearance.
              </p>
            </div>
          </section>

        </div>
      </div>
    </main>
  )
}

export default Settings
