import { useEffect, useState } from 'react';

const ThemeToggle = () => {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    const saved = localStorage.getItem('theme');
    if (saved) {
      setIsDark(saved === 'dark');
      document.body.classList.toggle('light-mode', saved === 'light');
    }
  }, []);

  const toggleTheme = () => {
    const newMode = !isDark;
    setIsDark(newMode);
    document.body.classList.toggle('light-mode', !newMode);
    localStorage.setItem('theme', newMode ? 'dark' : 'light');
  };

  return (
    <button 
      onClick={toggleTheme}
      className="theme-toggle"
      style={{
        padding: '12px',
        fontSize: '1.4rem',
        background: 'transparent',
        border: 'none',
        cursor: 'pointer'
      }}
    >
      {isDark ? '☀️' : '🌙'}
    </button>
  );
};

export default ThemeToggle;