/* Styles */
import styles from './styles.module.css';

interface SwitchProps {
    checked: boolean;
    onChange: (checked: boolean) => void;
    disabled?: boolean;
}

const Switch: React.FC<SwitchProps> = ({ checked, onChange, disabled = false }) => {
    const handleClick = () => {
        if (!disabled) {
            onChange(!checked);
        }
    };

    return (
        <label className={styles.switch} aria-checked={checked} aria-disabled={disabled}>
            <input
                type="checkbox"
                checked={checked}
                onChange={() => { }}
                disabled={disabled}
                className={styles.input}
            />

            <div
                className={`${styles.slider} ${checked ? styles.checked : ''} ${disabled ? styles.disabled : ''}`}
                onClick={handleClick}
            >
                <div className={styles.circle}></div>
            </div>
        </label>
    );
};

Switch.displayName = 'Switch';

export default Switch;
