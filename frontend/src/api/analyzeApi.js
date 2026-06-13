import api from "./axios";

export const analyzeText = async (text) => {

  const token =
    localStorage.getItem("access");

  const response = await api.post(
    "analyze/",
    {
      text,
    },
    {
      headers: {
        Authorization:
          `Bearer ${token}`,
      },
    }
  );

  return response.data;
};