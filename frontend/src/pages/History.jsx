import { useEffect, useState } from "react";
import toast from "react-hot-toast";

import {
  getHistory,
  deleteHistory,
} from "../api/historyApi";

import DashboardLayout from "../components/DashboardLayout";

function History() {

  const [histories, setHistories] = useState([]);
  const [search, setSearch] = useState("");
  const [sentiment, setSentiment] = useState("");
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    fetchHistory();
  }, [page, sentiment]);

  const fetchHistory = async () => {
    try {
      const data = await getHistory(page, search, sentiment);
      setHistories(data.results || []);
      setTotalPages(data.total_pages || 1);
    } catch {
      toast.error("Failed to load history");
    }
  };

  const handleDelete = async (id) => {
    try {
      await deleteHistory(id);
      toast.success("Deleted Successfully");
      fetchHistory();
    } catch {
      toast.error("Delete Failed");
    }
  };

  return (
    <DashboardLayout>
      <div className="bg-[#0B1220] min-h-screen text-white p-6">

        {/* Header */}
        <h1 className="text-3xl md:text-4xl font-bold mb-8">
          Analysis History
        </h1>

        {/* Filters */}
        <div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl mb-8">

          <div className="flex flex-col md:flex-row gap-4">

            {/* Search */}
            <input
              type="text"
              placeholder="Search analyzed text..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full p-3 rounded-xl bg-white/5 text-white border border-white/10 focus:outline-none focus:ring-2 focus:ring-cyan-500"
            />

            {/* Filter */}
            <select
  value={sentiment}
  onChange={(e) => setSentiment(e.target.value)}
  className="p-3 rounded-xl 
  bg-white/5 backdrop-blur-xl 
  text-white border border-white/10 
  focus:outline-none focus:ring-2 focus:ring-cyan-500
  hover:bg-white/10 transition cursor-pointer"
>
  <option value="">All</option>
  <option value="POSITIVE" className="text-green-400">Positive</option>
  <option value="NEGATIVE" className="text-red-400">Negative</option>
  <option value="NEUTRAL" className="text-yellow-400">Neutral</option>
</select>

            {/* Button */}
            <button
              onClick={fetchHistory}
              className="px-6 py-3 rounded-xl font-medium text-white
              bg-gradient-to-r from-cyan-500 to-blue-600 hover:scale-[1.02] transition"
            >
              Search
            </button>

          </div>
        </div>

        {/* Table */}
        <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl overflow-hidden">

          <div className="overflow-x-auto">

            <table className="w-full text-sm">

              {/* Head */}
              <thead className="bg-white/10 text-gray-300">
                <tr>
                  <th className="p-4 text-left">Text</th>
                  <th>Sentiment</th>
                  <th>Emotion</th>
                  <th>Confidence</th>
                  <th>Action</th>
                </tr>
              </thead>

              {/* Body */}
              <tbody>

                {histories.map((item) => (
                  <tr
                    key={item.id}
                    className="border-t border-white/10 hover:bg-white/5 transition"
                  >

                    <td className="p-4 text-gray-200 max-w-xs truncate">
                      {item.text}
                    </td>

                    <td className="text-cyan-400 font-medium">
                      {item.sentiment}
                    </td>

                    <td className="text-green-400 font-medium">
                      {item.emotion}
                    </td>

                    <td className="text-yellow-400 font-medium">
                      {item.confidence}%
                    </td>

                    <td>
                      <button
                        onClick={() => handleDelete(item.id)}
                        className="px-3 py-1 rounded-lg bg-red-500/20 text-red-400 hover:bg-red-500/30 transition"
                      >
                        Delete
                      </button>
                    </td>

                  </tr>
                ))}

              </tbody>

            </table>

          </div>
        </div>

        {/* Pagination */}
        <div className="flex items-center justify-center gap-4 mt-8">

          <button
            disabled={page === 1}
            onClick={() => setPage(page - 1)}
            className="px-4 py-2 rounded-lg bg-white/10 text-gray-300 disabled:opacity-40"
          >
            Prev
          </button>

          <span className="text-gray-300">
            Page <span className="text-white font-bold">{page}</span> of {totalPages}
          </span>

          <button
            disabled={page === totalPages}
            onClick={() => setPage(page + 1)}
            className="px-4 py-2 rounded-lg bg-white/10 text-gray-300 disabled:opacity-40"
          >
            Next
          </button>

        </div>

      </div>
    </DashboardLayout>
  );
}

export default History;