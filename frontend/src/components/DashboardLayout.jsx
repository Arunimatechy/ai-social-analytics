import Sidebar from "./Sidebar";

function DashboardLayout({ children }) {
  return (
    <div className="flex min-h-screen bg-[#0B1220] text-white">

      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 p-6 md:p-10 overflow-auto">

        {/* Content Wrapper */}
        <div className="max-w-7xl mx-auto">

          {children}

        </div>

      </div>

    </div>
  );
}

export default DashboardLayout;