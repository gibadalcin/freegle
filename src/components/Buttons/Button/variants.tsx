import { colors } from '../../../globals/Useful';

export interface ButtonStyle {
  button: {
    backgroundColor: string;
    borderWidth?: number;
    borderColor?: string;
  };
  title: {
    color: string;
  };
}

export interface ButtonVariant {
  enabled: ButtonStyle;
  disabled: ButtonStyle;
}

export const buttonPrimary: ButtonVariant = {
  enabled: {
    button: {
      backgroundColor: colors.specialRed,
    },
    title: { color: colors.originalWhite },
  },
  disabled: {
    button: {
      backgroundColor: colors.specialTranslucid,
    },
    title: { color: colors.lightTransWhite },
  },
};
