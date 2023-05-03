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
      backgroundColor: '#000000',
    },
    title: { color: '#ffffff' },
  },
  disabled: {
    button: {
      backgroundColor: '#88888822',
    },
    title: { color: '#ffffff' },
  },
};
