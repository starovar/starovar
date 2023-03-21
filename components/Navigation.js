import styles from './Navigation.module.css';
import { useTheme } from 'next-themes';
import Link from 'next/link';

export default function Navigation() {
  const { theme, setTheme } = useTheme();
  return (
  <div className={`${styles.navigation} ${theme === 'dark' ? styles.dark : styles.light}`}>
    <nav className={styles.navigationContainer}>
    <div className={styles.center}>
      <Link href="/" >
    <img src="/kotec.svg" alt="Kotec Logo" className={styles.logo} />
    </Link>
    </div>
      <ul>
        <li>
          <a href="/">Начало работы</a>
        </li>
        <li>
          <a href="/services">Услуги</a>
        </li>
        <li>
          <a href="/works">Примеры работ</a>
        </li>
        <li>
          <a href="/about">О нас</a>
        </li>
        <li>
          <a href="/contacts">Контакты</a>
        </li>
      </ul>
      <img
        src={theme === 'dark' ? '/lightmode.svg' : '/darkmode.svg'}
        alt={theme === 'dark' ? 'Light Mode' : 'Dark Mode'}
        width="24"
        height="24"
        onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
        className={theme === 'dark' ? 'light-mode-icon' : 'dark-mode-icon'}
        style={{ cursor: 'pointer' }}
      />
    </nav>
  </div>
  );
}

