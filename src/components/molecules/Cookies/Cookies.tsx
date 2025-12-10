'use client';

import { useState, useEffect, useCallback } from 'react';
import { Button, RichText } from '@components';
import { useTranslation } from 'react-i18next';

/* Styles */
import styles from './styles.module.css';

interface CookiesProps {
    onAccept?: () => void;
    onCustomize?: () => void;
}

const Cookies: React.FC<CookiesProps> = ({ onAccept, onCustomize }) => {
    const { t } = useTranslation();

    const getConsentStatus = useCallback(() => {
        if (typeof window !== 'undefined') {
            return localStorage.getItem('cookies-consent');
        }

        return null;
    }, []);

    const [isVisible, setIsVisible] = useState(() => {
        const consent = getConsentStatus();
        return !consent;
    });

    useEffect(() => {
        const consent = getConsentStatus();

        if (consent === 'accepted' && onAccept) {
            onAccept();
        }
    }, [onAccept, getConsentStatus]);

    if (!isVisible) {
        return null;
    };

    const handleAcceptAll = () => {
        localStorage.setItem('cookies-consent', 'accepted');
        localStorage.setItem('cookies-categories', JSON.stringify({ analytics: true, external: true }));
        setIsVisible(false);

        if (onAccept) {
            onAccept();
        }
    };

    const handleRejectAll = () => {
        localStorage.setItem('cookies-consent', 'rejected');
        localStorage.setItem('cookies-categories', JSON.stringify({ analytics: false, external: false }));
        setIsVisible(false);
    };

    const handleCustomize = () => {
        if (onCustomize) {
            onCustomize();
        } else {
            console.warn('No handler was provided to set cookies.');
            setIsVisible(false);
        }
    };

    return (
        <div id="cookies" className={styles.cookies}>
            <div className={styles.content}>
                <RichText
                    id="cookie-title-text"
                    text={t('cookie.title')}
                    variant="p1"
                    className={styles.title}
                />
                <RichText
                    id="cookie-description-text"
                    text={t('cookie.description')}
                    variant="p3"
                    className={styles.description}
                />
            </div>

            <div className={styles.buttons}>
                <Button
                    id="cookie-accept-all-button"
                    className={`${styles.cookie_button} ${styles.accept_button}`}
                    onClick={handleAcceptAll}
                >
                    <RichText id="cookie-accept-all-text" text={t('cookie.accept-all')} variant="s3" />
                </Button>

                <Button
                    id="cookie-reject-all-button"
                    className={`${styles.cookie_button} ${styles.reject_button}`}
                    onClick={handleRejectAll}
                >
                    <RichText id="cookie-reject-all-text" text={t('cookie.reject-all')} variant="s3" />
                </Button>

                <Button
                    id="cookie-customize-button"
                    className={`${styles.cookie_button} ${styles.customize_button}`}
                    onClick={handleCustomize}
                >
                    <RichText id="cookie-customize-text" text={t('cookie.customize')} variant="s3" />
                </Button>
            </div>
        </div>
    );
};

Cookies.displayName = 'Cookies';

export default Cookies;
