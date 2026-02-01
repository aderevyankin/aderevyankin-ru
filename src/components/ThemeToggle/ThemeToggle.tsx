'use client';

import { useEffect, useState } from 'react';
import styles from './ThemeToggle.module.css';

type Theme = 'light' | 'dark' | 'system';

export function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>('system');

  useEffect(() => {
    const saved = localStorage.getItem('theme') as Theme | null;
    if (saved) {
      setTheme(saved);
      applyTheme(saved);
    }
  }, []);

  const applyTheme = (newTheme: Theme) => {
    const root = document.documentElement;
    if (newTheme === 'system') {
      root.removeAttribute('data-theme');
    } else {
      root.setAttribute('data-theme', newTheme);
    }
  };

  const toggleTheme = () => {
    const next: Theme = theme === 'light' ? 'dark' : theme === 'dark' ? 'system' : 'light';
    setTheme(next);
    applyTheme(next);
    localStorage.setItem('theme', next);
  };

  const label = theme === 'light' ? 'Светлая' : theme === 'dark' ? 'Тёмная' : 'Авто';

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className={styles.toggle}
      aria-label={`Тема: ${label}. Нажмите для переключения`}
    >
      <span className={styles.icon} aria-hidden="true">
        {theme === 'light' ? '☀️' : theme === 'dark' ? '🌙' : '⚙️'}
      </span>
      <span className={styles.label}>{label}</span>
    </button>
  );
}