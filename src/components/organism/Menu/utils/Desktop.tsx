'use client';

import { useTranslation } from 'react-i18next';
import { Icon, Navigate, RichText } from '@components';

/** Styles */
import styles from '../styles.module.css';

const Desktop: React.FC = () => {
  const { t } = useTranslation();

  return (
    <header id='header' data-testid='header' className={styles.menu}>
      <nav className={styles.navbar}>
        <ul className={styles.navbar__list}>
          <li className={styles.navbar__list_item}>
            <Navigate id='menu-history' href='/#history'>
              <RichText id='menu-option-text-history' text={t('header.history')} variant='s2' className={styles.navbar__list_item_text} />
            </Navigate>
          </li>
          <li className={styles.navbar__list_item}>
            <Navigate id='menu-returns' href='/returns'>
              <RichText id='menu-option-text-returns' text={t('header.returns')} variant='s2' className={styles.navbar__list_item_text} />
            </Navigate>
          </li>
          <li>
            <Navigate id='menu-icon' href='/'>
              <Icon name='Logo' height={120} width={120} />
            </Navigate>
          </li>
          <li className={styles.navbar__list_item}>
            <Navigate id='menu-contact' href='/#contact'>
              <RichText id='menu-option-text-contact' text={t('header.contact')} variant='s2' className={styles.navbar__list_item_text} />
            </Navigate>
          </li>
          <li className={styles.navbar__list_item}>
            <Navigate id='menu-family-tree' href='/family-tree'>
              <RichText id='menu-option-text-family-tree' text={t('header.family-tree')} variant='s2' className={styles.navbar__list_item_text} />
            </Navigate>
          </li>
        </ul>
      </nav>
    </header>
  );
};

Desktop.displayName = 'Desktop';

export default Desktop;
