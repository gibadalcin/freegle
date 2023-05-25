import { text } from '../Useful';
import { useCurrentConditional } from '../../contexts/Conditional';
import { useCurrentMessage } from '../../contexts/Messages';
import { useCommon } from '../../contexts/CommonUse';

export const logMessageGeneration = (): string => {
  const { showRegistrationScreen, showApplicationForm, validatedRegistration } =
    useCurrentConditional();
  const { registrationStatusMessage, setRegistrationStatusMessage, errorMessage } =
    useCurrentMessage();

  let message: string = '';

  if (showRegistrationScreen) {
    if (showApplicationForm) {
      console.log('error message filter: ', errorMessage);
      message = registrationStatusMessage ?? '';
    } else if (!showApplicationForm) {
      message = text.startRegistration;
    }
  }

  return message;
};
