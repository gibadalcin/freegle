import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, BackHandler, ViewStyle, StyleProp } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { size, colors, text } from '../../globals/Useful';
import styles from './style';
import { MatComIcons } from '../ModelIcon';
import { StackTypes } from '../../routes/Stack';
import { useSelects } from '../../contexts/Select';
import { useCurrentPages } from '../../contexts/Pages';
import { logMessageGeneration } from '../../globals/MessageFilter';
import auth, { FirebaseAuthTypes } from '@react-native-firebase/auth';
import { useCurrentMessage } from '../../contexts/Messages';
import { useCurrentConditional } from '../../contexts/Conditional';
import { useCommon } from '../../contexts/CommonUse';
import {
  AccountEditControler,
  BackControler,
  CloseControler,
  CustomNavControler,
  InstructionControler,
  ListControler,
  LoginControler,
  LogoutControler,
  NewAccountControler,
  TextLogoutCustomNavControler,
  TextMessageCustomNavControler,
} from './Controllers';

interface CustomNavProps {
  navIconRegister?: StyleProp<ViewStyle>;
  navIconLogin?: StyleProp<ViewStyle>;
  navIconRefresh?: StyleProp<ViewStyle>;
  navIconSave?: StyleProp<ViewStyle>;
  navIconSearch?: StyleProp<ViewStyle>;
  onPress?: () => void;
}

const CustomNavigation = ({
  navIconRegister,
  navIconLogin,
  navIconRefresh,
  navIconSearch,
  navIconSave,
  onPress,
}: CustomNavProps) => {
  const navigation = useNavigation<StackTypes>();
  const { setVehicleType, setCodeBrands, setCodeModel, setCodeYear } = useSelects();
  const { setCurrentBgPage } = useCurrentPages();
  const {
    showRegistrationScreen,
    setShowRegistrationScreen,
    disabledButtomRegister,
    setDisabledButtomRegister,
    showApplicationForm,
    setShowApplicationform,
    validatedRegistration,
    setValidatedRegistration,
    openLogoutModal,
    setOpenLogoutModal,
  } = useCurrentConditional();
  const { initializing, setInitializing } = useCommon();

  const [user, setUser] = useState<FirebaseAuthTypes.User | null>(null);
  const [disabled, setDisabled] = useState<boolean>(false);

  const colorDisabled = disabled ? colors.originalGrey : colors.lightTransWhite;
  const colorButtonDisabled = disabledButtomRegister ? colors.originalBlack : colors.specialRed;

  useEffect(() => {
    const unsubscribe = auth().onAuthStateChanged((_user) => {
      setUser(_user);
      setOpenLogoutModal(false);
    });

    setDisabled(!user?.email);
    return unsubscribe;
  }, [user]);

  const preSignOut = () => {
    console.log('abrir logout');
    setOpenLogoutModal(true);
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

  const clearfields = () => {
    setVehicleType('');
    setCodeBrands('');
    setCodeModel('');
    setCodeYear('');
    setCurrentBgPage('');
  };

  const backToHome = () => {
    setShowApplicationform(false);
    setShowRegistrationScreen(false);
    setDisabledButtomRegister(true);
    setValidatedRegistration(false);
    navigation.navigate('Home');
  };

  const backToSplash = () => {
    setInitializing(true);
    navigation.navigate('Splash');
  };

  const handleRegistration = () => {
    if (!showRegistrationScreen) {
      setShowRegistrationScreen(true);
      navigation.navigate('Register');
    }
  };
  return (
    <>
      <View style={[styles.customNav, { height: 258, width: 258 }]}>
        <CustomNavControler
          style={[
            styles.customNavButtomBg,
            { backgroundColor: colorButtonDisabled, height: 158, width: 158 },
          ]}
        />
        <CustomNavControler
          style={[
            styles.customNavButtom,
            { backgroundColor: colorButtonDisabled, height: 168, width: 168 },
          ]}
          onPress={() => {
            if (showRegistrationScreen) {
              setShowApplicationform(true);
              if (onPress && validatedRegistration) {
                onPress();
              }
            } else {
              backToHome();
            }
          }}
          disabled={showApplicationForm && disabledButtomRegister}
        >
          {!initializing && (
            <TextMessageCustomNavControler
              style={styles.messageStatus}
              text={logMessageGeneration()}
            />
          )}

          {openLogoutModal && (
            <TextLogoutCustomNavControler style={styles.textLogout} text={text.questionLeaving} />
          )}
        </CustomNavControler>

        <BackControler
          onPress={() => {
            if (showRegistrationScreen) {
              backToHome();
            } else {
              backToSplash();
            }
          }}
        />

        <InstructionControler disabled />

        <CloseControler
          onPress={() => {
            handleBackButton();
          }}
          disabled={false}
        />

        {!user && !openLogoutModal && (
          <NewAccountControler
            onPress={() => {
              handleRegistration();
            }}
            disabled={showRegistrationScreen}
          />
        )}

        {user && !openLogoutModal && <AccountEditControler onPress={() => {}} disabled={!user} />}

        <ListControler
          onPress={() => {
            navigation.navigate('Saved');
          }}
          disabled={disabled}
        />

        {!user && (
          <LoginControler
            onPress={() => {
              navigation.navigate('Login');
            }}
            disabled={showRegistrationScreen}
          />
        )}

        {user && !openLogoutModal && (
          <LogoutControler
            onPress={() => {
              preSignOut();
            }}
            disabled={!user}
          />
        )}
      </View>
    </>
  );
};

export default CustomNavigation;
