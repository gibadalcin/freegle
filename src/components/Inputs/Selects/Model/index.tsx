import styles from './style';
import { Text, View, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

interface SelectProps {
  onPress: () => void;
  text: string;
  disabled?: boolean;
}

export default function Model({ onPress, text, disabled }: SelectProps) {
  return (
    <View>
      <TouchableOpacity style={styles.selectField} onPress={onPress} disabled={false}>
        <Text style={styles.text} numberOfLines={1}>
          {text}
        </Text>
        <Icon name={'chevron-down'} style={styles.icon} />
      </TouchableOpacity>
    </View>
  );
}
