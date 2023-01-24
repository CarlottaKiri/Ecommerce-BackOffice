const BASE_URL = "https://api.escuelajs.co/api/v1/";

export const GET = async (info, id = "") => {
  const res = await fetch(BASE_URL + info + id);
  return await res.json();
};
