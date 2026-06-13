import toast from "react-hot-toast";

import {
  downloadCSV,
  downloadExcel,
  downloadPDF,
} from "../api/reportApi";

import DashboardLayout from "../components/DashboardLayout";

function Reports() {

  const saveFile = (response, filename) => {
    const url = window.URL.createObjectURL(
      new Blob([response.data])
    );

    const link = document.createElement("a");

    link.href = url;
    link.setAttribute("download", filename);

    document.body.appendChild(link);

    link.click();

    link.remove();
  };

  const handleCSV = async () => {
    try {
      const response = await downloadCSV();
      saveFile(response, "analysis_report.csv");
      toast.success("CSV Downloaded");
    } catch {
      toast.error("CSV Download Failed");
    }
  };

  const handleExcel = async () => {
    try {
      const response = await downloadExcel();
      saveFile(response, "analysis_report.xlsx");
      toast.success("Excel Downloaded");
    } catch {
      toast.error("Excel Download Failed");
    }
  };

  const handlePDF = async () => {
    try {
      const response = await downloadPDF();
      saveFile(response, "analysis_report.pdf");
      toast.success("PDF Downloaded");
    } catch {
      toast.error("PDF Download Failed");
    }
  };

  return (
    <DashboardLayout>
      <div className="bg-[#0B1220] min-h-screen text-white p-6">

        {/* Header */}
        <h1 className="text-3xl md:text-4xl font-bold mb-10">
          Reports Center
        </h1>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-8">

          {/* CSV */}
          <div className="p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl hover:scale-105 transition">

            <div className="text-green-400 text-4xl mb-4">📄</div>

            <h2 className="text-xl font-bold mb-2">
              CSV Report
            </h2>

            <p className="text-gray-400 mb-6 text-sm">
              Export your analysis data in CSV format for spreadsheets.
            </p>

            <button
              onClick={handleCSV}
              className="w-full px-6 py-3 rounded-xl font-medium
              bg-gradient-to-r from-green-500 to-emerald-600
              hover:scale-[1.02] transition"
            >
              Download CSV
            </button>

          </div>

          {/* Excel */}
          <div className="p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl hover:scale-105 transition">

            <div className="text-blue-400 text-4xl mb-4">📊</div>

            <h2 className="text-xl font-bold mb-2">
              Excel Report
            </h2>

            <p className="text-gray-400 mb-6 text-sm">
              Download structured analytics data in Excel format.
            </p>

            <button
              onClick={handleExcel}
              className="w-full px-6 py-3 rounded-xl font-medium
              bg-gradient-to-r from-blue-500 to-cyan-600
              hover:scale-[1.02] transition"
            >
              Download Excel
            </button>

          </div>

          {/* PDF */}
          <div className="p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl hover:scale-105 transition">

            <div className="text-red-400 text-4xl mb-4">📑</div>

            <h2 className="text-xl font-bold mb-2">
              PDF Report
            </h2>

            <p className="text-gray-400 mb-6 text-sm">
              Generate professional PDF reports for sharing.
            </p>

            <button
              onClick={handlePDF}
              className="w-full px-6 py-3 rounded-xl font-medium
              bg-gradient-to-r from-red-500 to-rose-600
              hover:scale-[1.02] transition"
            >
              Download PDF
            </button>

          </div>

        </div>

      </div>
    </DashboardLayout>
  );
}

export default Reports;