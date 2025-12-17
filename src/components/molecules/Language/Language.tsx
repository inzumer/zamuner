'use client';

import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { RichText } from '@components';

/** Styles */
import styles from './styles.module.css';

type Languages = 'es' | 'en' | 'it';

const Language: React.FC = () => {
  const { i18n } = useTranslation();
  const languages: Languages[] = ['es', 'en', 'it'];
  const [selected, setSelected] = useState<Languages>('es');

  const handleSelect = (lang: Languages) => {
    setSelected(lang);
    i18n.changeLanguage(lang);
  };

  return (
    <div className={styles.switch__container} role='listbox' aria-label='Language selector'>
      {languages.map((item) => (
        <button
          key={item}
          role='option'
          aria-selected={selected === item}
          onClick={() => handleSelect(item)}
          className={`${styles.switch__button} ${selected === item && styles.switch__button__selected}`}
        >
          <RichText id={`language-${item}`} text={item.toUpperCase()} variant='s4' className={styles.switch__button_text} bold />
        </button>
      ))}
    </div>
  );
};

Language.displayName = 'Language';

export default Language;
