'use client';

import { useMediaQuery } from '@hooks';
import { Desktop, Mobile } from './utils';

const Menu = () => {
  const isDesktop = useMediaQuery('desktop');

  return isDesktop ? <Desktop /> : <Mobile />;
};

Menu.displayName = 'Menu';

export default Menu;
