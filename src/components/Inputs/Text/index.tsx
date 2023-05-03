import React from 'react';
import { KeyboardTypeOptions, TextInput, View } from 'react-native';
import styles from './style';

interface inputProps {
  name: string;
  placeDescription: string;
  onChange: (t: string) => void;
  value: string;
  keyboard?: KeyboardTypeOptions;
  secureText: boolean;
  autoCap?: 'none' | 'sentences' | 'words' | 'characters';
}

export default function InputText({
  name,
  value,
  keyboard,
  onChange,
  placeDescription,
  secureText,
  autoCap,
}: inputProps) {
  return (
    <View style={styles.inputArea}>
      <TextInput
        style={styles.inputField}
        placeholder={placeDescription}
        placeholderTextColor={'#000000'}
        onChangeText={onChange}
        value={value}
        autoCapitalize={autoCap}
        keyboardType={keyboard}
        secureTextEntry={secureText}
      />
    </View>
  );
}
