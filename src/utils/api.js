const BASE_URL = 'http://localhost:5000/';

export const api = {
  async get(url, query) {
    const response = await fetch(`${BASE_URL}${url}`);
    const { data } = await response.json();

    return data;
  },
};
