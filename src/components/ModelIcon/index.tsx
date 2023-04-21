import React from 'react';
import Icon from 'react-native-vector-icons/Entypo';

interface ArrowProps {
  name: string;
  size: number;
  color: string;
  onPress: () => void;
}
export default function Modelicon({ name, size, color, onPress }: ArrowProps): JSX.Element {
  return <Icon name={name} size={size} color={color} onPress={onPress} />;
}
