export const createAxiosConfig = (method, params) => ({
  method,
  baseURL: process.env.REACT_APP_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${process.env.REACT_APP_TOKEN}`,
  },
  params,
});
