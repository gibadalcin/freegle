import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ActivityIndicator, Dimensions } from 'react-native';
import styles from './style';
import { buttonPrimary } from './variants';
const { width, height } = Dimensions.get('window');

interface ButtonProps {
  title: string;
  onPress: () => void;
  isLoading?: boolean;
  disabled?: boolean;
  backgroundColor?: string; // adicionando nova propriedade
}

export default function ButtonModel({
  title,
  onPress,
  isLoading = false,
  disabled,
  backgroundColor,
}: ButtonProps) {
  const buttonStyle = disabled ? buttonPrimary.disabled : buttonPrimary.enabled;
  const bg = backgroundColor
    ? { backgroundColor }
    : { backgroundColor: buttonStyle.button.backgroundColor };
  const styleRoot = [styles.button, bg];

  return (
    <View>
      <TouchableOpacity onPress={onPress} style={[styleRoot]} disabled={isLoading || disabled}>
        {isLoading ? <ActivityIndicator /> : <Text style={styles.buttonText}>{title}</Text>}
      </TouchableOpacity>
    </View>
  );
}
