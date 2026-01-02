'use client';

import { useEffect, useState } from 'react';
import { TransformWrapper, TransformComponent } from 'react-zoom-pan-pinch';
import { Button, Icon } from '@components';
import { useMediaQuery } from '@hooks';

/** Styles */
import styles from './styles.module.css';

const Viewer: React.FC = () => {
    const isDesktop = useMediaQuery('desktop');
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => setLoading(false), 5000);

        return () => clearTimeout(timer);
    }, []);

    return (
        <div className={styles.viewer_container}>
            {loading && (
              <div className={styles.loader}></div>
            )}

            <div style={{ display: loading ? 'none' : 'block' }}>
                <TransformWrapper
                    initialPositionX={200}
                    initialPositionY={200}
                    centerOnInit={true}
                    initialScale={isDesktop ? 1 : 3}
                    minScale={isDesktop ? 0.3 : 1}
                    maxScale={isDesktop ? 8 : 15}
                    centerZoomedOut={true}
                    smooth={true}
                >
                    {({ zoomIn, zoomOut }) => (
                        <>
                            <div className={styles.viewer_controls}>
                                <Button
                                    id="button-zoom-in"
                                    className={styles.viewer_button}
                                    onClick={() => zoomIn()}
                                >
                                    <Icon name="ZoomIn" width={32} height={32} />
                                </Button>

                                <Button
                                    id="button-zoom-out"
                                    className={styles.viewer_button}
                                    onClick={() => zoomOut()}
                                >
                                    <Icon name="ZoomOut" width={32} height={32} />
                                </Button>
                            </div>

                            <TransformComponent
                                wrapperClass={styles.viewer_wrapper}
                                contentClass={styles.viewer_content}
                                wrapperStyle={{
                                    backgroundColor: '#F5F1EB',
                                    width: '100%',
                                    height: '100%'
                                }}
                            >
                                <Icon name="Family" className={styles.viewer_icon} />
                            </TransformComponent>
                        </>
                    )}
                </TransformWrapper>
            </div>
        </div>
    );
};

Viewer.displayName = 'Viewer';

export default Viewer;
