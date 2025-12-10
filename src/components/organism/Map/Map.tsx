'use client';

import { useState, useEffect, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { RichText } from '@components';
import { getExternalConsentStatus } from './utils';

/* Styles */
import styles from './styles.module.css';

const Map: React.FC = () => {
    const { t } = useTranslation();
    const [canLoadMap, setCanLoadMap] = useState(getExternalConsentStatus);

    const checkAndLoadMap = useCallback(() => {
        const isExternalAccepted = getExternalConsentStatus();
        setCanLoadMap(isExternalAccepted);
    }, []);

    useEffect(() => {
        const handleConsentChange = () => {
            checkAndLoadMap();
        };

        window.addEventListener('cookies-consent-changed', handleConsentChange);

        return () => {
            window.removeEventListener('cookies-consent-changed', handleConsentChange);
        };
    }, [checkAndLoadMap]);

    if (canLoadMap) {
        return (
            <div className={styles.map_container}>
                <iframe
                    width="100%"
                    height="450"
                    className={styles.map_iframe}
                    src="https://maps.google.com/maps?q=Via Peschiere, 19 ,Dosson di Casier, Treviso, Italia&z=14&output=embed"
                    allowFullScreen
                    referrerPolicy="no-referrer-when-downgrade"
                    title={t('history.location-title')}
                />
            </div>
        );
    } else {
        return (
            <div className={`${styles.map_container} ${styles.map_blocked}`}>
                <RichText
                    id="map-blocked-title"
                    text={t('history.blocked-title')}
                    variant="h3"
                />
                <RichText
                    id="map-blocked-message"
                    text={t('history.blocked-message')}
                    variant="p3"
                />
            </div>
        );
    }
};

Map.displayName = 'Map';

export default Map;
