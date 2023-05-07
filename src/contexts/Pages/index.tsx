import React, { createContext, useContext, useState } from 'react';

interface PageContextData {
  currentPage: string | null;
  setCurrentPage: React.Dispatch<React.SetStateAction<string>>;
}

const CurrentContextPages = createContext<PageContextData>({
  currentPage: null,
  setCurrentPage: () => {},
});

interface PageProviderProps {
  children: React.ReactNode;
}

export const PageProvider: React.FC<PageProviderProps> = ({ children }) => {
  const [currentPage, setCurrentPage] = useState<string>('');

  return (
    <CurrentContextPages.Provider
      value={{
        currentPage,
        setCurrentPage,
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
