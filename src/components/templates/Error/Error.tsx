'use client';

import { useTranslation } from 'react-i18next';
import { Navigate, RichText } from '@components';

/** Styles */
import styles from './styles.module.css';

const Error = () => {
  const { t } = useTranslation();

  return (
    <section id='error' className={styles.error}>
      <div className={styles.error__container}>
        <RichText id='error-title' className={styles.error__title} variant='h1' text={t('error.message')} />
      </div>
      <Navigate href='/' id='error-navigate' className={styles.error_navigate}>
        <RichText id='error-navigate-text' variant='p2' text={t('error.button')} />
      </Navigate>
    </section>
  );
};

Error.displayName = 'Error';

export default Error;
