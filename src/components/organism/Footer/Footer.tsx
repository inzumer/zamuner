'use client';

import { useTranslation } from 'react-i18next';
import { Contact, Icon, Navigate, RichText } from '@components';
import { SOCIAL_LINKS } from '@constants';

/** Styles */
import styles from './styles.module.css';

const Footer: React.FC = () => {
  const { t } = useTranslation();

  return (
    <footer id='footer' data-testid='footer' className={styles.footer}>
      <div className={styles.footer__main}>
        <div className={styles.footer__comunity}>
          <RichText id='footer-comunity-title' className={styles.footer__title} variant='p1' text={t('footer.comunity-title')} />
          <RichText id='footer-comunity-description' className={styles.footer__subtitle} variant='s3' text={t('footer.comunity-description')} />
          <RichText id='footer-comunity-link' className={styles.footer__subtitle} variant='s3' text={t('footer.comunity-link')} />
          <Navigate id='footer-comunity-button' className={styles.footer__button} href='https://www.facebook.com/groups/138597262891448/' >
            <Icon name='Facebook' width={48} height={48} />
          </Navigate>
        </div>
        <div className={styles.footer__contact} id='contact'>
          <RichText id='contact-title' className={styles.footer__title} variant='p1' text={t('contact.title')} />
          <RichText id='contact-description' className={styles.footer__subtitle} variant='p3' text={t('contact.description')} />
          <Contact />
        </div>
      </div>
      <div className={styles.footer__social}>
        <Navigate id='link-github' href={SOCIAL_LINKS.GITHUB} >
          <Icon name='Github' height={48} width={48} />
        </Navigate>

        <Navigate id='link-linkedin' href={SOCIAL_LINKS.LINKEDIN} >
          <Icon name='LinkedIn' height={48} width={48} />
        </Navigate>
      </div>
      <div className={styles.footer__copyright}>
        <RichText id='footer-disclaimer' variant='s4' text={`© ${new Date().getFullYear()} ${t('footer.disclaimer')}`} className={styles.footer__text} />
      </div>
    </footer>
  );
};

Footer.displayName = 'Footer';

export default Footer;
