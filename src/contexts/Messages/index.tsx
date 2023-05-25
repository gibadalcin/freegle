import React, { createContext, useContext, useState } from 'react';

interface MessageContextData {
  registrationStatusMessage: string | null;
  setRegistrationStatusMessage: React.Dispatch<React.SetStateAction<string>>;

  errorMessage: boolean;
  setErrorMessage: React.Dispatch<React.SetStateAction<boolean>>;
}

const CurrentContextMessage = createContext<MessageContextData>({
  registrationStatusMessage: null,
  setRegistrationStatusMessage: () => {},

  errorMessage: false,
  setErrorMessage: () => {},
});

interface MessageProviderProps {
  children: React.ReactNode;
}

export const MessageProvider: React.FC<MessageProviderProps> = ({ children }) => {
  const [registrationStatusMessage, setRegistrationStatusMessage] =
    useState<string>('Iniciar Novo Cadastro');
  const [errorMessage, setErrorMessage] = useState<boolean>(false);

  return (
    <CurrentContextMessage.Provider
      value={{
        registrationStatusMessage,
        setRegistrationStatusMessage,

        errorMessage,
        setErrorMessage,
      }}
    >
      {children}
    </CurrentContextMessage.Provider>
  );
};

export function useCurrentMessage() {
  const context = useContext(CurrentContextMessage);
  return context;
}
