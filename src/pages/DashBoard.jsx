import { useState } from "react";
import Sidebar from "../components/Dashboard/Sidebar";
import Topbar from "../components/Dashboard/Topbar";
import Overview from "../components/Dashboard/Overview";
import Users from "../components/Dashboard/Users";
import Category from "../components/Dashboard/Category";
import Settings from "../components/Dashboard/Settings";
import ProductEditor from "../components/Dashboard/ProductEditor";

export const navItems = [
  { id: "overview", icon: "🏠", label: "Dashboard " },
  { id: "users",    icon: "👥", label: "Users" },
  { id: "category", icon: "📂", label: "Category" },
  { id: "product",  icon: "🛒", label: "Product" },
  { id: "settings", icon: "⚙️", label: "Settings" },
];

const Dashboard = () => {
  const [activeNav, setActiveNav] = useState("overview");
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const renderPage = () => {
    switch (activeNav) {
      case "overview":  return <Overview />;
      case "users":     return <Users />;
      case "category":  return <Category />;
      case "product":  return <ProductEditor />;
      case "settings":  return <Settings />;
      default:          return <Overview />;
    }
  };

  return (
    <div className="flex h-screen w-full font-sans overflow-hidden bg-slate-50 text-zinc-800"
      style={{ fontFamily: "'DM Sans', 'Segoe UI', sans-serif" }}>
      <Sidebar
        sidebarOpen={sidebarOpen}
        activeNav={activeNav}
        setActiveNav={setActiveNav}
        navItems={navItems}
      />
      <div className="flex-1 flex flex-col min-w-0">
        <Topbar
          activeNav={activeNav}
          setSidebarOpen={setSidebarOpen}
        />
        <main className="flex-1 overflow-y-auto p-6">
          {renderPage()}
        </main>
      </div>
    </div>
  );
};

export default Dashboard;