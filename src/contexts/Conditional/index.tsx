import React, { createContext, useContext, useState } from 'react';

interface ConditionalContextData {
  showRegistrationScreen: boolean;
  setShowRegistrationScreen: React.Dispatch<React.SetStateAction<boolean>>;
  disabledButtomRegister: boolean;
  setValidatedRegistration: React.Dispatch<React.SetStateAction<boolean>>;
  showApplicationForm: boolean;
  setShowApplicationform: React.Dispatch<React.SetStateAction<boolean>>;
  validatedRegistration: boolean;
  setDisabledButtomRegister: React.Dispatch<React.SetStateAction<boolean>>;

  openLogoutModal: boolean;
  setOpenLogoutModal: React.Dispatch<React.SetStateAction<boolean>>;
}

const CurrentContextConditional = createContext<ConditionalContextData>({
  showRegistrationScreen: false,
  setShowRegistrationScreen: () => {},
  disabledButtomRegister: true,
  setDisabledButtomRegister: () => {},
  showApplicationForm: false,
  setShowApplicationform: () => {},
  validatedRegistration: true,
  setValidatedRegistration: () => {},

  openLogoutModal: true,
  setOpenLogoutModal: () => {},
});

interface ConditionalProviderProps {
  children: React.ReactNode;
}

export const ConditionalProvider: React.FC<ConditionalProviderProps> = ({ children }) => {
  const [disabledButtomRegister, setDisabledButtomRegister] = useState<boolean>(true);
  const [validatedRegistration, setValidatedRegistration] = useState<boolean>(false);
  const [showApplicationForm, setShowApplicationform] = useState<boolean>(false);
  const [showRegistrationScreen, setShowRegistrationScreen] = useState<boolean>(false);
  const [openLogoutModal, setOpenLogoutModal] = useState<boolean>(false);

  return (
    <CurrentContextConditional.Provider
      value={{
        showRegistrationScreen,
        setShowRegistrationScreen,
        disabledButtomRegister,
        setDisabledButtomRegister,
        validatedRegistration,
        setValidatedRegistration,
        showApplicationForm,
        setShowApplicationform,

        openLogoutModal,
        setOpenLogoutModal,
      }}
    >
      {children}
    </CurrentContextConditional.Provider>
  );
};

export function useCurrentConditional() {
  const context = useContext(CurrentContextConditional);
  return context;
}
