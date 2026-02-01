import styles from './Contact.module.css';

export function Contact() {
  return (
    <section id="contact" className={`section ${styles.contact}`}>
      <div className="container">
        <h2 className={styles.title}>Обсудить задачу</h2>
        <p className={styles.intro}>
          Расскажите коротко о вашей ситуации — я свяжусь в течение рабочего
          дня
        </p>
        <form className={styles.form}>
          <div className={styles.field}>
            <label htmlFor="name" className={styles.label}>
              Как вас зовут
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className={styles.input}
              required
              autoComplete="name"
            />
          </div>
          <div className={styles.field}>
            <label htmlFor="contact" className={styles.label}>
              Как с вами связаться
            </label>
            <input
              type="text"
              id="contact"
              name="contact"
              className={styles.input}
              placeholder="Telegram, телефон или email"
              required
            />
          </div>
          <div className={styles.field}>
            <label htmlFor="message" className={styles.label}>
              О задаче
            </label>
            <textarea
              id="message"
              name="message"
              className={styles.textarea}
              rows={4}
              placeholder="Коротко опишите ситуацию и то, что хотите получить"
              required
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Отправить
          </button>
        </form>
      </div>
    </section>
  );
}