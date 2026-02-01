import type { ReactNode } from 'react';
import { Abbr } from '../Abbr';
import styles from './Benefits.module.css';

const benefits: Array<{ title: ReactNode; description: ReactNode }> = [
  {
    title: 'Запуск цифровых продуктов',
    description: (
      <>
        От&nbsp;идеи до&nbsp;
        <Abbr term="MVP" definition="минимально жизнеспособный продукт" /> и&nbsp;дальше — с&nbsp;фокусом
        на&nbsp;результат
      </>
    ),
  },
  {
    title: 'Системная архитектура',
    description: 'Решения, которые масштабируются и не требуют постоянных доработок',
  },
  {
    title: 'Автоматизация процессов',
    description: 'Убираю рутину и ручной труд там, где это даёт отдачу',
  },
  {
    title: (
      <>
        Роль <Abbr term="CTO" definition="технический директор" /> на&nbsp;старте
      </>
    ),
    description: 'Техническое лидерство без\u00a0найма в\u00a0штат',
  },
  {
    title: 'Формирование команды',
    description: 'Привлекаю проверенных специалистов: дизайнеров, разработчиков, тестировщиков',
  },
  {
    title: 'Перевод на человеческий',
    description: 'Доношу суть решений так, чтобы было понятно, зачем это нужно бизнесу',
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
