'use client';

import { useTranslation } from 'react-i18next';
import { Contact as ContactForm, Icon,  Navigate, RichText } from '@components';

/** Styles */
import styles from '../styles.module.css';

const Contact: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section id='contact' className={styles.contact}>
      <div className={styles.contact__container}>
        <div className={styles.contact__container_text} id='contact'>
          <RichText id='contact-title' className={styles.contact__title} variant='p1' text={t('contact.title')} />
          <RichText id='contact-description' className={styles.contact__subtitle} variant='p3' text={t('contact.description')} />
          <ContactForm />
        </div>
        <div className={styles.contact__container_text}>
          <RichText id='contact-comunity-title' className={styles.contact__title} variant='p1' text={t('contact.comunity-title')} />
          <RichText id='contact-comunity-description' className={styles.contact__subtitle} variant='s3' text={t('contact.comunity-description')} />
          <RichText id='contact-comunity-link' className={styles.contact__subtitle} variant='s3' text={t('contact.comunity-link')} />
          <Navigate id='contact-comunity-button' className={styles.contact__button} href='https://www.facebook.com/groups/138597262891448/' >
            <Icon name='Facebook' width={48} height={48} />
          </Navigate>
        </div>
      </div>
    </section>
  );
};

Contact.displayName = 'Contact';

export default Contact;
