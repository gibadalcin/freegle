import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ActivityIndicator } from 'react-native';
import styles from './style';
import { buttonPrimary } from './variants';
interface Buttonprops {
  title: string;
  onPress: () => void;
  isLoading?: boolean;
  disabled?: boolean;
}

export default function ButtonModel({ title, onPress, isLoading = false, disabled }: Buttonprops) {
  const buttonStyle = disabled ? buttonPrimary.disabled : buttonPrimary.enabled;
  return (
    <View>
      <TouchableOpacity
        onPress={onPress}
        style={[styles.button, { backgroundColor: buttonStyle.button.backgroundColor }]}
        disabled={isLoading || disabled}
      >
        {isLoading ? <ActivityIndicator /> : <Text style={styles.buttonText}>{title}</Text>}
      </TouchableOpacity>
    </View>
  );
}
