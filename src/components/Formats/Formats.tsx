import type { ReactNode } from 'react';
import { Abbr } from '../Abbr';
import styles from './Formats.module.css';

const formats: Array<{ title: string; description: ReactNode }> = [
  {
    title: 'Проектная работа',
    description: (
      <>
        Конкретная задача с понятным результатом. Подходит для{' '}
        <Abbr term="MVP" definition="минимально жизнеспособный продукт" />, интеграций,
        автоматизации.
      </>
    ),
  },
  {
    title: 'Долгосрочное участие',
    description:
      'Регулярная работа над продуктом. Роль технического директора или ведущего разработчика.',
  },
  {
    title: 'Партнёрство',
    description:
      'Участие в проекте с долей. Для стартапов и новых направлений, где важна вовлечённость.',
  },
];

export function Formats() {
  return (
    <section className={`section section-alt ${styles.formats}`}>
      <div className="container">
        <h2 className={styles.title}>Форматы сотрудничества</h2>
        <ul className={styles.list}>
          {formats.map((format, index) => (
            <li key={`format-${index}`} className={styles.card}>
              <h3 className={styles.cardTitle}>{format.title}</h3>
              <p className={styles.cardText}>{format.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
