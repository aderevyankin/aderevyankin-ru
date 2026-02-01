import styles from './Fit.module.css';

const goodFit = [
  'Бизнес, где технология — инструмент для роста',
  'Есть реальные клиенты и выручка',
  'Нужен результат, а не просто код',
  'Готовы к партнёрству, а не подряду',
];

const badFit = [
  'Нужен разработчик «на задачи»',
  'Нет бюджета на качественную работу',
  'Только идея без подтверждённого рынка',
  'Нужно «вчера» без понимания задачи',
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
