import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { ActivityIndicator, Image, View } from 'react-native';
import { StackTypes } from '../../routes/Stack';
import styles from './style';
import { colors } from '../../globals/Useful';
import { useCommon } from '../../contexts/CommonUse';

const Splash = () => {
  const navigation = useNavigation<StackTypes>();
  const { initializing, setInitializing } = useCommon();

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      setTimeout(() => {
        if (initializing) {
          setInitializing(false);
        }
        navigation.navigate('Home');
      }, 3000);
    });
    return unsubscribe;
  }, [navigation, initializing]);

  return (
    <View style={styles.container}>
      <View style={styles.splashField}>
        <Image source={require('../../assets/Images/splash.png')} style={styles.splashImage} />
        <Image source={require('../../assets/Images/company.png')} style={styles.splashCompany} />
        {initializing && (
          <View
            style={{
              flex: 1,
              position: 'absolute',
              justifyContent: 'center',
              alignItems: 'center',
              transform: [{ translateY: 40 }],
            }}
          >
            <ActivityIndicator size={60} color={colors.lightTransWhite} />
          </View>
        )}
      </View>
    </View>
  );
};

export default Splash;
