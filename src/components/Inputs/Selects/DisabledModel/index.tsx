import styles from './style';
import { Text, View, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

interface SelectProps {
  onPress: () => void;
  text: string;
}

export default function Model({ onPress, text }: SelectProps) {
  return (
    <View>
      <TouchableOpacity style={styles.selectField} onPress={onPress}>
        <Text style={styles.text} numberOfLines={1}>
          {text}
        </Text>
        <Icon name={'long-arrow-up'} style={styles.icon} />
      </TouchableOpacity>
    </View>
  );
}
