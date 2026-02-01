import styles from './Footer.module.css';

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className="container">
        <p className={styles.text}>© {year} Андрей Деревянкин</p>
      </div>
    </footer>
  );
}