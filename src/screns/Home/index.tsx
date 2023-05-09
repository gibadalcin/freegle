import { useNavigation } from '@react-navigation/native';
import React, { useEffect } from 'react';
import { View, Text, TouchableOpacity, Alert, BackHandler } from 'react-native';
import Button from '../../components/Buttons/Button';
import { StackTypes } from '../../routes/Stack';
import styles from './style';
import { AntDesignIcon, EntypoIcon, IonIcons, FontAwesomeIcon } from '../../components/ModelIcon';
import { useCurrentPages } from '../../contexts/Pages';
import BgImage from '../../components/BgImage';
import colors from '../../Globals/Colors';
import size from '../../Globals/Sizes';
const Home = () => {
  const navigation = useNavigation<StackTypes>();
  const { currentPage, setCurrentPage } = useCurrentPages();

  useEffect(() => {
    setCurrentPage('home');
  }, [currentPage]);

  function handleSignOut() {
    Alert.alert('Esta funcionalidade ainda não está disponível!');
  }

  function consultPlate() {}

  const handleBackButton = () => {
    BackHandler.exitApp();
    return true;
  };

  useEffect(() => {
    BackHandler.addEventListener('hardwareBackPress', handleBackButton);

    return () => {
      BackHandler.removeEventListener('hardwareBackPress', handleBackButton);
    };
  }, []);

  return (
    <>
      <BgImage />
      <View style={styles.container}>
        <View style={styles.customNav}>
          <View style={styles.customNavButtom}></View>

          <TouchableOpacity
            style={styles.navIconBack}
            onPress={() => {
              navigation.navigate('Splash');
            }}
            disabled={false}
          >
            <AntDesignIcon
              antName={'arrowleft'}
              antSize={size.mIcon}
              antColor={colors.lightTransWhite}
            />
          </TouchableOpacity>

          <TouchableOpacity style={styles.navIconRefresh} onPress={() => {}} disabled>
            <IonIcons ionName={'refresh'} ionSize={size.mIcon} ionColor={colors.lightTransWhite} />
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.navIconClose}
            onPress={() => {
              handleBackButton();
            }}
            disabled={false}
          >
            <AntDesignIcon
              antName={'close'}
              antSize={size.mIcon}
              antColor={colors.lightTransWhite}
            />
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.navIconRegister}
            onPress={() => {
              navigation.navigate('Register');
            }}
            disabled={false}
          >
            <EntypoIcon
              entName={'add-user'}
              entSize={size.mIcon}
              entColor={colors.lightTransWhite}
            />
          </TouchableOpacity>

          <TouchableOpacity style={styles.navIconList} onPress={() => {}} disabled={true}>
            <FontAwesomeIcon
              aweName={'files-o'}
              aweSize={size.mIcon}
              aweColor={colors.lightTransWhite}
            />
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.navIconLogin}
            onPress={() => {
              navigation.navigate('Login');
            }}
            disabled={false}
          >
            <EntypoIcon entName={'user'} entSize={size.mIcon} entColor={colors.lightTransWhite} />
          </TouchableOpacity>
        </View>

        <View style={styles.buttons}>
          <Button
            onPress={() => {
              navigation.navigate('Model');
            }}
            title="Consultar Modelo"
          />
          <Button disabled={true} onPress={handleSignOut} title="Consultar Placa" />
        </View>
      </View>
    </>
  );
};

export default Home;
