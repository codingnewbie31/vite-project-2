const Overview = () => (
  <div className="space-y-6">
    <h2 className="text-xl font-semibold text-zinc-800">Dashboard Overview</h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {[
        { label: "Total Revenue", value: "$48,295", change: "+12.5%" },
        { label: "Active Users", value: "3,842", change: "+8.1%" },
        { label: "Bounce Rate", value: "24.3%", change: "-3.2%" },
        { label: "Avg. Session", value: "4m 12s", change: "+0.8%" },
      ].map((stat, i) => (
        <div
          key={i}
          className="p-4 rounded-xl border border-slate-200 bg-white"
        >
          <p className="text-sm text-zinc-500">{stat.label}</p>
          <p className="text-2xl font-bold mt-1 text-zinc-900">{stat.value}</p>
          <p
            className={`text-sm mt-1 font-medium ${
              stat.change.startsWith("+") ? "text-emerald-600" : "text-red-500"
            }`}
          >
            {stat.change} from last week
          </p>
        </div>
      ))}
    </div>
  </div>
);

export default Overview;