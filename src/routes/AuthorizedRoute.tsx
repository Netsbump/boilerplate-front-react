import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuthorization } from '../contexts/AuthorizationContext';

interface AuthorizedRouteProps {
  routeName: string;
  children: React.ReactNode;
}

export const AuthorizedRoute: React.FC<AuthorizedRouteProps> = ({
  routeName,
  children,
}): React.ReactNode => {
  const { hasPermission } = useAuthorization();
  const navigate = useNavigate();
  const isPermitted = hasPermission(routeName);

  useEffect(() => {
    if (!isPermitted) {
      navigate('/unauthorized');
    }
  }, [isPermitted, navigate]);

  return <>{isPermitted && children}</>;
};
