import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 border-b border-white/10 bg-[#0B1220]/80 backdrop-blur-xl">

      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">

        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-cyan-400 shadow-[0_0_10px_#22d3ee]" />
          <h1 className="text-white font-bold text-lg tracking-wide">
            AI Analytics
          </h1>
        </div>

        {/* Center Links */}
        <div className="hidden md:flex items-center gap-8 text-sm text-gray-300">
          <Link className="hover:text-white transition" to="/">
            Home
          </Link>
          
          <Link className="hover:text-white transition" to="/about">
            About
          </Link>
        </div>

        {/* Right Buttons */}
        <div className="flex items-center gap-3">

          <Link
            to="/login"
            className="px-4 py-2 rounded-full text-sm text-gray-300 hover:text-white hover:bg-white/10 transition"
          >
            Sign In
          </Link>

          <Link
            to="/register"
            className="px-5 py-2 rounded-full text-sm font-medium text-black bg-gradient-to-r from-cyan-400 to-blue-500 hover:opacity-90 transition shadow-lg shadow-cyan-500/20"
          >
            Get Started
          </Link>

        </div>

      </div>
    </nav>
  );
}

export default Navbar;