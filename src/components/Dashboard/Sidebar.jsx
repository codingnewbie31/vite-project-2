


const Sidebar = ({ sidebarOpen, activeNav, setActiveNav, navItems }) => (
  <aside
    className={`flex flex-col transition-all duration-300 ease-in-out shrink-0 ${
      sidebarOpen ? "w-60" : "w-16"
    } bg-white border-r border-slate-200`}
  >
    {/* Logo */}
    <div className="flex items-center gap-3 px-4 py-5 border-b border-slate-200">
      <div className="w-8 h-8 rounded-lg bg-violet-600 flex items-center justify-center shrink-0">
        <span className="text-white text-sm font-bold">L</span>
      </div>
      {sidebarOpen && (
        <span className="font-semibold text-base tracking-tight text-zinc-900">
          Logo
        </span>
      )}
    </div>

    {/* Nav Items */}
    <nav className="flex-1 py-4 flex flex-col gap-1 px-2 overflow-y-auto">
      {navItems.map((item) => (
        <button
          key={item.id}
          onClick={() => setActiveNav(item.id)}
          className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium w-full text-left transition-all duration-150 ${
            activeNav === item.id
              ? "bg-violet-50 text-violet-700"
              : "text-zinc-500 hover:bg-slate-100 hover:text-zinc-800"
          }`}
        >
          <span className="text-base shrink-0">{item.icon}</span>
          {sidebarOpen && <span className="flex-1 truncate">{item.label}</span>}
        </button>
      ))}
    </nav>

    {/* User Profile */}
    <div className="px-3 py-4 border-t border-slate-200">
      <div className="flex items-center gap-3">
        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-violet-500 to-pink-500 flex items-center justify-center shrink-0">
          <span className="text-white text-xs font-bold">DF</span>
        </div>
        {sidebarOpen && (
          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium truncate text-zinc-800">Danyal Fayaz</p>
            <p className="text-xs truncate text-zinc-400">Admin</p>
          </div>
        )}
      </div>
    </div>
  </aside>
);

export default Sidebar;