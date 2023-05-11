import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { View, TouchableOpacity, Alert, BackHandler, Text } from 'react-native';
import Button from '../../components/Buttons/Button';
import { StackTypes } from '../../routes/Stack';
import styles from './style';
import { MatComIcons } from '../../components/ModelIcon';
import { useCurrentPages } from '../../contexts/Pages';
import BgImage from '../../components/BgImage';
import { colors, size, text } from '../../globals';
import auth, { FirebaseAuthTypes } from '@react-native-firebase/auth';

const Home = () => {
  const navigation = useNavigation<StackTypes>();
  const { currentPage, setCurrentPage } = useCurrentPages();
  const [disabled, setDisabled] = useState<boolean>(false);
  const [user, setUser] = useState<FirebaseAuthTypes.User | null>(null);
  const colorDisabled = disabled ? colors.originalGrey : colors.lightTransWhite;
  const [loggedOut, setLoggedOut] = useState<boolean>(false);

  useEffect(() => {
    setCurrentPage('home');
    const unsubscribe = auth().onAuthStateChanged((_user) => {
      setUser(_user);
      setLoggedOut(false);
    });

    user?.email ? setDisabled(false) : setDisabled(true);
    console.log(user, currentPage);
    return unsubscribe;
  }, [currentPage, disabled, user, colorDisabled]);

  const consultPlate = () => {};

  const preSignOut = () => {
    setLoggedOut(true);
  };

  const signOut = () => {
    auth().signOut();
    setLoggedOut(false);
  };

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
          {loggedOut && <Text style={styles.textLogout}>{text.questionLeaving} </Text>}
          <TouchableOpacity
            style={styles.navIconBack}
            onPress={() => {
              navigation.navigate('Splash');
            }}
          >
            <MatComIcons
              _matComName={'arrow-left-bold'}
              _matComSize={size.mIcon}
              _matComColor={colors.lightTransWhite}
            />
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.navIconInstructions}
            onPress={() => {}}
            disabled={disabled}
          >
            <MatComIcons
              _matComName={'book-open-page-variant-outline'}
              _matComSize={size.mIcon}
              _matComColor={colorDisabled}
            />
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.navIconClose}
            onPress={() => {
              handleBackButton();
            }}
            disabled={false}
          >
            <MatComIcons
              _matComName={'window-close'}
              _matComSize={size.mIcon}
              _matComColor={colors.lightTransWhite}
            />
          </TouchableOpacity>

          {!user ? (
            <TouchableOpacity
              style={styles.navIconAccount}
              onPress={() => {
                navigation.navigate('Register');
              }}
              disabled={false}
            >
              <MatComIcons
                _matComName={'account-plus'}
                _matComSize={size.mIcon}
                _matComColor={colors.lightTransWhite}
              />
            </TouchableOpacity>
          ) : (
            <TouchableOpacity style={styles.navIconAccount} onPress={() => {}} disabled={false}>
              <MatComIcons
                _matComName={'account-edit'}
                _matComSize={size.mIcon}
                _matComColor={colors.lightTransWhite}
              />
            </TouchableOpacity>
          )}

          <TouchableOpacity style={styles.navIconList} onPress={() => {}} disabled={disabled}>
            <MatComIcons
              _matComName={'format-list-group'}
              _matComSize={size.mIcon}
              _matComColor={colorDisabled}
            />
          </TouchableOpacity>

          {!user ? (
            <TouchableOpacity
              style={styles.navIconLog}
              onPress={() => {
                navigation.navigate('Login');
              }}
              disabled={false}
            >
              <MatComIcons
                _matComName={'login'}
                _matComSize={size.mIcon}
                _matComColor={colors.lightTransWhite}
              />
            </TouchableOpacity>
          ) : (
            <TouchableOpacity
              style={styles.navIconLog}
              onPress={() => {
                preSignOut();
              }}
              disabled={false}
            >
              <MatComIcons
                _matComName={'logout'}
                _matComSize={size.mIcon}
                _matComColor={colors.lightTransWhite}
              />
            </TouchableOpacity>
          )}
        </View>

        {!loggedOut ? (
          <View style={styles.buttons}>
            <Button
              onPress={() => {
                navigation.navigate('Model');
              }}
              title="Consulta p/ Modelo"
            />
            <Button disabled={disabled} onPress={() => {}} title="Consulta p/ Placa" />
          </View>
        ) : (
          <View style={styles.buttonsLogOut}>
            <View style={styles.exitButtons}>
              <Button
                onPress={() => {
                  signOut();
                }}
                title="Sair"
              />
            </View>
            <View style={styles.exitButtons}>
              <Button
                disabled={disabled}
                onPress={() => {
                  setLoggedOut(false);
                }}
                title="Cancelar"
                backgroundColor={colors.originalBlack}
              />
            </View>
          </View>
        )}
      </View>
    </>
  );
};

export default Home;
