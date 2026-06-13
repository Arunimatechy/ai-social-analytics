import { useState } from "react";
import toast from "react-hot-toast";

import { analyzeText } from "../api/analyzeApi";
import DashboardLayout from "../components/DashboardLayout";

function Analyzer() {
  const [text, setText] = useState("");
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleAnalyze = async () => {
    if (!text.trim()) {
      toast.error("Please enter text");
      return;
    }

    try {
      setLoading(true);
      const data = await analyzeText(text);
      setResult(data);
      toast.success("Analysis Complete");
    } catch {
      toast.error("Analysis Failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <DashboardLayout>
      <div className="bg-[#0B1220] min-h-screen text-white p-6">

        {/* Title */}
        <h1 className="text-3xl md:text-4xl font-bold mb-8">
          Text Analyzer
        </h1>

        {/* Input Card */}
        <div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl">

          <textarea
            rows="6"
            placeholder="Paste your text for AI analysis..."
            value={text}
            onChange={(e) => setText(e.target.value)}
            className="w-full p-4 rounded-xl bg-white/5 text-white border border-white/10 focus:outline-none focus:ring-2 focus:ring-cyan-500"
          />

          <button
            onClick={handleAnalyze}
            disabled={loading}
            className="mt-5 px-6 py-3 rounded-xl font-semibold text-white
            bg-gradient-to-r from-cyan-500 to-blue-600
            hover:scale-[1.02] transition disabled:opacity-50"
          >
            {loading ? "Analyzing AI..." : "Run Analysis"}
          </button>

        </div>

        {/* Result Section */}
        {result && (
          <div className="grid md:grid-cols-3 gap-6 mt-10">

            {/* Sentiment */}
            <div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl hover:scale-105 transition">
              <h3 className="text-gray-400">Sentiment</h3>
              <p className="text-3xl font-bold mt-3 text-cyan-400">
                {result.sentiment}
              </p>
            </div>

            {/* Emotion */}
            <div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl hover:scale-105 transition">
              <h3 className="text-gray-400">Emotion</h3>
              <p className="text-3xl font-bold mt-3 text-green-400">
                {result.emotion}
              </p>
            </div>

            {/* Confidence */}
            <div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl hover:scale-105 transition">
              <h3 className="text-gray-400">Confidence</h3>
              <p className="text-3xl font-bold mt-3 text-yellow-400">
                {result.confidence}%
              </p>
            </div>

          </div>
        )}

      </div>
    </DashboardLayout>
  );
}

export default Analyzer;