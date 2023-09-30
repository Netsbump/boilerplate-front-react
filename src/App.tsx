import './styles/App.css';
import { RouterProvider } from 'react-router-dom';
import { router } from './routes/AppRoutes';
import { AuthentificationProvider } from './contexts/AuthentificationContext';
import { AuthorizationProvider } from './contexts/AuthorizationContext';
import { ThemeProviderWrapper } from './contexts/ThemeContext';
import { CssBaseline } from '@mui/material';

const App: React.FC = () => {
  return (
    <ThemeProviderWrapper>
      <CssBaseline />
      <AuthentificationProvider>
        <AuthorizationProvider>
          <RouterProvider router={router} />
        </AuthorizationProvider>
      </AuthentificationProvider>
    </ThemeProviderWrapper>
  );
};

export { App };
