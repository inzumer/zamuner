/** Styles */
import styles from './styles.module.css';

interface ButtonProps {
  id: string;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  onClick?: () => void;
  children: React.ReactNode;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({ id, type = 'button', disabled = false, onClick, children, className = '' }) => (
  <button id={id} data-testid={id} type={type} className={`${styles.button} ${className}`} disabled={disabled} onClick={onClick}>
    {children}
  </button>
);

Button.displayName = 'Button';

export default Button;
