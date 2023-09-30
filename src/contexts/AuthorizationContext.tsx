/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, ReactNode } from 'react';

interface AuthorizationContextType {
  hasPermission: (routeName: string) => boolean;
}

const AuthorizationContext = createContext<
  AuthorizationContextType | undefined
>(undefined);

interface AuthorizationProviderProps {
  children: ReactNode;
}

// AuthorizationProvider is a React.FC functional component.
// It accepts "children" as props, which represent the child components that this Provider will wrap.
const AuthorizationProvider: React.FC<AuthorizationProviderProps> = ({
  children,
}) => {
  // For this example, I'm assuming that permissions are stored in an array.
  // In a real-world application, this would likely come from an API call where we fetch the user's navigation permissions after authentication.
  const userPermissions = ['PageOne', 'PageTwo', 'PageThree'];

  // hasPermission is a function that takes a route name (routeName) as a parameter
  // and returns a boolean indicating whether the user has permission to access that route.
  // It uses the "includes" method to check if the routeName is present in the userPermissions array.
  const hasPermission = (routeName: string): boolean => {
    return userPermissions.includes(routeName);
  };
  return (
    <AuthorizationContext.Provider value={{ hasPermission }}>
      {children}
    </AuthorizationContext.Provider>
  );
};

const useAuthorization = (): AuthorizationContextType => {
  const context = useContext(AuthorizationContext);
  if (!context) {
    throw new Error(
      'useAuthorization must be used within an AuthorizationProvider',
    );
  }
  return context;
};

export { AuthorizationProvider, useAuthorization };
