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
import { DateProvider } from './contexts/Date';
import { ConditionalProvider } from './contexts/Conditional';
import { MessageProvider } from './contexts/Messages';
import { PageProvider } from './contexts/Pages';
import { CommonUseProvider } from './contexts/CommonUse';

function App(): JSX.Element {
  return (
    <SafeAreaView style={styles.totalArea}>
      <DateProvider>
        <MessageProvider>
          <ConditionalProvider>
            <CommonUseProvider>
              <PageProvider>
                <SelectsProvider>
                  <ResultProvider>
                    <Routes />
                  </ResultProvider>
                </SelectsProvider>
              </PageProvider>
            </CommonUseProvider>
          </ConditionalProvider>
        </MessageProvider>
      </DateProvider>
    </SafeAreaView>
  );
}

export default App;
