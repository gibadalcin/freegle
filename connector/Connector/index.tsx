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
import { PageProvider } from '../../src/contexts/Pages';

export default function Connector(): JSX.Element {
  return (
    <SafeAreaView style={styles.totalArea}>
      <PageProvider>
        <SelectsProvider>
          <ResultProvider>
            <Routes />
          </ResultProvider>
        </SelectsProvider>
      </PageProvider>
    </SafeAreaView>
  );
}
