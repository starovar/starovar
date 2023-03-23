import styles from './Navigation.module.css';
import { useTheme } from 'next-themes';
import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect, useRef } from 'react';

export default function Navigation() {
  const { theme, setTheme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target) &&
        event.target.id !== 'servicesButton'
      ) {
        setIsMenuOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [menuRef]);

  return (
  <div className={`${styles.navigation} ${theme === 'dark' ? styles.dark : styles.light}`}>
    <nav className={styles.navigationContainer}>
    <div className={styles.center}>
      <Link href="/" >
    <Image src={theme === 'dark' ? '/kotecdark.svg' : '/kotec.svg'} alt="Kotec Logo" className={`${styles.logo} ${theme === 'dark' ? styles.dark : styles.light}`} width={110} height={17} />
    </Link>
    </div>
    <div className={styles.navigationJustify}>
      <ul>
        <li>
          <Link href="/" className={`${styles.gettingStarted} ${theme === 'dark' ? styles.dark : styles.light}`}>Начало работы</Link>
        </li>
        <li>
          <Link id="servicesButton" href="" onClick={() => setIsMenuOpen(!isMenuOpen)} className={`${styles.services} ${theme === 'dark' ? styles.dark : styles.light}`}>
            Услуги
            <Image id="servicesButton"
                  src="/down.svg"
                  alt="Dropdown Arrow"
                  width={14}
                  height={14}
                  className={`${styles.dropdownIcon} ${styles.dropdownIcon} ${isMenuOpen ? styles.rotate : ''} ${theme === 'dark' ? styles.dark : styles.light}`}
                />
            </Link>
            {isMenuOpen && (
                <ul className={`${styles.submenu} ${theme === 'dark' ? styles.dark : styles.light}`} ref={menuRef}>
                  <li>
                    <Link href="/services/marketing">
                    <Image src="/marketing.svg" width={18} height={18} alt="Marketing Icon" className={`${styles.submenuIcon} ${theme === 'dark' ? styles.dark : styles.light}`} />
                      Маркетинг
                      <p className={styles.submenuDescription}>Краткое описание услуги</p>
                    </Link>
                  </li>
                  <li>
                    <Link href="/services/design">
                    <Image src="/design.svg" width={18} height={18} alt="Design Icon" className={`${styles.submenuIcon} ${theme === 'dark' ? styles.dark : styles.light}`} />
                      Дизайн
                      <p className={styles.submenuDescription}>Краткое описание услуги</p>
                    </Link>
                  </li>
                  <li>
                    <Link href="/services/web-development">
                    <Image src="/web-development.svg" width={18} height={18} alt="Web development Icon" className={`${styles.submenuIcon} ${theme === 'dark' ? styles.dark : styles.light}`} />
                      Веб-разработка
                      <p className={styles.submenuDescription}>Проектирование, веб-дизайн, оптимизация и размещение и др.</p>
                    </Link>
                  </li>
                </ul>
              )}
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

