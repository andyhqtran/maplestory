import { useContext } from 'react';
import { SidebarContext } from '~/context/sidebar';

export const useSidebar = () => {
  const { isSidebarOpened, toggleSidebar } = useContext(SidebarContext);

  return { isSidebarOpened, toggleSidebar };
};
