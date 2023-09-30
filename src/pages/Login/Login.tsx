import { useState, useEffect } from 'react';
import { useAuth } from '../../contexts/AuthentificationContext';
import { useNavigate } from 'react-router-dom';
import {
  TextField,
  CssBaseline,
  Paper,
  Typography,
  CircularProgress,
} from '@mui/material';
import {
  StyledContent,
  StyledContainer,
  StyledForm,
  StyledButton,
  StyledFooter,
} from './Login.styles';

export const Login: React.FC = () => {
  const { login } = useAuth();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ username: '', password: '' });
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    setIsLoading(true);

    try {
      login(formData.username, formData.password);
      navigate('/');
    } catch (error) {
      setErrorMessage('Authentification error');
      console.error('Authentification error', error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    const { username, password } = formData;
    setIsButtonDisabled(!username || !password);
  }, [formData]);

  return (
    <StyledContent>
      <StyledContainer maxWidth="xs">
        <CssBaseline />
        <Paper
          elevation={3}
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            padding: '20px',
          }}
        >
          <div id="container-logo"></div>
          <Typography variant="h4">Connexion</Typography>
          {errorMessage && (
            <Typography color="error">{errorMessage}</Typography>
          )}
          <StyledForm onSubmit={handleSubmit}>
            <TextField
              name="username"
              variant="outlined"
              margin="normal"
              required
              fullWidth
              label="Username"
              autoFocus
              onChange={handleChange}
            />
            <TextField
              name="password"
              variant="outlined"
              margin="normal"
              required
              fullWidth
              label="Password"
              type="password"
              onChange={handleChange}
            />
            <StyledButton
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              isDisabled={isButtonDisabled}
              disabled={isButtonDisabled || isLoading}
            >
              {isLoading ? <CircularProgress size={24} /> : 'Se connecter'}
            </StyledButton>
          </StyledForm>
        </Paper>
        <StyledFooter>
          <Typography variant="body2" color="textSecondary" align="center">
            Application Version <span id="num-version">0.0.0</span>
          </Typography>
        </StyledFooter>
      </StyledContainer>
    </StyledContent>
  );
};
