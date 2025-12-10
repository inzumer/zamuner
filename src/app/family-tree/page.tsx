'use client';

import { RichText } from '@components';
import { useTranslation } from 'react-i18next';

/** Styles */
import styles from './styles.module.css';

const Page: React.FC = () => {
    const { t } = useTranslation();

    return (
        <>
            <section id='family-tree' className={styles.family_tree}>
                <div className={styles.family_tree__container}>
                    <RichText id='family-tree-title' className={styles.family_tree__title} variant='h1' text={t('family-tree.title')} />
                    <RichText id='family-tree-subtitle' className={styles.family_tree__subtitle} variant='s3' text={t('family-tree.description')} />
                </div>
            </section>
        </>
    );
};

export default Page;
