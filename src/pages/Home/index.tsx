import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { View, Dimensions, Text, TouchableOpacity } from 'react-native';
import { StackTypes } from '../../routes/Stack';
import styles from './style';
import BgImage from '../../components/BgImage';
import { colors } from '../../globals/Useful';
import auth, { FirebaseAuthTypes } from '@react-native-firebase/auth';
import { useCurrentConditional } from '../../contexts/Conditional';
import NavControler from '../../components/NavController';
import {
  ExitHomeButton,
  LogoutHomeButton,
  ModelHomeButton,
  PlateHomeButton,
} from '../../components/Buttons/Home';

const Home = () => {
  const navigation = useNavigation<StackTypes>();
  const { showRegistrationScreen, validatedRegistration, openLogoutModal, setOpenLogoutModal } =
    useCurrentConditional();

  const [disabled, setDisabled] = useState<boolean>(false);
  const [user, setUser] = useState<FirebaseAuthTypes.User | null>(null);
  const { width, height } = Dimensions.get('window');

  useEffect(() => {
    const unsubscribe = auth().onAuthStateChanged((_user) => {
      setUser(_user);
      setOpenLogoutModal(false);
    });

    user?.email ? setDisabled(false) : setDisabled(true);
    return unsubscribe;
  }, [user]);

  const consultPlate = () => {};

  const signOut = () => {
    auth().signOut();
    setOpenLogoutModal(false);
  };

  console.log('home:', validatedRegistration);
  return (
    <>
      <BgImage />
      <View style={[styles.container, { height: height, width: width }]}>
        <NavControler />

        {!showRegistrationScreen && !openLogoutModal && (
          <View style={styles.buttonsContainer}>
            <ModelHomeButton
              style={[styles.buttonModel, { backgroundColor: colors.specialRed }]}
              onPress={() => {
                navigation.navigate('Model');
              }}
            >
              <Text style={[styles.textButtons, { paddingTop: 10 }]}>Consulta Modelo</Text>
            </ModelHomeButton>

            <PlateHomeButton
              style={[
                styles.buttonPlate,
                {
                  backgroundColor:
                    !openLogoutModal && !user ? colors.specialTranslucid : colors.specialRed,
                },
              ]}
              disabled={!user}
              onPress={() => {}}
            >
              <Text style={[styles.textButtons, { paddingBottom: 10 }]}>Consulta Placa</Text>
            </PlateHomeButton>
          </View>
        )}

        {user && openLogoutModal && (
          <View style={styles.logoutContainer}>
            <LogoutHomeButton
              style={styles.logoutButton}
              onPress={() => {
                signOut();
              }}
            >
              <Text style={styles.textLogout}>Sair</Text>
            </LogoutHomeButton>

            <ExitHomeButton
              style={styles.exitButton}
              disabled={disabled}
              onPress={() => {
                setOpenLogoutModal(false);
              }}
            >
              <Text style={styles.textLogout}>Cancelar</Text>
            </ExitHomeButton>
          </View>
        )}
      </View>
    </>
  );
};

export default Home;
