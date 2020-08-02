import { createContext } from 'react';

const MobileNavContext = createContext({
  navOpen: false,
  handleNavOpen: () => !navOpen,
});

export default MobileNavContext;