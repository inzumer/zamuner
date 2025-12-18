'use client';

import { useTranslation } from 'react-i18next';
import { Icon, Navigate, RichText } from '@components';
import { SOCIAL_LINKS } from '@constants';

/** Styles */
import styles from './styles.module.css';

const Footer: React.FC = () => {
  const { t } = useTranslation();

  return (
    <footer id='footer' data-testid='footer' className={styles.footer}>
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
