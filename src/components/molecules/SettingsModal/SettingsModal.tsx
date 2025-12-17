'use client';

import { Button, RichText, Switch } from '@components';
import { useCookiePreferences } from '@hooks';
import { useTranslation } from 'react-i18next';

/* Styles */
import styles from './styles.module.css';

interface SettingsModalProps {
    isVisible: boolean;
    onClose: () => void;
}

const SettingsModal: React.FC<SettingsModalProps> = ({ isVisible, onClose }) => {
    const { t } = useTranslation();
    const { preferences, updatePreference, saveAllPreferences } = useCookiePreferences();

    const handleSave = () => {
        saveAllPreferences(preferences);
        onClose();
    };

    const handleChange = (category: keyof typeof preferences, checked: boolean) => {
        updatePreference(category, checked);
    };

    if (!isVisible) {
        return null;
    }

    return (
        <div className={styles.modal_backdrop}>
            <div className={styles.modal_content}>
                <RichText
                    id="cookie-settings-modal-title"
                    text={t('cookie.settings-modal-title')}
                    variant="p2"
                    className={styles.modal_title}
                />

                <div className={styles.category}>
                    <div className={styles.category_header}>
                        <RichText
                            id="cookie-category-technical-title"
                            text={t('cookie.category-technical')}
                            variant="p2"
                            className={styles.category_title}
                        />
                        <RichText
                            id="cookie-category-technical-status"
                            text={t('cookie.category-technical-status')}
                            variant="p3"
                            className={styles.category_description__disclaimer}
                            bold
                        />
                    </div>
                    <RichText
                        id="cookie.category-technical-desc"
                        text={t('cookie.category-technical-desc')}
                        variant="p3"
                    />
                </div>

                <div className={styles.category}>
                    <div className={styles.category_header}>
                        <RichText
                            id="cookie-category-external-title"
                            text={t('cookie.category-external')}
                            variant="p2"
                            className={styles.category_title}
                        />
                        <Switch
                            checked={preferences.external}
                            onChange={(checked) => handleChange('external', checked)}
                        />
                    </div>
                    <RichText
                        id="cookie-category-external-desc"
                        text={t('cookie.category-external-desc')}
                        variant="p3"
                    />
                </div>

                <div className={styles.category}>
                    <div className={styles.category_header}>
                        <RichText
                            id="cookie-category-analytics-title"
                            text={t('cookie.category-analytics')}
                            variant="p2"
                            className={styles.category_title}
                        />
                        <Switch
                            checked={preferences.analytics}
                            onChange={(checked) => handleChange('analytics', checked)}
                        />
                    </div>
                    <RichText
                        id="cookie-category-analytics-desc"
                        text={t('cookie.category-analytics-desc')}
                        variant="p3"
                    />
                </div>

                <div className={styles.modal_actions}>
                    <Button
                        id="cookie-settings-modal-save-button"
                        onClick={handleSave}
                        className={styles.save_button}
                    >
                        <RichText id="cookie-settings-modal-save-text" text={t('cookie.save-preferences')} variant="s3" />
                    </Button>
                </div>
            </div>
        </div>
    );
};

SettingsModal.displayName = 'SettingsModal';

export default SettingsModal;
