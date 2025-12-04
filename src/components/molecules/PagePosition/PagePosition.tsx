/** Resources */
import { Icon, Navigate, RichText } from '@components';

/** Styles */
import styles from './styles.module.css';

interface PageItem {
  id: string;
  url: string;
  text: string;
}

type PagePositionProps = {
  id: string;
  actual: string;
  list: PageItem[];
};

const PagePosition: React.FC<PagePositionProps> = ({ id, actual, list }) => (
  <div id={`${id}-page-position`} className={styles.page_position}>
    {list.map(({ id: item, url, text }, index) => (
      <Navigate id={`${item}-navigate`} href={url} key={index} className={styles.page_position__link}>
        <RichText id={`${item}-text`} text={text} variant='s3' />
        <Icon name='Chevron' height={20} width={20} className={styles.page_position__icon} />
      </Navigate>
    ))}
    <RichText id={`${id}-actual-location`} text={actual} variant='s3' className={styles.page_position__text} />
  </div>
);

PagePosition.displayName = 'PagePosition';

export default PagePosition;
