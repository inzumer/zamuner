'use client';

import { Button, Input, RichText, Snackbar } from '@components';
import { useTranslation } from 'react-i18next';
import { useContactForm } from '@hooks';

/** Styles */
import styles from './styles.module.css';

const Contact = () => {
  const { t } = useTranslation();
  const { formData, status, handleSubmit, setFormData } = useContactForm();

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <Input
        type='email'
        id='from'
        value={formData.from}
        label={t('contact.email')}
        placeholder={t('contact.placeholder-email')}
        onChange={(value) => setFormData({ ...formData, from: value })}
        required
      />

      <Input
        type='text'
        id='subject'
        value={formData.subject}
        label={t('contact.affair')}
        placeholder={t('contact.placeholder-affair')}
        onChange={(value) => setFormData({ ...formData, subject: value })}
        required
      />

      <Input
        type='textarea'
        id='message'
        value={formData.message}
        label={t('contact.message')}
        placeholder={t('contact.placeholder-message')}
        onChange={(value) => setFormData({ ...formData, message: value })}
        required
        rows={4}
      />

      <Snackbar type='success' message={t('contact.success')} isActive={status === 'success'} />
      <Snackbar type='error' message={t('contact.error')} isActive={status === 'error'} />

      <Button id='button-form-email' type='submit' disabled={status === 'sending'} className={styles.form__button} >
        <RichText id='button-form-email-text' variant='p2' text={status === 'sending' ? t('contact.sending') : t('contact.send')} bold />
      </Button>
    </form>
  );
};

Contact.displayName = 'Contact';

export default Contact;
