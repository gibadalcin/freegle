import React, { createContext, useContext, useState } from 'react';

interface PageContextData {
  currentBgPage: string | null;
  setCurrentBgPage: React.Dispatch<React.SetStateAction<string>>;
}

const CurrentContextPages = createContext<PageContextData>({
  currentBgPage: null,
  setCurrentBgPage: () => {},
});

interface PageProviderProps {
  children: React.ReactNode;
}

export const PageProvider: React.FC<PageProviderProps> = ({ children }) => {
  const [currentBgPage, setCurrentBgPage] = useState<string>('');

  return (
    <CurrentContextPages.Provider
      value={{
        currentBgPage,
        setCurrentBgPage,
      }}
    >
      {children}
    </CurrentContextPages.Provider>
  );
};

export function useCurrentPages() {
  const context = useContext(CurrentContextPages);
  return context;
}
