'use client';

import { useMediaQuery } from '@hooks';
import { Desktop, Mobile } from './utils';

const Menu: React.FC = () => {
  const isDesktop = useMediaQuery('desktop');

  return isDesktop ? <Desktop /> : <Mobile />;
};

Menu.displayName = 'Menu';

export default Menu;
