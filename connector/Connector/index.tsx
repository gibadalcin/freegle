/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import { Image, SafeAreaView, View } from 'react-native';

import Routes from '../../src/routes';
import styles from './style';
import { SelectsProvider } from '../../src/contexts/Select';
import { ResultProvider } from '../../src/contexts/Price';

export default function Connector(): JSX.Element {
  return (
    <SafeAreaView style={styles.totalArea}>
      <Image source={require('../../src/assets/static_bg.png')} style={styles.imageBackground} />
      <View style={styles.sectionContainer}>
        <ResultProvider>
          <SelectsProvider>
            <Routes />
          </SelectsProvider>
        </ResultProvider>
      </View>
    </SafeAreaView>
  );
}
