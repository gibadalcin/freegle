import { useNavigation } from '@react-navigation/native';
import React, { useEffect } from 'react';
import { Image, View } from 'react-native';
import { StackTypes } from '../../routes/Stack';
import styles from './style';

const Splash = () => {
  const navigation = useNavigation<StackTypes>();
  // Registra um listener para quando a tela se tornar ativa novamente.
  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      console.log('Splash está ativo novamente');
      setTimeout(() => {
        navigation.navigate('Home');
      }, 3000);
    });

    // Retorna uma função para desregistrar o listener quando a tela for desmontada.
    return unsubscribe;
  }, [navigation]);

  return (
    <View style={styles.container}>
      <View style={styles.splashField}>
        <Image source={require('../../assets/splash.png')} style={styles.splashImage} />
        <Image source={require('../../assets/company.png')} style={styles.splashCompany} />
      </View>
    </View>
  );
};

export default Splash;
