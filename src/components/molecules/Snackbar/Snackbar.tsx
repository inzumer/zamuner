import { RichText } from '@components';

/** Styles */
import styles from './styles.module.css';

type FormStatus = 'idle' | 'sending' | 'success' | 'error';

interface SnackbarProps {
  type: FormStatus;
  message: string;
  isActive: boolean;
}

const Snackbar: React.FC<SnackbarProps> = ({ type, message, isActive }) => (
  <div className={`${styles.form__message_container} ${isActive && styles.form__message_active}`}>
    <RichText
      id={`contact-${type}-message`}
      variant='s3'
      text={message}
      className={`${styles.form__message} ${isActive && styles.form__message_active}`}
    />
  </div>
);

Snackbar.displayName = 'Snackbar';

export default Snackbar;
