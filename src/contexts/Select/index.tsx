import React, { createContext, useContext, useState } from 'react';

interface SelectsContextData {
  vehicleType: string | null;
  setVehicleType: React.Dispatch<React.SetStateAction<string>>;
  codeBrands: string | null;
  setCodeBrands: React.Dispatch<React.SetStateAction<string>>;
  codeModel: string | null;
  setCodeModel: React.Dispatch<React.SetStateAction<string>>;
  codeYear: string | null;
  setCodeYear: React.Dispatch<React.SetStateAction<string>>;
}

const SelectsContext = createContext<SelectsContextData>({
  vehicleType: null,
  setVehicleType: () => {},
  codeBrands: null,
  setCodeBrands: () => {},
  codeModel: null,
  setCodeModel: () => {},
  codeYear: null,
  setCodeYear: () => {},
});

interface SelectsProviderProps {
  children: React.ReactNode;
}

export const SelectsProvider: React.FC<SelectsProviderProps> = ({ children }) => {
  const [vehicleType, setVehicleType] = useState<string>('');
  const [codeBrands, setCodeBrands] = useState<string>('');
  const [codeModel, setCodeModel] = useState<string>('');
  const [codeYear, setCodeYear] = useState<string>('');
  return (
    <SelectsContext.Provider
      value={{
        vehicleType,
        setVehicleType,
        codeBrands,
        setCodeBrands,
        codeModel,
        setCodeModel,
        codeYear,
        setCodeYear,
      }}
    >
      {children}
    </SelectsContext.Provider>
  );
};

export function useSelects() {
  const context = useContext(SelectsContext);
  return context;
}
