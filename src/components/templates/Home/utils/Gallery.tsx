'use client';

/** Resources */
import { useTranslation } from 'react-i18next';
import { Card, RichText } from '@components';
import { Images } from '@assets';

/** Styles */
import styles from '../styles.module.css';

export const Gallery: React.FC = () => {
  const { t } = useTranslation();

  const GALLERY = [
    { image: 'AllFamilyOne', description: t('gallery.images.all-family-one') },
    { image: 'AllFamilyTwo', description: t('gallery.images.all-family-two') },
    { image: 'AntonioZamunerOne', description: t('gallery.images.antonio-zamuner-one') },
    { image: 'AntonioZamunerTwo', description: t('gallery.images.antonio-zamuner-two') },
    { image: 'ChurchOne', description: t('gallery.images.church-one') },
    { image: 'ChurchTwo', description: t('gallery.images.church-two') },
    { image: 'Cousins', description: t('gallery.images.cousins') },
    { image: 'DiscountCard', description: t('gallery.images.discount-card') },
    { image: 'Family', description: t('gallery.images.family') },
    { image: 'FamilyOgniben', description: t('gallery.images.family-ogniben') },
    { image: 'HolyCards', description: t('gallery.images.holy-cards') },
    { image: 'House', description: t('gallery.images.house') },
    { image: 'InnerPrayerBookOne', description: t('gallery.images.inner-prayer-book-one') },
    { image: 'InnerPrayerBookTwo', description: t('gallery.images.inner-prayer-book-two') },
    { image: 'InnerPrayerBookThree', description: t('gallery.images.inner-prayer-book-three') },
    { image: 'InnerPrayerBookFour', description: t('gallery.images.inner-prayer-book-four') },
    { image: 'Keychains', description: t('gallery.images.keychains') },
    { image: 'LeoneZamunerDocument', description: t('gallery.images.leone-zamuner-document') },
    { image: 'Neighbor', description: t('gallery.images.neighbors') },
    { image: 'Newspaper', description: t('gallery.images.newspaper') },
    { image: 'Notes', description: t('gallery.images.notes') },
    { image: 'Parchment', description: t('gallery.images.parchment') },
    { image: 'Painting', description: t('gallery.images.painting') },
    { image: 'Postal', description: t('gallery.images.postal') },
    { image: 'Sainthood', description: t('gallery.images.sainthood') },
    { image: 'SanJuanOne', description: t('gallery.images.san-juan-one') },
    { image: 'SanJuanTwo', description: t('gallery.images.san-juan-two') },
    { image: 'Tray', description: t('gallery.images.tray') },
  ];


  return (
    <section id='gallery' className={styles.gallery}>
      <div className={styles.gallery__container}>
        <div className={styles.gallery__container_text}>
          <RichText id='gallery-title' className={styles.gallery__title} variant='h2' text={t('gallery.title')} />
          <RichText id='gallery-description' className={styles.gallery__description} variant='p3' text={t('gallery.description')} />
        </div>

        <div className={styles.gallery__container_cards}>
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
      </div>
    </section>
  );
};

Gallery.displayName = 'Gallery';