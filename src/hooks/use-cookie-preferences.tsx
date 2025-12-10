import { useState, useCallback } from 'react';

interface CookiePreferences {
    analytics: boolean;
    external: boolean;
}

const getInitialPreferences = (): CookiePreferences => {
    if (typeof window === 'undefined') {
        return { analytics: false, external: false };
    }

    try {
        const categories = localStorage.getItem('cookies-categories');
        if (categories) {
            return JSON.parse(categories) as CookiePreferences;
        }
    } catch (error) {
        console.error('Error parsing cookies categories from localStorage:', error);
    }

    return { analytics: false, external: false };
};

export const useCookiePreferences = () => {
    const [preferences, setPreferences] = useState<CookiePreferences>(getInitialPreferences);

    const updatePreference = useCallback((category: keyof CookiePreferences, value: boolean) => {
        setPreferences(prev => {
            const newPrefs = { ...prev, [category]: value };

            if (typeof window !== 'undefined') {
                localStorage.setItem('cookies-categories', JSON.stringify(newPrefs));
            }

            return newPrefs;
        });
    }, []);

    const saveAllPreferences = useCallback((newPrefs: CookiePreferences) => {
        setPreferences(newPrefs);
        if (typeof window !== 'undefined') {
            localStorage.setItem('cookies-categories', JSON.stringify(newPrefs));
        }
    }, []);


    return {
        preferences,
        setPreferences,
        updatePreference,
        saveAllPreferences,
    };
};
