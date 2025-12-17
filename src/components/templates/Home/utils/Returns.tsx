'use client';

import { Card, RichText } from '@components';
import { useTranslation } from 'react-i18next';
import { Images } from '@assets';

/** Styles */
import styles from '../styles.module.css';

const Returns: React.FC = () => {
    const { t } = useTranslation();

    const GALLERY = [
        { image: 'AlbertoZamunerReturnOne', description: t('returns.photos.alberto-zamuner') },
        { image: 'AlbertoZamunerReturnTwo', description: t('returns.photos.alberto-zamuner') },
        { image: 'AlbertoZamunerReturnThree', description: t('returns.photos.alberto-zamuner') },
        { image: 'AlbertoZamunerReturnFour', description: t('returns.photos.alberto-zamuner') },
        { image: 'MargaritaZamunerReturnOne', description: t('returns.photos.margarita-zamuner') },
        { image: 'MargaritaZamunerReturnTwo', description: t('returns.photos.margarita-zamuner-kitchen') },
        { image: 'MargaritaZamunerReturnThree', description: t('returns.photos.margarita-zamuner') },
        { image: 'MargaritaZamunerReturnFour', description: t('returns.photos.margarita-zamuner') },
    ];

    return (
        <section id='returns' className={styles.returns}>
            <div className={styles.returns__container}>

            </div>
            <div className={styles.returns__container_text}>
                <RichText id='returns-title' className={styles.returns__title} variant='h2' text={t('returns.title')} />
                <RichText id='returns-description' className={styles.returns__subtitle} variant='s3' text={t('returns.description')} />
            </div>
            <div className={styles.returns__container_cards}>
                {GALLERY.map((item, index) => (
                    <Card
                        key={index}
                        id={`gallery-card-${index + 1}`}
                        imageUrl={item.image as keyof typeof Images}
                        altText={item.description}
                        descriptionText={item.description}
                    />
                ))}
            </div>
        </section>
    );
};

Returns.displayName = 'Returns';

export default Returns;
