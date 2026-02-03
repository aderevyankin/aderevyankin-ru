'use client';

import { clsx } from '@/lib';
import styles from './Contact.module.css';
import { useContactForm } from './useContactForm';

export function Contact() {
  const { status, errorMessage, handleSubmit, reset, isLoading, isSuccess } = useContactForm();

  if (isSuccess) {
    return (
      <section id="contact" className={clsx('section', styles.contact)}>
        <div className="container">
          <h2 className={styles.title}>Обсудить задачу</h2>
          <div className={styles.success} role="status" aria-live="polite">
            <p className={styles.successText}>Сообщение отправлено.</p>
            <p className={styles.successSubtext}>Свяжусь с вами в течение рабочего дня.</p>
            <button type="button" className="btn btn-secondary" onClick={reset}>
              Отправить ещё
            </button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className={clsx('section', styles.contact)}>
      <div className="container">
        <h2 className={styles.title}>Обсудить задачу</h2>
        <p className={styles.intro}>
          Расскажите коротко о&nbsp;вашей ситуации — я свяжусь с&nbsp;вами в&nbsp;течение рабочего
          дня
        </p>
        <form className={styles.form} onSubmit={handleSubmit} aria-busy={isLoading}>
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
              disabled={isLoading}
            />
          </div>
          <div className={styles.field}>
            <label htmlFor="contact" className={styles.label}>
              Как с&nbsp;вами связаться
            </label>
            <input
              type="text"
              id="contact"
              name="contact"
              className={styles.input}
              placeholder="Telegram, телефон или email"
              required
              disabled={isLoading}
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
              disabled={isLoading}
            />
          </div>
          {status === 'error' && (
            <p className={styles.error} role="alert">
              {errorMessage}
            </p>
          )}
          <button type="submit" className="btn btn-primary" disabled={isLoading}>
            {isLoading ? 'Отправка...' : 'Отправить'}
          </button>
        </form>
      </div>
    </section>
  );
}
