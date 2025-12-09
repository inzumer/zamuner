'use client';

import { useTranslation } from 'react-i18next';
import { Contact as ContactForm, RichText } from '@components';

/** Styles */
import styles from '../styles.module.css';

const Contact: React.FC = () => {
    const { t } = useTranslation();

    return (
        <section id='contact' className={styles.contact}>
            <div className={styles.contact__container}>
                <div className={styles.contact__container_text}>
                    <RichText id='contact-title' className={styles.contact__title} variant='h2' text={t('contact.title')} />
                    <RichText id='contact-description' className={styles.contact__subtitle} variant='p3' text={t('contact.description')} />
                    <ContactForm />
                </div>
            </div>
        </section>
    );
};

Contact.displayName = 'Contact';

export default Contact;
