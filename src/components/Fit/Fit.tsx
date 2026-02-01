import styles from './Fit.module.css';

const goodFit = [
  'Бизнес, где технология — инструмент для\u00a0роста',
  'Есть реальные клиенты и выручка',
  'Нужен результат, а не просто код',
  'Готовы к\u00a0партнёрству, а не подряду',
];

const badFit = [
  'Нужен разработчик «на\u00a0задачи»',
  'Нет бюджета на\u00a0качественную работу',
  'Только идея без\u00a0подтверждённого рынка',
  'Нужно «вчера» без\u00a0понимания задачи',
];

export function Fit() {
  return (
    <section className={`section ${styles.fit}`}>
      <div className="container">
        <h2 className={styles.title}>Для кого я</h2>
        <div className={styles.columns}>
          <div className={styles.column}>
            <h3 className={styles.columnTitle}>Подходит, если</h3>
            <ul className={styles.list}>
              {goodFit.map((item) => (
                <li key={item} className={styles.itemGood}>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className={styles.column}>
            <h3 className={styles.columnTitle}>Не подходит, если</h3>
            <ul className={styles.list}>
              {badFit.map((item) => (
                <li key={item} className={styles.itemBad}>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
