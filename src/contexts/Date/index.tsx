import React, { useContext, useEffect, useState } from 'react';

interface DateContextProps {
  currentDate: string;
  setCurrentDate: (date: string) => void;
}

const DateContext = React.createContext<DateContextProps>({
  currentDate: '',
  setCurrentDate: () => {},
});

interface DateProviderProps {
  children: React.ReactNode;
}

export const DateProvider: React.FC<DateProviderProps> = ({ children }) => {
  const [currentDate, setCurrentDate] = useState<string>('');

  useEffect(() => {
    const currentDate = new Date();
    setCurrentDate(currentDate.toLocaleDateString('pt-BR'));
  }, []);

  return (
    <DateContext.Provider value={{ currentDate, setCurrentDate }}>{children}</DateContext.Provider>
  );
};

export function useCurrentDate() {
  const context = useContext(DateContext);
  return context;
}
