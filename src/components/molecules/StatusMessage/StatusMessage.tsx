/** Resources */
import { RichText } from '@components';

/** Styles */
import styles from './styles.module.css';

type FormStatus = 'idle' | 'sending' | 'success' | 'error';

interface StatusMessageProps {
  type: FormStatus;
  message: string;
  isActive: boolean;
}

const StatusMessage: React.FC<StatusMessageProps> = ({ type, message, isActive }) => (
  <div className={`${styles.form__message_container} ${isActive && styles.form__message_active}`}>
    <RichText
      id={`contact-${type}-message`}
      variant='s3'
      text={message}
      className={`${styles.form__message} ${isActive && styles.form__message_active}`}
    />
  </div>
); 

StatusMessage.displayName = 'StatusMessage';

export default StatusMessage;
