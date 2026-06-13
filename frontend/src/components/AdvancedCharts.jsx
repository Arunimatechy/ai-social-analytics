import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
} from "recharts";

function AdvancedCharts({ data }) {

  const emotionData =
    Object.entries(data.emotions || {}).map(([key, value]) => ({
      name: key,
      value,
    }));

  const trendData = [
    { name: "Positive", value: data.positive },
    { name: "Negative", value: data.negative },
    { name: "Neutral", value: data.neutral },
  ];

  return (
    <div className="grid md:grid-cols-2 gap-6 mt-10">

      {/* Emotion Pie Chart */}
      <div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl">

        <h2 className="text-lg font-semibold text-white mb-4">
          Emotion Distribution
        </h2>

        <ResponsiveContainer width="100%" height={300}>
          <PieChart>
            <Pie
              data={emotionData}
              dataKey="value"
              label
              outerRadius={110}
            >
              <Cell fill="#06b6d4" />
              <Cell fill="#22c55e" />
              <Cell fill="#ef4444" />
              <Cell fill="#f59e0b" />
              <Cell fill="#a855f7" />
            </Pie>

            <Tooltip
              contentStyle={{
                backgroundColor: "#0B1220",
                border: "1px solid rgba(255,255,255,0.1)",
                color: "#fff",
              }}
            />
          </PieChart>
        </ResponsiveContainer>

      </div>

      {/* Line Chart */}
      <div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl">

        <h2 className="text-lg font-semibold text-white mb-4">
          Sentiment Trend
        </h2>

        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={trendData}>

            <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />

            <XAxis dataKey="name" stroke="#94a3b8" />
            <YAxis stroke="#94a3b8" />

            <Tooltip
              contentStyle={{
                backgroundColor: "#0B1220",
                border: "1px solid rgba(255,255,255,0.1)",
                color: "#fff",
              }}
            />

            <Line
              type="monotone"
              dataKey="value"
              stroke="#06b6d4"
              strokeWidth={3}
              dot={{ r: 5 }}
            />

          </LineChart>
        </ResponsiveContainer>

      </div>

    </div>
  );
}

export default AdvancedCharts;