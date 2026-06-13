import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
} from "recharts";

function AnalyticsCharts({ data }) {

  const sentimentData = [
    { name: "Positive", value: data.positive },
    { name: "Negative", value: data.negative },
    { name: "Neutral", value: data.neutral },
  ];

  return (
    <div className="grid md:grid-cols-2 gap-6 mt-10">

      {/* Pie Chart */}
      <div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl">

        <h2 className="text-lg font-semibold text-white mb-4">
          Sentiment Distribution
        </h2>

        <ResponsiveContainer width="100%" height={300}>
          <PieChart>

            <Pie
              data={sentimentData}
              dataKey="value"
              outerRadius={110}
              label
            >
              <Cell fill="#22c55e" />
              <Cell fill="#ef4444" />
              <Cell fill="#f59e0b" />
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

      {/* Bar Chart */}
      <div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl">

        <h2 className="text-lg font-semibold text-white mb-4">
          Analysis Count
        </h2>

        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={sentimentData}>

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

            <Bar
              dataKey="value"
              fill="#06b6d4"
              radius={[6, 6, 0, 0]}
            />

          </BarChart>
        </ResponsiveContainer>

      </div>

    </div>
  );
}

export default AnalyticsCharts;