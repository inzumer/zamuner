import { RichText } from '@components';

/** Styles */
import styles from './styles.module.css';

type InputTypes = 'text' | 'email' | 'textarea';

interface InputProps {
  id: string;
  type: InputTypes;
  value: string;
  label: string;
  placeholder: string;
  onChange: (value: string) => void;
  required?: boolean;
  rows?: number;
}

const Input: React.FC<InputProps> = ({ id, type, value, label, placeholder, onChange, required = false, rows = 4 }) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    onChange(e.target.value);
  };

  return (
    <div className={`${styles.form__container} ${type === 'textarea' && styles.form__container_textarea}`}>
      <label htmlFor={id}>
        <RichText id={`${id}-label`} variant="s3" text={label} />
      </label>

      {type === 'textarea' ? (
        <textarea
          id={id}
          value={value}
          placeholder={placeholder}
          onChange={handleChange}
          className={`${styles.form__input} ${styles.form__textarea}`}
          required={required}
          rows={rows}
        />
      ) : (
        <input
          type={type}
          id={id}
          value={value}
          placeholder={placeholder}
          onChange={handleChange}
          className={styles.form__input}
          required={required}
        />
      )}
    </div>
  );
};

Input.displayName = 'Input';

export default Input;
