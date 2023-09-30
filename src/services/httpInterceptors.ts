import axios from 'axios';
import { apiRoutes } from './apiRoutes';

/**
 * Attaches an authentication token to the headers of every outgoing HTTP request to the WebApi.
 *
 * This function adds an interceptor to all outgoing HTTP requests aimed at the WebApi,
 * inserting the authentication token into the headers. This automates the addition of the token,
 * instead of doing it manually for each request.
 *
 * @param token - The authentication token to add to the HTTP headers.
 */
const attachTokenToRequest = (token: string | null): void => {
  axios.interceptors.request.use(
    (config) => {
      if (token && config.url?.startsWith(apiRoutes.api.webAPI)) {
        config.headers.Authorization = `Bearer ${token}`;
      }
      return config;
    },
    (error) => {
      return Promise.reject(error);
    },
  );
};

export { attachTokenToRequest };
