import type { ReactNode } from 'react';
import { clsx } from '@/lib';
import { Abbr } from '../Abbr';
import styles from './Formats.module.css';

const formats: Array<{ title: string; description: ReactNode }> = [
  {
    title: 'Проектная работа',
    description: (
      <>
        Конкретная задача с&nbsp;понятным результатом. Подходит для&nbsp;
        <Abbr term="MVP" definition="минимально жизнеспособный продукт" />, интеграций,
        автоматизации.
      </>
    ),
  },
  {
    title: 'Долгосрочное участие',
    description:
      'Регулярная работа над\u00a0продуктом. Роль технического директора или ведущего разработчика.',
  },
  {
    title: 'Партнёрство',
    description:
      'Участие в\u00a0проекте с\u00a0долей. Для стартапов и новых направлений, где важна вовлечённость.',
  },
];

export function Formats() {
  return (
    <section className={clsx('section', 'section-alt', styles.formats)}>
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
