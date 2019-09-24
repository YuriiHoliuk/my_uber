const BASE_URL = 'https://mate-uber-eats-api.herokuapp.com/api/v1/';

export const api = {
  async get(url, query) {
    const response = await fetch(`${BASE_URL}${url}`);

    if (!response.ok || response.status >= 400) {
      throw new Error('Fetch error');
    }

    const { data } = await response.json();

    return data;
  },
};
