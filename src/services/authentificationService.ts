import axios from 'axios';
import { apiRoutes } from '../services/apiRoutes';

interface IAuthTokenResponse {
  access_token: string;
}

/**
 * Fetches an authentication token based on provided username and password.
 * To hook this function to an API:
 * 1. Ensure that the API endpoint for authentication is correctly set in `apiRoutes.auth.token`.
 * 2. Ensure that the expected response shape matches `IAuthTokenResponse`.
 * 3. Adjust the request headers or body as necessary to match your API's requirements.
 *
 * @param pUsername - User's username.
 * @param pPassword - User's password.
 * @returns A promise that resolves to the authentication token or throws an error.
 */
export const getToken = async (pUsername: string, pPassword: string) => {
  try {
    const response = await axios.post<IAuthTokenResponse>(
      apiRoutes.auth.token,
      {
        headers: {
          Authorization: 'Basic ' + btoa(pUsername + ':' + pPassword),
          'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
        },
      },
    );

    if (response.data.access_token) {
      return response.data.access_token;
    } else {
      throw new Error('Token could not be generated');
    }
  } catch (error) {
    console.log(error);
    throw new Error('Authentication error');
  }
};
