import React, { createContext, useContext, useState } from 'react';

interface ResultContextData {
  yearModel: string | null;
  setYearModel: React.Dispatch<React.SetStateAction<string>>;
  fipeCode: string | null;
  setFipeCode: React.Dispatch<React.SetStateAction<string>>;
  fuel: string | null;
  setFuel: React.Dispatch<React.SetStateAction<string>>;
  brand: string | null;
  setBrand: React.Dispatch<React.SetStateAction<string>>;
  monthRef: string | null;
  setMonthRef: React.Dispatch<React.SetStateAction<string>>;
  model: string | null;
  setModel: React.Dispatch<React.SetStateAction<string>>;
  fuelAcronym: string | null;
  setFuelAcronym: React.Dispatch<React.SetStateAction<string>>;
  type: string | null;
  setType: React.Dispatch<React.SetStateAction<string>>;
  price: string | null;
  setPrice: React.Dispatch<React.SetStateAction<string>>;
}

const ResultContext = createContext<ResultContextData>({
  yearModel: null,
  setYearModel: () => {},
  fipeCode: null,
  setFipeCode: () => {},
  fuel: null,
  setFuel: () => {},
  brand: null,
  setBrand: () => {},
  monthRef: null,
  setMonthRef: () => {},
  model: null,
  setModel: () => {},
  fuelAcronym: null,
  setFuelAcronym: () => {},
  type: null,
  setType: () => {},
  price: null,
  setPrice: () => {},
});

interface ResultProviderProps {
  children: React.ReactNode;
}

export const ResultProvider: React.FC<ResultProviderProps> = ({ children }) => {
  const [yearModel, setYearModel] = useState<string>('');
  const [fipeCode, setFipeCode] = useState<string>('');
  const [fuel, setFuel] = useState<string>('');
  const [brand, setBrand] = useState<string>('');
  const [monthRef, setMonthRef] = useState<string>('');
  const [model, setModel] = useState<string>('');
  const [fuelAcronym, setFuelAcronym] = useState<string>('');
  const [type, setType] = useState<string>('');
  const [price, setPrice] = useState<string>('');
  return (
    <ResultContext.Provider
      value={{
        yearModel,
        setYearModel,
        fipeCode,
        setFipeCode,
        fuel,
        setFuel,
        brand,
        setBrand,
        monthRef,
        setMonthRef,
        model,
        setModel,
        fuelAcronym,
        setFuelAcronym,
        type,
        setType,
        price,
        setPrice,
      }}
    >
      {children}
    </ResultContext.Provider>
  );
};

export function useResult() {
  const context = useContext(ResultContext);
  return context;
}
