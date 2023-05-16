import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { ActivityIndicator, Image, View } from 'react-native';
import { StackTypes } from '../../routes/Stack';
import styles from './style';
import { colors } from '../../globals';

const Splash = () => {
  const navigation = useNavigation<StackTypes>();
  const [initializing, setInitializing] = useState<boolean>(true);

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
        <Image source={require('../../assets/splash.png')} style={styles.splashImage} />
        <Image source={require('../../assets/company.png')} style={styles.splashCompany} />
        {initializing && (
          <View
            style={{
              flex: 1,
              position: 'absolute',
              justifyContent: 'center',
              alignItems: 'center',
              top: '20%',
            }}
          >
            <ActivityIndicator size={80} color={colors.originalWhite} />
          </View>
        )}
      </View>
    </View>
  );
};

export default Splash;
