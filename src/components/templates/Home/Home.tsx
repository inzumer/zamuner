'use client';

/** Resources */
import { Presentation, History, Gallery } from './utils';

export const Home: React.FC = () => (
  <>
    <Presentation />
    <History />
    <Gallery />
  </>
);

Home.displayName = 'Home';
