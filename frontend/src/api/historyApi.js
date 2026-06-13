import api from "./axios";

const getToken = () => ({
  headers: {
    Authorization: `Bearer ${localStorage.getItem("access")}`,
  },
});

export const getHistory = async (
  page = 1,
  search = "",
  sentiment = ""
) => {

  const response = await api.get(
    `history/?page=${page}&search=${search}&sentiment=${sentiment}`,
    getToken()
  );

  return response.data;
};

export const deleteHistory = async (id) => {

  const response = await api.delete(
    `history/${id}/delete/`,
    getToken()
  );

  return response.data;
};