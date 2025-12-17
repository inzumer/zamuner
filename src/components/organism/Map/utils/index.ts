interface CookieCategories {
    analytics: boolean;
    external: boolean;
}

export const getExternalConsentStatus = (): boolean => {
    if (typeof window === 'undefined') { return false; }

    try {
        const savedCategories = localStorage.getItem('cookies-categories');

        if (savedCategories) {
            const categories = JSON.parse(savedCategories) as CookieCategories;

            return categories.external === true;
        }
    } catch (error) {
        console.error('Error retrieving cookie categories for map:', error);
    }

    return false;
};
