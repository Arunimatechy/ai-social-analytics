import Footer from "../components/Footer";

function About() {
  return (
    <div className="min-h-screen bg-[#0B1220] text-white pt-24">

      {/* HERO SECTION */}
      <section className="text-center px-6 md:px-10 py-20">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          About <span className="text-cyan-400">AI Analytics</span>
        </h1>

        <p className="text-gray-300 max-w-3xl mx-auto text-lg">
          AI Analytics is a next-generation social media intelligence platform
          that helps you understand public sentiment, detect emotions, and
          generate powerful insights using Artificial Intelligence.
        </p>
      </section>

      {/* MISSION */}
      <section className="px-6 md:px-10 py-16">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10 items-center">

          <div>
            <h2 className="text-3xl font-bold mb-4 text-cyan-400">
              Our Mission
            </h2>
            <p className="text-gray-300 leading-relaxed">
              We aim to simplify social media analysis by turning raw text data
              into meaningful insights. Our platform helps businesses, creators,
              and analysts make data-driven decisions with ease.
            </p>
          </div>

          <div className="p-8 rounded-2xl bg-white/5 border border-white/10">
            <h3 className="text-xl font-bold mb-3">What We Do</h3>
            <ul className="text-gray-300 space-y-2">
              <li>• Sentiment Analysis (Positive / Negative / Neutral)</li>
              <li>• Emotion Detection (Joy, Anger, Fear, etc.)</li>
              <li>• AI-powered text insights</li>
              <li>• Advanced analytics reports</li>
              <li>• Exportable dashboards</li>
            </ul>
          </div>

        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="px-6 md:px-10 py-20">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Why Choose Us
        </h2>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">

          <div className="p-8 rounded-2xl bg-white/5 border border-white/10">
            <h3 className="text-cyan-400 font-bold mb-3">Fast Analysis</h3>
            <p className="text-gray-300">
              Get instant AI-powered results in seconds.
            </p>
          </div>

          <div className="p-8 rounded-2xl bg-white/5 border border-white/10">
            <h3 className="text-cyan-400 font-bold mb-3">High Accuracy</h3>
            <p className="text-gray-300">
              Advanced models ensure reliable predictions.
            </p>
          </div>

          <div className="p-8 rounded-2xl bg-white/5 border border-white/10">
            <h3 className="text-cyan-400 font-bold mb-3">Easy Reports</h3>
            <p className="text-gray-300">
              Export insights in PDF, Excel, and CSV formats.
            </p>
          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="py-20 text-center bg-gradient-to-r from-cyan-600/20 to-blue-600/20 border-y border-white/10">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Start Exploring Insights Today
        </h2>

        <p className="text-gray-300 mb-8">
          Join AI Analytics and unlock powerful data insights.
        </p>

        <a
          href="/register"
          className="bg-gradient-to-r from-cyan-500 to-blue-600 px-8 py-4 rounded-full font-medium hover:scale-105 transition"
        >
          Get Started
        </a>
      </section>

      <Footer />
    </div>
  );
}

export default About;