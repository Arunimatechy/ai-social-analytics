import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";

import { getAnalyticsSummary } from "../api/dashboardApi";

import AnalyticsCharts from "../components/AnalyticsCharts";
import AdvancedCharts from "../components/AdvancedCharts";
import DashboardLayout from "../components/DashboardLayout";

import {
  BarChart3,
  Smile,
  Frown,
  MinusCircle,
} from "lucide-react";

function Dashboard() {
  const token = localStorage.getItem("access");
  const [data, setData] = useState(null);

  useEffect(() => {
    fetchDashboard();
  }, []);

  const fetchDashboard = async () => {
    try {
      const result = await getAnalyticsSummary();
      setData(result);
    } catch (error) {
      console.log(error);
    }
  };

  if (!token) {
    return <Navigate to="/" />;
  }

  if (!data) {
    return (
      <div className="flex justify-center items-center h-screen bg-[#0B1220] text-white">
        Loading analytics...
      </div>
    );
  }

  return (
    <DashboardLayout>
      <div className="bg-[#0B1220] min-h-screen text-white p-6">

        {/* Header */}
        <h1 className="text-3xl md:text-4xl font-bold mb-10">
          Analytics Dashboard
        </h1>

        {/* Stats Grid */}
        <div className="grid md:grid-cols-5 gap-6">

          {/* Total */}
          <div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl hover:scale-105 transition">
            <BarChart3 size={34} className="text-cyan-400" />
            <h2 className="text-lg font-semibold mt-4 text-gray-300">
              Total Analysis
            </h2>
            <p className="text-3xl font-bold mt-2 text-white">
              {data.total_analysis}
            </p>
          </div>

          {/* Positive */}
          <div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl hover:scale-105 transition">
            <Smile size={34} className="text-green-400" />
            <h2 className="text-lg font-semibold mt-4 text-gray-300">
              Positive
            </h2>
            <p className="text-3xl font-bold mt-2 text-white">
              {data.positive}
            </p>
            <p className="text-green-400 mt-2 text-sm">
              {data.positive_percentage}%
            </p>
          </div>

          {/* Negative */}
          <div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl hover:scale-105 transition">
            <Frown size={34} className="text-red-400" />
            <h2 className="text-lg font-semibold mt-4 text-gray-300">
              Negative
            </h2>
            <p className="text-3xl font-bold mt-2 text-white">
              {data.negative}
            </p>
            <p className="text-red-400 mt-2 text-sm">
              {data.negative_percentage}%
            </p>
          </div>

          {/* Neutral */}
          <div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl hover:scale-105 transition">
            <MinusCircle size={34} className="text-yellow-400" />
            <h2 className="text-lg font-semibold mt-4 text-gray-300">
              Neutral
            </h2>
            <p className="text-3xl font-bold mt-2 text-white">
              {data.neutral}
            </p>
            <p className="text-yellow-400 mt-2 text-sm">
              {data.neutral_percentage}%
            </p>
          </div>

          {/* Top Emotion */}
          <div className="p-6 rounded-2xl bg-gradient-to-br from-cyan-500/10 to-blue-500/10 border border-cyan-500/20 backdrop-blur-xl hover:scale-105 transition">
            <h2 className="text-lg font-semibold text-gray-300">
              Top Emotion
            </h2>
            <p className="text-3xl font-bold mt-4 text-cyan-400">
              {data.top_emotion}
            </p>
          </div>

        </div>

        {/* Charts Section */}
        <div className="mt-12 space-y-10">

          <div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl">
            <AnalyticsCharts data={data} />
          </div>

          <div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl">
            <AdvancedCharts data={data} />
          </div>

        </div>

      </div>
    </DashboardLayout>
  );
}

export default Dashboard;