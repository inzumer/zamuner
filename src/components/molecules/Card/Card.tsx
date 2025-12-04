'use client';

/** Resources */
import { useState } from 'react';
import { Button, Image, Icon, RichText } from '@components'
import { Images } from '@assets'

/** Styles */
import styles from './styles.module.css';

type CardProps = {
  id: string;
  imageUrl: keyof typeof Images;
  altText: string;
  descriptionText: string;
};

const Card: React.FC<CardProps> = ({ id, imageUrl, altText, descriptionText }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDescription = () => {
    setIsOpen(!isOpen);
  };

  const descriptionClasses = `${styles.card__description_content} ${isOpen ? styles.open : ''}`;
  const chevronClasses = `${styles.card__chevron} ${isOpen ? styles.rotate : ''}`;

  return (
    <div id={`card-${id}`} className={styles.card}>
      <div className={styles.card__frame}>
        <Image src={imageUrl} alt={altText} />
      </div>

      <div className={styles.card__details}>
        <div
          className={descriptionClasses}
          aria-hidden={!isOpen}
        >
          <RichText id={`card-description-text-${id}`} text={descriptionText} variant="s3" />
        </div>

        <Button
          id={`card-toggle-${id}`}
          className={styles.card__toggle}
          onClick={toggleDescription}
        >
          <Icon name="Chevron" className={chevronClasses} />
        </Button>
      </div>
    </div>
  );
}

Card.displayName = 'Card';

export default Card;