import { clsx } from '@/lib';
import styles from './Hero.module.css';

export function Hero() {
  return (
    <section className={styles.hero}>
      <div className={clsx('container', styles.container)}>
        <div className={styles.content}>
          <h1 className={styles.title}>
            Технический партнёр
            <br />
            для бизнеса
          </h1>
          <p className={styles.subtitle}>
            Помогаю компаниям выстроить цифровую часть — от&nbsp;стратегии до&nbsp;работающего
            продукта
          </p>
          <a href="#contact" className="btn btn-primary">
            Обсудить задачу
          </a>
        </div>
        <div className={styles.orbits} aria-hidden="true">
          <div className={styles.orbit} />
          <div className={styles.orbit} />
          <div className={styles.orbit} />
          <div className={styles.core} />
        </div>
      </div>
    </section>
  );
}
