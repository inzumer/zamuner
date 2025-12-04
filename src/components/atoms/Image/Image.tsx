/** Resources */
import NextImage from 'next/image';
import { Images } from '@assets';

interface ImageProps {
  src: keyof typeof Images;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  priority?: boolean;
  lazy?: boolean;
  styles?: React.CSSProperties;
}

const Image: React.FC<ImageProps> = ({
  src,
  alt,
  width,
  height,
  className = '',
  priority = false,
  lazy = true,
  styles,
}) => {
  const imageSrc = Images[src];

  return (
    <NextImage
      src={imageSrc}
      alt={alt}
      width={width}
      height={height}
      style={styles || undefined}
      className={className}
      priority={priority}
      loading={lazy ? 'lazy' : 'eager'}
    />
  );
};

Image.displayName = 'Image';

export default Image;
