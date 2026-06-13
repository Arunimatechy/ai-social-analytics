import api from "./axios";

export const getAnalyticsSummary = async () => {

  const token =
    localStorage.getItem("access");

  const response = await api.get(
    "analytics-summary/",
    {
      headers: {
        Authorization:
          `Bearer ${token}`,
      },
    }
  );

  return response.data;
};