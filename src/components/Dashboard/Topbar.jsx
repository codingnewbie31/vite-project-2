import { useState } from "react";

const Topbar = ({ activeNav, setSidebarOpen }) => {
  const [notifOpen, setNotifOpen] = useState(false);

  return (
    <header className="flex items-center justify-between px-6 py-4 border-b bg-white border-slate-200 shrink-0">
      <div className="flex items-center gap-3">
        <button
          onClick={() => setSidebarOpen((prev) => !prev)}
          className="p-2 rounded-lg hover:bg-slate-100 text-zinc-500 transition-colors"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
        <h1 className="text-lg font-semibold capitalize text-zinc-900">{activeNav}</h1>
      </div>

      <div className="flex items-center gap-2">
        {/* Search */}
        <div className="relative hidden sm:block">
          <svg
            className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-400"
            fill="none" stroke="currentColor" viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-4.35-4.35M17 11A6 6 0 1 1 5 11a6 6 0 0 1 12 0z" />
          </svg>
          <input
            type="text"
            placeholder="Search..."
            className="pl-9 pr-4 py-2 text-sm rounded-lg border border-slate-200 bg-slate-50 text-zinc-800 placeholder-zinc-400 focus:border-violet-400 outline-none transition w-48"
          />
        </div>

        {/* Notifications */}
        <div className="relative">
          <button
            onClick={() => setNotifOpen(!notifOpen)}
            className="p-2 rounded-lg hover:bg-slate-100 text-zinc-500 transition-colors relative"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6 6 0 10-12 0v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
            </svg>
            <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-violet-500 rounded-full" />
          </button>
          {notifOpen && (
            <div className="absolute right-0 top-12 w-72 rounded-xl shadow-xl border border-slate-200 bg-white z-50 overflow-hidden">
              <div className="px-4 py-3 text-sm font-semibold text-zinc-700 border-b border-slate-100">
                Notifications
              </div>
              {["Deployment succeeded", "New team member joined", "Usage limit at 80%"].map((n, i) => (
                <div
                  key={i}
                  className="px-4 py-3 text-sm text-zinc-600 border-b border-slate-50 last:border-0 hover:bg-slate-50"
                >
                  {n}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Topbar;