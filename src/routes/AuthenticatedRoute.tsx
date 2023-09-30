import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthentificationContext';

interface AuthenticatedRouteProps {
  children?: React.ReactNode;
}

export const AuthenticatedRoute: React.FC<AuthenticatedRouteProps> = ({
  children,
}): React.ReactNode => {
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuthenticated) {
      navigate('/login');
    }
  }, [isAuthenticated, navigate]);

  return <>{isAuthenticated && children}</>;
};
