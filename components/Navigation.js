import styles from './Navigation.module.css';
import { useTheme } from 'next-themes';
import Link from 'next/link';
import Image from 'next/image';

export default function Navigation() {
  const { theme, setTheme } = useTheme();
  return (
  <div className={`${styles.navigation} ${theme === 'dark' ? styles.dark : styles.light}`}>
    <nav className={styles.navigationContainer}>
    <div className={styles.center}>
      <Link href="/" >
    <Image src="/kotec.svg" alt="Kotec Logo" className={styles.logo} width={120} height={15} />
    </Link>
    </div>
    <div className={styles.navigationJustify}>
      <ul>
        <li>
          <Link href="/" className={styles.gettingStarted}>Начало работы</Link>
        </li>
        <li>
          <Link href="/services">Услуги</Link>
        </li>
        <li>
          <Link href="/works">Примеры работ</Link>
        </li>
        <li>
          <Link href="/about">О нас</Link>
        </li>
        <li>
          <Link href="/contacts">Контакты</Link>
        </li>
      </ul>
      </div>
      <div className={styles.toggleJustify}>
      <Image
        src={theme === 'dark' ? '/lightmode.svg' : '/darkmode.svg'}
        alt={theme === 'dark' ? 'Light Mode' : 'Dark Mode'}
        width={20}
        height={20}
        onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
        className={theme === 'dark' ? 'light-mode-icon' : 'dark-mode-icon'}
        style={{ cursor: 'pointer' }}
      />
      </div>
    </nav>
  </div>
  );
}

