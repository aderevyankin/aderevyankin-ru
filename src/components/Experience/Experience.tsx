import type {ReactNode} from 'react';
import {Abbr} from '../Abbr';
import styles from './Experience.module.css';

const experience: Array<{
    domain: ReactNode;
    role: ReactNode;
    result: ReactNode;
}> = [
    {
        domain: (
            <>
                Промышленность, госсектор и <Abbr term="BIM" definition="информационное моделирование зданий"/>
            </>
        ),
        role: (
            <>
                <Abbr term="CTO" definition="технический директор"/>, техлид
            </>
        ),
        result: 'Заказная разработка для\u00a0строительства, плагины для\u00a0CAD-систем, госконтракты',
    },
    {
        domain: (<><Abbr term="Финтех" definition="финансовые технологии"/> и платежи</>),
        role: 'Архитектор, разработчик',
        result: 'Платёжные системы, интеграции с\u00a0банками, процессинг',
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
                Запуск <Abbr term="MVP" definition="минимально жизнеспособный продукт"/>, масштабирование,
                автоматизация процессов
            </>
        ),
    },
];

export function Experience() {
    return (
        <section className={`section section-alt ${styles.experience}`}>
            <div className="container">
                <h2 className={styles.title}>Опыт и бэкграунд</h2>
                <ul className={styles.intro}>
                    <li className={styles.introItem}>
                        10+ лет в&nbsp;разработке: продуктовые компании, стартапы, партнёрство.
                    </li>
                    <li className={styles.introItem}>
                        Фокус на&nbsp;бизнес-результате, а не на&nbsp;технологиях ради технологий.
                    </li>
                    <li className={styles.introItem}>
                        Помогаю превращать идеи в&nbsp;устойчивые решения: архитектура, команда,
                        качество и сроки.
                    </li>
                    <li className={styles.introItem}>
                        Внедряю <Abbr term="AI" definition="искусственный интеллект"/> там, где это сокращает издержки и
                        ускоряет процессы.
                    </li>
                </ul>
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
