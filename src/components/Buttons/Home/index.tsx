import React from 'react';
import { TouchableOpacity, StyleProp, ViewStyle, TextStyle } from 'react-native';
import styles from './style';

interface Props {
  style?: StyleProp<ViewStyle> | StyleProp<TextStyle>;
  text?: string;
  onPress?: () => void;
  disabled?: boolean;
  children?: React.ReactNode;
}

export const ModelHomeButton = ({ style, text, onPress, disabled, children }: Props) => {
  return (
    <TouchableOpacity style={style} onPress={onPress}>
      {children}
    </TouchableOpacity>
  );
};

export const PlateHomeButton = ({ style, text, onPress, disabled, children }: Props) => {
  return (
    <TouchableOpacity style={style} disabled={disabled} onPress={() => {}}>
      {children}
    </TouchableOpacity>
  );
};

export const LogoutHomeButton = ({ style, text, onPress, disabled, children }: Props) => {
  return (
    <TouchableOpacity style={styles.logoutButton} onPress={onPress}>
      {children}
    </TouchableOpacity>
  );
};

export const ExitHomeButton = ({ style, onPress, disabled, children }: Props) => {
  return (
    <TouchableOpacity style={style} disabled={disabled} onPress={onPress}>
      {children}
    </TouchableOpacity>
  );
};
