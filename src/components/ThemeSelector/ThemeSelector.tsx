import React, { useState } from 'react';
import {
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  SelectChangeEvent,
} from '@mui/material';
import { useTheme } from '../../contexts/ThemeContext';

const ThemeSelector: React.FC = () => {
  const toggleTheme = useTheme();
  const [theme, setTheme] = useState('light'); // initial value

  const handleThemeChange = (event: SelectChangeEvent) => {
    const newTheme = event.target.value;
    setTheme(newTheme);
    toggleTheme.setTheme(newTheme);
  };

  return (
    <FormControl fullWidth variant="outlined">
      <InputLabel id="theme-label">Theme</InputLabel>
      <Select
        labelId="theme-label"
        value={theme}
        onChange={handleThemeChange}
        label="Thème"
      >
        <MenuItem value="light">Light</MenuItem>
        <MenuItem value="dark">Dark</MenuItem>
        <MenuItem value="accessibility">Accessibility</MenuItem>
        <MenuItem value="dyslexic">Dyslexic</MenuItem>
      </Select>
    </FormControl>
  );
};

export { ThemeSelector };
