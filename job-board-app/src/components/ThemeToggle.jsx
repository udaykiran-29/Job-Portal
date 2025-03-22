import React from 'react';
import useTheme from '../hooks/useTheme';
import '../styles/globals.css';

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button onClick={toggleTheme} className="theme-toggle">
      {theme === 'light' ? '🌙' : '☀️'}
    </button>
  );
};

export default ThemeToggle;