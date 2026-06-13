import {
  LayoutDashboard,
  Search,
  History,
  FileText,
  LogOut,
} from "lucide-react";

import { NavLink, useNavigate } from "react-router-dom";
import { User } from "lucide-react";
function Sidebar() {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("access");
    localStorage.removeItem("refresh");
    navigate("/");
  };

  const menuClass = ({ isActive }) =>
    `flex items-center gap-3 px-4 py-3 rounded-xl transition font-medium ${
      isActive
        ? "bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg"
        : "text-gray-300 hover:bg-white/10 hover:text-white"
    }`;

  return (
    <div className="w-64 min-h-screen p-5 bg-[#0B1220] border-r border-white/10">

      {/* Logo */}
      <h1 className="text-xl font-bold text-white mb-10 tracking-wide">
        AI Analytics
      </h1>

      {/* Nav */}
      <nav className="space-y-3">

        <NavLink to="/dashboard" className={menuClass}>
          <LayoutDashboard size={20} />
          Dashboard
        </NavLink>

        <NavLink to="/dashboard/analyzer" className={menuClass}>
          <Search size={20} />
          Analyzer
        </NavLink>

        <NavLink to="/dashboard/history" className={menuClass}>
          <History size={20} />
          History
        </NavLink>

        <NavLink to="/dashboard/reports" className={menuClass}>
          <FileText size={20} />
          Reports
        </NavLink>
<NavLink
  to="/dashboard/profile"
  className={menuClass}
>
  <User size={20} />
  Profile
</NavLink>
      </nav>

      {/* Divider */}
      <div className="border-t border-white/10 my-8" />

      {/* Logout */}
      <button
        onClick={logout}
        className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-xl
        bg-red-500/10 text-red-400 hover:bg-red-500/20 transition"
      >
        <LogOut size={18} />
        Logout
      </button>

    </div>
  );
}

export default Sidebar;