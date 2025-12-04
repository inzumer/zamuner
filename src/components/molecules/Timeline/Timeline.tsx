'use client';

/** Resources */
import { RichText } from '@components';
import { useTranslation } from 'react-i18next';

/** Styles */
import styles from './styles.module.css';


export const Timeline: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className={styles.timeline_container}>
      <ul className={styles.timeline}>
        <li className={styles.timeline_item}>
          <div className={styles.timeline_node}></div>
          <div className={styles.timeline_content}>
            <RichText id='timeline-title' className={styles.timeline__title} variant='p2' text={t('history.before-1914.title')} bold />
            <RichText id='timeline-description' className={styles.timeline__subtitle} variant='p3' text={t('history.before-1914.description-one')} />
            <RichText id='timeline-description' className={styles.timeline__subtitle} variant='p3' text={t('history.before-1914.description-two')} />
            <RichText id='timeline-description' className={styles.timeline__subtitle} variant='p3' text={t('history.before-1914.description-three')} />
            <RichText id='timeline-description' className={styles.timeline__subtitle} variant='p3' text={t('history.before-1914.description-four')} />
            <RichText id='timeline-description' className={styles.timeline__subtitle} variant='p3' text={t('history.before-1914.description-five')} />
            <RichText id='timeline-description' className={styles.timeline__subtitle} variant='p3' text={t('history.before-1914.description-six')} />
          </div>
        </li>

        <li className={styles.timeline_item}>
          <div className={styles.timeline_node}></div>
          <div className={styles.timeline_content}>
            <RichText id='timeline-title' className={styles.timeline__title} variant='p2' text={t('history.1915-1918.title')} bold />
            <RichText id='timeline-description' className={styles.timeline__subtitle} variant='p3' text={t('history.1915-1918.description-one')} />
            <RichText id='timeline-description' className={styles.timeline__subtitle} variant='p3' text={t('history.1915-1918.description-two')} />
            <RichText id='timeline-description' className={styles.timeline__subtitle} variant='p3' text={t('history.1915-1918.description-three')} />
            <RichText id='timeline-description' className={styles.timeline__subtitle} variant='p3' text={t('history.1915-1918.description-four')} />
          </div>
        </li>

        <li className={styles.timeline_item}>
          <div className={styles.timeline_node}></div>
          <div className={styles.timeline_content}>
            <RichText id='timeline-title' className={styles.timeline__title} variant='p2' text={t('history.1924.title')} bold />
            <RichText id='timeline-description' className={styles.timeline__subtitle} variant='p3' text={t('history.1924.description-one')} />
            <RichText id='timeline-description' className={styles.timeline__subtitle} variant='p3' text={t('history.1924.description-two')} />
            <RichText id='timeline-description' className={styles.timeline__subtitle} variant='p3' text={t('history.1924.description-three')} />
            <RichText id='timeline-description' className={styles.timeline__subtitle} variant='p3' text={t('history.1924.description-four')} />
            <RichText id='timeline-description' className={styles.timeline__subtitle} variant='p3' text={t('history.1924.description-five')} />
          </div>
        </li>
      </ul>
    </div>
  );
}

Timeline.displayName = 'Timeline';
