import styles from './Hero.module.css';

export function Hero() {
  return (
    <section className={styles.hero}>
      <div className="container">
        <h1 className={styles.title}>
          Технический партнёр
          <br />
          для бизнеса
        </h1>
        <p className={styles.subtitle}>
          Помогаю компаниям выстроить цифровую часть — от стратегии до
          работающего продукта
        </p>
        <a href="#contact" className="btn btn-primary">
          Обсудить задачу
        </a>
      </div>
    </section>
  );
}