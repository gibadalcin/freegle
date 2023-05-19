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
import { DateProvider } from './contexts/Date';

function App(): JSX.Element {
  return (
    <SafeAreaView style={styles.totalArea}>
      <DateProvider>
        <PageProvider>
          <SelectsProvider>
            <ResultProvider>
              <Routes />
            </ResultProvider>
          </SelectsProvider>
        </PageProvider>
      </DateProvider>
    </SafeAreaView>
  );
}

export default App;
