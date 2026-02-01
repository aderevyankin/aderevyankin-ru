import type {ReactNode} from 'react';
import {Abbr} from '../Abbr';
import styles from './Experience.module.css';

const experience: Array<{
    domain: ReactNode;
    role: ReactNode;
    result: ReactNode;
}> = [
    {
        domain: 'Строительство и девелопмент',
        role: (
            <>
                <Abbr term="CTO" definition="технический директор"/>, техлид
            </>
        ),
        result: 'Цифровизация процессов, внутренние продукты',
    },
    {
        domain: 'Финтех и платежи',
        role: 'Архитектор, разработчик',
        result: 'Платёжные системы, интеграции с банками',
    },
    {
        domain: (
            <>
                <Abbr term="B2B" definition="бизнес для бизнеса"/>-сервисы
            </>
        ),
        role: 'Технический партнёр',
        result: (
            <>
                <Abbr term="MVP" definition="минимально жизнеспособный продукт"/>, масштабирование,
                автоматизация
            </>
        ),
    },
];

export function Experience() {
    return (
        <section className={`section section-alt ${styles.experience}`}>
            <div className="container">
                <h2 className={styles.title}>Опыт и бэкграунд</h2>
                <p className={styles.intro}>
                    12+ лет в разработке. Работал в продуктовых компаниях, стартапах и
                    как независимый партнёр. Фокус — на бизнес-результате, не на
                    технологиях ради технологий.<br/>
                    Помогаю превращать идеи в устойчивые решения: задаю
                    архитектуру, выстраиваю работу команды, слежу за качеством и сроками.
                </p>
                <ul className={styles.list}>
                    {experience.map((item, index) => (
                        <li key={`experience-${index}`} className={styles.item}>
                            <h3 className={styles.domain}>{item.domain}</h3>
                            <p className={styles.role}>{item.role}</p>
                            <p className={styles.result}>{item.result}</p>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
}
