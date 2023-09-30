const baseUrl = 'https://localhost:8443';
const identityServerUrl = 'https://localhost:8441';

export const apiRoutes = {
  common: {
    baseUrl,
    identityServerUrl,
  },
  api: {
    webAPI: `${baseUrl}/api/`,
    signalR: `${baseUrl}/signalr/`,
  },
  auth: {
    token: `${identityServerUrl}/connect/token`,
  },
};
