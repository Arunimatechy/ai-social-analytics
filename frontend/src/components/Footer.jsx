function Footer() {
  return (
    <footer className="bg-[#0B1220] border-t border-white/10 text-white">

      <div className="max-w-6xl mx-auto px-6 py-10 text-center">

        {/* Brand */}
        <h2 className="text-xl font-bold tracking-wide">
          AI Social Analytics Platform
        </h2>

        {/* Subtitle */}
        <p className="text-gray-400 mt-2 text-sm">
          Built with Django & React • Powered by AI Insights
        </p>

        {/* Divider line */}
        <div className="my-6 border-t border-white/10"></div>

        {/* Bottom text */}
        <p className="text-gray-500 text-xs">
          © {new Date().getFullYear()} AI Social Analytics. All rights reserved.
        </p>

      </div>

    </footer>
  );
}

export default Footer;