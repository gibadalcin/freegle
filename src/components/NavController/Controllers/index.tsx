import React from 'react';
import { StyleProp, Text, TextStyle, TouchableOpacity, ViewStyle } from 'react-native';
import styles from './style';
import { MatComIcons } from '../../ModelIcon';
import { colors, size } from '../../../globals/Useful';

interface ControlerProps {
  style?: StyleProp<ViewStyle> | StyleProp<TextStyle>;
  text?: string;
  onPress?: () => void;
  disabled?: boolean;
  children?: React.ReactNode;
}

export const TextMessageCustomNavControler = ({ style, text }: ControlerProps) => {
  return <Text style={style}>{text} </Text>;
};

export const TextLogoutCustomNavControler = ({ style, text }: ControlerProps) => {
  return <Text style={style}>{text}</Text>;
};

export const CustomNavControler = ({ style, onPress, disabled, children }: ControlerProps) => {
  return (
    <TouchableOpacity style={style} onPress={onPress} disabled={disabled}>
      {children}
    </TouchableOpacity>
  );
};

export const BackControler = ({ onPress }: ControlerProps) => {
  return (
    <TouchableOpacity style={styles.navIconBack} onPress={onPress}>
      <MatComIcons
        _matComName={'arrow-left-bold'}
        _matComSize={size.s1Icon}
        _matComColor={colors.lightTransWhite}
      />
    </TouchableOpacity>
  );
};

export const InstructionControler = ({ onPress, disabled }: ControlerProps) => {
  return (
    <TouchableOpacity style={styles.navIconInstructions} onPress={onPress} disabled={disabled}>
      <MatComIcons
        _matComName={'book-open-page-variant-outline'}
        _matComSize={size.s1Icon}
        _matComColor={disabled ? colors.originalGrey : colors.lightTransWhite}
      />
    </TouchableOpacity>
  );
};

export const CloseControler = ({ onPress }: ControlerProps) => {
  return (
    <TouchableOpacity style={styles.navIconClose} onPress={onPress}>
      <MatComIcons
        _matComName={'window-close'}
        _matComSize={size.s1Icon}
        _matComColor={colors.lightTransWhite}
      />
    </TouchableOpacity>
  );
};

export const NewAccountControler = ({ onPress, disabled }: ControlerProps) => {
  return (
    <TouchableOpacity style={styles.navIconAccount} onPress={onPress} disabled={disabled}>
      <MatComIcons
        _matComName={'account-plus'}
        _matComSize={size.s1Icon}
        _matComColor={!disabled ? colors.lightTransWhite : colors.originalGrey}
      />
    </TouchableOpacity>
  );
};

export const AccountEditControler = ({ onPress, disabled }: ControlerProps) => {
  return (
    <TouchableOpacity style={styles.navIconAccount} onPress={onPress} disabled={disabled}>
      <MatComIcons
        _matComName={'account-edit'}
        _matComSize={size.s1Icon}
        _matComColor={!disabled ? colors.lightTransWhite : colors.originalGrey}
      />
    </TouchableOpacity>
  );
};

export const ListControler = ({ onPress, disabled }: ControlerProps) => {
  return (
    <TouchableOpacity style={styles.navIconList} onPress={onPress} disabled={disabled}>
      <MatComIcons
        _matComName={'format-list-group'}
        _matComSize={size.s1Icon}
        _matComColor={disabled ? colors.originalGrey : colors.lightTransWhite}
      />
    </TouchableOpacity>
  );
};

export const LoginControler = ({ onPress, disabled }: ControlerProps) => {
  return (
    <TouchableOpacity style={styles.navIconLog} onPress={onPress} disabled={disabled}>
      <MatComIcons
        _matComName={'login'}
        _matComSize={size.s1Icon}
        _matComColor={!disabled ? colors.lightTransWhite : colors.originalGrey}
      />
    </TouchableOpacity>
  );
};

export const LogoutControler = ({ onPress, disabled }: ControlerProps) => {
  return (
    <TouchableOpacity style={styles.navIconLog} onPress={onPress} disabled={disabled}>
      <MatComIcons
        _matComName={'logout'}
        _matComSize={size.s1Icon}
        _matComColor={colors.lightTransWhite}
      />
    </TouchableOpacity>
  );
};
