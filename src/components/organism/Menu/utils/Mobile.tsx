'use client';

import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Button, Icon, Navigate, RichText } from '@components';

/** Styles */
import styles from '../styles.module.css';

const Mobile: React.FC = () => {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const toggleMenu = () => {
    if (isTransitioning) return;

    setIsTransitioning(true);
    setIsOpen(!isOpen);

    setTimeout(() => {
      setIsTransitioning(false);
    }, 300);
  };

  const actionButtons = (url: string) => {
    window.location.href = url;

    if (isOpen) {
      toggleMenu();
    }
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
        <Navigate id='menu-icon' href='/' className={styles.menu__icon}>
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
            <Button id='menu-history' onClick={() => actionButtons('/#history')}>
              <RichText id='menu-option-text-history' text={t('header.history')} variant='s2' className={styles.navbar__list_item_text} />
            </Button>
          </li>
          <li className={styles.navbar__list_item}>
            <Button id='menu-family-tree' onClick={() => actionButtons('/#family-tree')}>
              <RichText id='menu-option-text-family-tree' text={t('header.family-tree')} variant='s2' className={styles.navbar__list_item_text} />
            </Button>
          </li>
          <li className={styles.navbar__list_item}>
            <Button id='menu-returns' onClick={() => actionButtons('/#returns')}>
              <RichText id='menu-option-text-returns' text={t('header.returns')} variant='s2' className={styles.navbar__list_item_text} />
            </Button>
          </li>
          <li className={styles.navbar__list_item}>
            <Button id='menu-contact' onClick={() => actionButtons('/#contact')}>
              <RichText id='menu-option-text-contact' text={t('header.contact')} variant='s2' className={styles.navbar__list_item_text} />
            </Button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

Mobile.displayName = 'Mobile';

export default Mobile;
