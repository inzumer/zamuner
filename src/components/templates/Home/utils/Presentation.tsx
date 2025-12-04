/** Resources */
import { useTranslation } from 'react-i18next';
import { Image, LanguageSwitch, RichText } from '@components';

/** Styles */
import styles from '../styles.module.css';

export const Presentation: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section id='presentation' className={styles.presentation}>
      <div className={styles.presentation__container}>
        <Image src='IdLeoneZamuner' alt='Id Leone Zamuner' className={styles.presentation__container_image} />
        <div className={styles.presentation__container_text}>
          <RichText id='presentation-title' className={styles.presentation__title} variant='h1' text={t('presentation.title')} />
          <RichText id='presentation-subtitle' className={styles.presentation__subtitle} variant='s3' text={t('presentation.description')} />
        </div>
      </div>
      <div className={styles.presentation__float_buttons}>
        <LanguageSwitch />
      </div>
    </section>
  );
};

Presentation.displayName = 'Presentation';
