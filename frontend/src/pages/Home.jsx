import { Link } from "react-router-dom";
import Footer from "../components/Footer";

function Home() {
  return (
    <div className="min-h-screen bg-[#0B1220] text-white">

      {/* HERO */}
      <section className="relative px-6 md:px-10 py-28 text-center overflow-hidden">

        {/* background glow */}
        <div className="absolute w-[500px] h-[500px] bg-cyan-500/20 blur-3xl rounded-full top-[-100px] left-[-100px]" />
        <div className="absolute w-[400px] h-[400px] bg-blue-600/20 blur-3xl rounded-full bottom-[-120px] right-[-120px]" />

        <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
          AI Social Media <span className="text-cyan-400">Analytics Platform</span>
        </h1>

        <p className="text-gray-300 text-lg md:text-xl max-w-3xl mx-auto">
          Analyze sentiment, detect emotions, generate reports and gain powerful
          insights from social media content.
        </p>

        <div className="mt-10 flex justify-center gap-4">
          <Link
            to="/register"
            className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-full font-medium hover:scale-105 transition"
          >
            Get Started
          </Link>

          <Link
            to="/login"
            className="border border-white/20 px-8 py-4 rounded-full hover:bg-white/10 transition"
          >
            Login
          </Link>
        </div>
      </section>

      {/* FEATURES */}
      <section className="px-6 md:px-10 py-24">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Features
        </h2>

        <div className="grid md:grid-cols-3 gap-8">

          <div className="p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl hover:scale-105 transition">
            <h3 className="text-xl font-bold mb-3 text-cyan-400">
              Sentiment Analysis
            </h3>
            <p className="text-gray-300">
              Analyze positive, negative and neutral sentiments instantly.
            </p>
          </div>

          <div className="p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl hover:scale-105 transition">
            <h3 className="text-xl font-bold mb-3 text-cyan-400">
              Emotion Detection
            </h3>
            <p className="text-gray-300">
              Detect joy, sadness, anger, fear and more.
            </p>
          </div>

          <div className="p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl hover:scale-105 transition">
            <h3 className="text-xl font-bold mb-3 text-cyan-400">
              Advanced Reports
            </h3>
            <p className="text-gray-300">
              Export analytics reports in PDF, Excel and CSV formats.
            </p>
          </div>

        </div>
      </section>

      {/* STATISTICS */}
      <section className="py-24 text-center px-6 md:px-10">
        <h2 className="text-3xl md:text-4xl font-bold mb-12">
          Platform Statistics
        </h2>

        <div className="grid md:grid-cols-4 gap-8">

          {[
            ["10K+", "Analyses"],
            ["500+", "Users"],
            ["95%", "Accuracy"],
            ["24/7", "Availability"],
          ].map(([num, label], i) => (
            <div
              key={i}
              className="p-6 rounded-2xl bg-white/5 border border-white/10"
            >
              <h3 className="text-4xl font-bold text-cyan-400">{num}</h3>
              <p className="text-gray-300 mt-2">{label}</p>
            </div>
          ))}

        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-24 px-6 md:px-10">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Testimonials
        </h2>

        <div className="grid md:grid-cols-3 gap-8">

          {[
            ["Arun", "Amazing platform for social media analysis."],
            ["Rahul", "Excellent reporting and analytics."],
            ["Priya", "Easy to use and highly accurate."],
          ].map(([name, text], i) => (
            <div
              key={i}
              className="p-8 rounded-2xl bg-white/5 border border-white/10 hover:scale-105 transition"
            >
              <p className="text-gray-300">{text}</p>
              <h4 className="font-bold mt-4 text-cyan-400">{name}</h4>
            </div>
          ))}

        </div>
      </section>

      {/* PRICING */}
      <section className="py-24 px-6 md:px-10">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Pricing
        </h2>

        <div className="grid md:grid-cols-3 gap-8">

          {[
            ["Free", "₹0", "Basic Analytics"],
            ["Pro", "₹499", "Advanced Analytics"],
            ["Enterprise", "₹999", "Unlimited Reports"],
          ].map(([title, price, desc], i) => (
            <div
              key={i}
              className="p-8 rounded-2xl bg-white/5 border border-white/10 hover:scale-105 transition"
            >
              <h3 className="text-xl font-bold">{title}</h3>
              <h4 className="text-3xl text-cyan-400 my-4">{price}</h4>
              <p className="text-gray-300">{desc}</p>
            </div>
          ))}

        </div>
      </section>

      {/* CTA */}
      <section className="py-24 text-center bg-gradient-to-r from-cyan-600/20 to-blue-600/20 border-y border-white/10">

        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          Ready to Analyze?
        </h2>

        <p className="text-gray-300 mb-8">
          Start using AI-powered analytics today.
        </p>

        <Link
          to="/register"
          className="bg-gradient-to-r from-cyan-500 to-blue-600 px-8 py-4 rounded-full font-medium hover:scale-105 transition"
        >
          Create Account
        </Link>

      </section>

      <Footer />

    </div>
  );
}

export default Home;