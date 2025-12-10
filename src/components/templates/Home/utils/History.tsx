'use client';

import { useTranslation } from 'react-i18next';
import { Map, RichText, Timeline } from '@components';

/** Styles */
import styles from '../styles.module.css';

const History: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section id='history' className={styles.history}>
      <div className={styles.history__container}>
        <RichText id='history-title' className={styles.history__title} variant='h2' text={t('history.title')} />
        <div className={styles.history__container_text}>
          <RichText id='history-subtitle' className={styles.history__subtitle} variant='h3' text={t('history.title-one')} />
          <RichText id='history-description-one' className={styles.history__subtitle} variant='p3' text={t('history.description-one')} />
          <RichText id='history-description-two' className={styles.history__subtitle} variant='p3' text={t('history.description-two')} />
        </div>
        <div className={styles.history__container_text}>
          <RichText id='history-subtitle' className={styles.history__subtitle} variant='h3' text={t('history.location-title')} />
          <RichText id='history-description-two' className={styles.history__subtitle} variant='p3' text={t('history.location-description')} />
          <Map />
        </div>
        <div className={styles.history__container_text}>
          <RichText id='timeline-title' className={styles.timeline__title} variant='h3' text={t('history.timeline-title')} />
          <RichText id='timeline-description' className={styles.timeline__subtitle} variant='p3' text={t('history.timeline-description')} />
        </div>
        <Timeline />
      </div>
    </section>
  );
};

History.displayName = 'History';

export default History;
