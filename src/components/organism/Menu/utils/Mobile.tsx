'use client';

import { useTranslation } from 'react-i18next';
import { useState, useEffect } from 'react';
import { Button, Icon, Navigate, RichText } from '@components';
import styles from '../styles.module.css';

const Mobile: React.FC = () => {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [isOpen]);

  return (
    <header id='header' data-testid='header' className={`${styles.menu}`}>
      <div className={styles.menu__mobile}>
        <Navigate id='menu-icon' href='/es' className={styles.menu__icon}>
          <Icon name='Logo' height={80} width={80} />
        </Navigate>

        <div className={styles.menu__container_buttons}>
          <Button id='menu-button-mobile' onClick={toggleMenu} className={styles.menu__mobile_button}>
            <Icon name={isOpen ? 'MenuClose' : 'MenuBurger'} height={28} width={28} />
          </Button>
        </div>
      </div>

      <nav className={isOpen ? styles.menu__content_open : styles.menu__content_close}>
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

Mobile.displayName = 'Mobile';

export default Mobile;