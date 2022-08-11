const API_BASE_URL = 'https://api.tvmaze.com/search/';
export const apiCAll = async queryString => {
  const res = await fetch(`${API_BASE_URL}${queryString}`);
  const resJson = await res.json();
  return resJson;
};
