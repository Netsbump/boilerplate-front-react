import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthentificationContext';

interface RedirectIfAuthenticatedRouteProps {
  children: React.ReactNode;
}

/**
 * A route wrapper that redirects users to the homepage if they are already authenticated.
 * Essentially used to prevent authenticated users from seeing pages they shouldn't,
 * like the login or register page.
 */
export const RedirectIfAuthenticatedRoute: React.FC<
  RedirectIfAuthenticatedRouteProps
> = ({ children }) => {
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated) {
      navigate('/');
    }
  }, [isAuthenticated, navigate]);

  return <>{children}</>;
};
