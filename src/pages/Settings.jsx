
const Settings = () => {
  return (
    <main className="min-h-screen bg-[#0B1020] px-4 py-8 sm:px-8 text-white">
      <div className="mx-auto max-w-3xl">

        {/* Heading */}
        <div className="mb-8">
          <h1 className="text-2xl sm:text-3xl font-bold">
            Settings
          </h1>
          <p className="mt-1 text-sm text-gray-400">
            Manage your security and vault preferences.
          </p>
        </div>

        <div className="flex flex-col gap-6">

          {/* Security */}
          <section className="rounded-xl border border-white/10 bg-[#151A35] p-5 sm:p-6">
            <h2 className="text-lg font-semibold mb-4">
              Security
            </h2>

            <div className="flex items-center justify-between gap-4 border-t border-white/10 py-4">
              <div>
                <p className="font-medium">
                  Change Master Password
                </p>
                <p className="mt-1 text-xs text-gray-400">
                  Update your account password.
                </p>
              </div>

              <button
                disabled
                className="shrink-0 text-sm text-purple-400 opacity-60 cursor-not-allowed"
              >
                Change →
              </button>
            </div>

            <div className="flex items-center justify-between gap-4 border-t border-white/10 py-4">
              <div>
                <p className="font-medium">
                  Active Sessions
                </p>
                <p className="mt-1 text-xs text-gray-400">
                  Review your signed-in devices.
                </p>
              </div>

              <button
                disabled
                className="shrink-0 text-sm text-purple-400 opacity-60 cursor-not-allowed"
              >
                Manage →
              </button>
            </div>
          </section>

          {/* Vault */}
          <section className="rounded-xl border border-white/10 bg-[#151A35] p-5 sm:p-6">
            <h2 className="text-lg font-semibold mb-4">
              Vault
            </h2>

            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-t border-white/10 pt-4">
              <div>
                <p className="font-medium">
                  Automatic Lock
                </p>
                <p className="mt-1 text-xs text-gray-400">
                  Lock your vault after inactivity.
                </p>
              </div>

              <select
                disabled
                defaultValue="5"
                className="w-full sm:w-40 rounded-lg border border-white/10 bg-[#0B1020] px-3 py-2 text-sm text-gray-300 outline-none opacity-60 cursor-not-allowed"
              >
                <option value="immediately">Immediately</option>
                <option value="1">1 minute</option>
                <option value="5">5 minutes</option>
                <option value="15">15 minutes</option>
                <option value="30">30 minutes</option>
              </select>
            </div>
          </section>

        </div>
      </div>
    </main>
  )
}

export default Settings
