/* eslint-disable react-refresh/only-export-components */
import { createContext, useState, ReactNode, useContext } from 'react';
import { attachTokenToRequest } from '../services/httpInterceptors';
//import { getToken } from '../services/authentificationService';

// Defining the type for the props of the authentication context.
interface AuthentificationContextType {
  isAuthenticated: boolean;
  login: (username: string, password: string) => void;
  logout: () => void;
}

// Creating the authentication context with an initial value of undefined.
const AuthentificationContext = createContext<
  AuthentificationContextType | undefined
>(undefined);

interface AuthentificationProviderProps {
  children: ReactNode;
}

// Defining the Provider component for the authentication context.
const AuthentificationProvider: React.FC<AuthentificationProviderProps> = ({
  children,
}) => {
  const [isAuthenticated, setIsAuthenticated] = useState(
    () => !!localStorage.getItem('token'),
  );

  const login = (username: string, password: string) => {
    try {
      // Generating a fake token for demonstration purposes.
      // NOTE: In a real-world scenario, replace this with a call to getToken to fetch the actual authentication token.
      const fakeToken = `fakeToken-${username}-${password}`;

      localStorage.setItem('token', fakeToken);
      attachTokenToRequest(fakeToken);
      setIsAuthenticated(true);
    } catch (error) {
      console.error('Error during authentication:', error);
      setIsAuthenticated(false);
    }
  };

  const logout = (): void => {
    localStorage.removeItem('token');
    setIsAuthenticated(false);
  };

  return (
    // Setting up the Provider to make the context data available for child components.
    <AuthentificationContext.Provider
      value={{ isAuthenticated, logout, login }}
    >
      {children}
    </AuthentificationContext.Provider>
  );
};

// Custom hook to use the authentication context.
const useAuth = (): AuthentificationContextType => {
  const context = useContext(AuthentificationContext);
  if (!context) {
    // If useAuth is used outside of the Provider, throw an error.
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export { AuthentificationProvider, useAuth };
