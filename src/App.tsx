/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import { SafeAreaView } from 'react-native';
import Routes from './routes';
import styles from './style';
import { SelectsProvider } from './contexts/Select';
import { ResultProvider } from './contexts/Price';
import { PageProvider } from './contexts/Pages';

function App(): JSX.Element {
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

export default App;
