import type { ReactNode } from 'react';
import { Abbr } from '../Abbr';
import styles from './Benefits.module.css';

const benefits: Array<{ title: ReactNode; description: ReactNode }> = [
  {
    title: 'Запуск цифровых продуктов',
    description: (
      <>
        От идеи до <Abbr term="MVP" definition="минимально жизнеспособный продукт" /> и дальше
        — с фокусом на результат
      </>
    ),
  },
  {
    title: 'Системная архитектура',
    description: 'Решения, которые масштабируются и не требуют доработок',
  },
  {
    title: 'Автоматизация процессов',
    description: 'Убираю рутину и ручной труд там, где это даёт отдачу',
  },
  {
    title: (
      <>
        Роль <Abbr term="CTO" definition="технический директор" /> на старте
      </>
    ),
    description: 'Техническое лидерство без найма в штат',
  },
];

export function Benefits() {
  return (
    <section className={`section section-alt ${styles.benefits}`}>
      <div className="container">
        <h2 className={styles.title}>Чем полезен бизнесу</h2>
        <ul className={styles.grid}>
          {benefits.map((item, index) => (
            <li key={`benefit-${index}`} className={styles.card}>
              <h3 className={styles.cardTitle}>{item.title}</h3>
              <p className={styles.cardText}>{item.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
