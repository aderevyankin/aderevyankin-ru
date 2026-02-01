import styles from './Process.module.css';

const steps = [
  {
    number: '01',
    title: 'Разбор задачи',
    description: 'Понимаю бизнес-контекст, цели и ограничения',
  },
  {
    number: '02',
    title: 'Предложение решения',
    description: 'Формирую подход, оцениваю риски и ресурсы',
  },
  {
    number: '03',
    title: 'Формат участия',
    description: 'Определяем: подряд, партнёрство или консультации',
  },
  {
    number: '04',
    title: 'Реализация',
    description: 'Делаю сам или с\u00a0командой и держу коммуникацию прозрачной',
  },
  {
    number: '05',
    title: 'Поддержка и развитие',
    description: 'Остаюсь на\u00a0связи, помогаю масштабироваться',
  },
];

export function Process() {
  return (
    <section className={`section ${styles.process}`}>
      <div className="container">
        <h2 className={styles.title}>Как я работаю</h2>
        <ol className={styles.list}>
          {steps.map((step) => (
            <li key={step.number} className={styles.step}>
              <span className={styles.number}>{step.number}</span>
              <div>
                <h3 className={styles.stepTitle}>{step.title}</h3>
                <p className={styles.stepText}>{step.description}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
