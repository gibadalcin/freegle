import React, { createContext, useContext, useState } from 'react';

interface CommonUseContextData {
  initializing: boolean;
  setInitializing: React.Dispatch<React.SetStateAction<boolean>>;
}

const CommonContext = createContext<CommonUseContextData>({
  initializing: true,
  setInitializing: () => {},
});

interface CommonUseProviderProps {
  children: React.ReactNode;
}

export const CommonUseProvider: React.FC<CommonUseProviderProps> = ({ children }) => {
  const [initializing, setInitializing] = useState<boolean>(true);
  return (
    <CommonContext.Provider
      value={{
        initializing,
        setInitializing,
      }}
    >
      {children}
    </CommonContext.Provider>
  );
};

export function useCommon() {
  const context = useContext(CommonContext);
  return context;
}
