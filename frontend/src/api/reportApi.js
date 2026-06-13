import api from "./axios";

const getToken = () => ({
  headers: {
    Authorization: `Bearer ${localStorage.getItem("access")}`,
  },
  responseType: "blob",
});

export const downloadCSV = async () => {
  return await api.get(
    "export/csv/",
    getToken()
  );
};

export const downloadExcel = async () => {
  return await api.get(
    "export/excel/",
    getToken()
  );
};

export const downloadPDF = async () => {
  return await api.get(
    "export/pdf/",
    getToken()
  );
};