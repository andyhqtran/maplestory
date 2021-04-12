import { noop } from 'lodash';
import React, { createContext, ReactNode, useEffect, useState } from 'react';
import useLocalStorageState from 'use-local-storage-state';

export const SidebarContext = createContext({
  isSidebarOpened: true,
  toggleSidebar: noop,
});

export const SidebarProvider = ({ children }: { children: ReactNode }) => {
  const [sidebar, setSidebar] = useLocalStorageState('sidebar', true);
  const [isSidebarOpened, setIsSidebarOpen] = useState(true);

  useEffect(() => setIsSidebarOpen(sidebar), []);

  return (
    <SidebarContext.Provider
      value={{
        isSidebarOpened,
        toggleSidebar: () => {
          setIsSidebarOpen(!isSidebarOpened);
          setSidebar(!isSidebarOpened);
        },
      }}
    >
      {children}
    </SidebarContext.Provider>
  );
};
