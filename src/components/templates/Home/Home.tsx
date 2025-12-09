'use client';

import { Contact, Gallery, History, Presentation } from './utils';

const Home: React.FC = () => (
  <>
    <Presentation />
    <History />
    <Gallery />
    <Contact />
  </>
);

Home.displayName = 'Home';

export default Home;
