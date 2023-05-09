import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, Alert, BackHandler } from 'react-native';
import { StackTypes } from '../../routes/Stack';
import styles from './style';
import InputText from '../../components/Inputs/Text';
import Button from '../../components/Buttons/Button';
import { AntDesignIcon, EntypoIcon, FontAwesome5Icon } from '../../components/ModelIcon';
import BgImage from '../../components/BgImage';
import TextPassStrengthBar from '../../components/ProgressBars/PassStrengthBar';
import Auth from '@react-native-firebase/auth';

const Login = () => {
  const [isLoading, setIsLoading] = useState(false);
  const navigation = useNavigation<StackTypes>();
  const [email, setEmail] = useState<string>('');
  const [pass, setPass] = useState<string>('');
  const [status] = useState<string>('');
  const [disabled, setDisabled] = useState<boolean>(true);
  const [hidePassword, setHidePassword] = useState(true);
  const [iconEyePass, setIconEyePass] = useState<string>('eye');
  const [iconEyeConfirm, setIconEyeConfirm] = useState<string>('eye');
  const [isValid, setIsValid] = useState<boolean>(true);
  const [textMessageView, setTextMessageView] = useState<string>('');
  const [showError, setShowError] = useState<boolean>(false);
  const [navPosition, setNavPosition] = useState<'left' | 'right'>('left');
  const [stateIsValid, setStateIsValid] = useState<boolean>(true);

  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const colorIntensity = isValid || showError ? '#000000bb' : 'transparent';
  const showMessageView = (
    <View style={styles.replyStatus}>
      <Text style={styles.replyTextStatus}>{textMessageView}</Text>
    </View>
  );
  const showIconMessageView = (
    <View style={styles.attention}>
      <FontAwesome5Icon awe5Name={'exclamation'} awe5Size={48} awe5Color={'yellow'} />
    </View>
  );

  //- Validação tela de registro
  useEffect(() => {
    const isConfirmed = pass && emailRegex.test(email) && !stateIsValid;
    setDisabled(!isConfirmed);
    setIsValid(false);
    setStateIsValid(true);

    if (pass.length < 8 && email && pass && emailRegex.test(email)) {
      setTextMessageView('A senha deve ter no mínimo 8 caracteres');
    } else {
      setStateIsValid(false);
    }

    if (!emailRegex.test(email) && pass.length >= 8) {
      setTextMessageView('Por favor preencha o email corretamente');
      setIsValid(true);
    } else {
      stateIsValid ? setIsValid(true) : setIsValid(false);
    }
  }, [pass, email, emailRegex, disabled, stateIsValid]);

  /*
   * Funções de timer
   */
  const timeToError = () => {
    setTimeout(() => {
      setShowError(false);
    }, 3000);
  };

  const timeToLogin = () => {
    setTimeout(() => {
      setIsLoading(false);
      navigation.navigate('Home');
    }, 3000);
  };

  /*
   * Funções de ação
   */
  const handleRegisterButton = () => {
    //signIn();
    clearFields();
  };

  const toggleHidePass = () => {
    setHidePassword(!hidePassword);
    hidePassword ? setIconEyePass('eye-with-line') : setIconEyePass('eye');
  };

  useEffect(() => {}, [navPosition]);
  const toggleReverse = () => {
    setNavPosition(navPosition === 'left' ? 'right' : 'left');
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

  const clearFields = () => {
    setEmail('');
    setPass('');
    setDisabled(true);
  };

  /*
   * Firebase - Api
   */
  const signIn = () => {
    setIsLoading(true);
    Auth()
      .createUserWithEmailAndPassword(email, pass)
      .then((userCredential) => {
        console.log('user: ', userCredential);
        timeToLogin();
      })
      .catch((error) => {
        if (error.code === 'auth/email-already-in-use') {
          setTextMessageView('O email informado já existe!');
          setShowError(true);
          timeToError();
          setIsLoading(false);
        }
      });
  };

  return (
    <>
      <BgImage />
      <View
        style={{
          position: 'absolute',
          backgroundColor: `${colorIntensity}`,
          height: '100%',
          width: '100%',
          flex: 1,
          right: 0,
        }}
      />
      <View style={styles.container}>
        {isValid ? showMessageView : showError && showMessageView}
        {isValid ? showIconMessageView : showError && showIconMessageView}

        <View style={[styles.customNav, { [navPosition]: '-40%' }]}>
          <TouchableOpacity style={styles.customNavButtom} onPress={toggleReverse}>
            <View style={[styles.reversePosition, { [navPosition]: '12%' }]}>
              <AntDesignIcon antName={'swap'} antSize={50} antColor={'#ffffffbb'} />
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.navIconBack, { [navPosition]: '48%' }]}
            onPress={() => {
              navigation.navigate('Home');
            }}
            disabled={false}
          >
            <AntDesignIcon antName={'arrowleft'} antSize={36} antColor={'#ffffffbb'} />
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.navIconClose, { [navPosition]: '104%' }]}
            onPress={() => {
              handleBackButton();
            }}
            disabled={false}
          >
            <AntDesignIcon antName={'close'} antSize={36} antColor={'#ffffffbb'} />
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.navIconLogin, { [navPosition]: '90%' }]}
            onPress={() => {
              navigation.navigate('Register');
            }}
            disabled={false}
          >
            <EntypoIcon entName={'add-user'} entSize={32} entColor={'#ffffffbb'} />
          </TouchableOpacity>
        </View>

        <View style={styles.form}>
          <InputText
            name={'Email'}
            placeDescription={'Email...'}
            onChange={(t: React.SetStateAction<string>) => setEmail(t)}
            keyboard={'email-address'}
            secureText={false}
            autoCap="none"
            value={email}
          />

          <View style={styles.containerPass}>
            <InputText
              name={'Senha'}
              placeDescription={'Senha...'}
              value={pass}
              onChange={(t: React.SetStateAction<string>) => setPass(t)}
              secureText={hidePassword}
              autoCap="none"
            />
            <TouchableOpacity style={styles.eye} onPress={toggleHidePass}>
              <EntypoIcon entName={iconEyePass} entSize={28} entColor={'#00000099'} />
            </TouchableOpacity>
          </View>

          <View>
            <Button
              disabled={disabled}
              isLoading={isLoading}
              onPress={handleRegisterButton}
              title="Entrar"
            />
          </View>
        </View>
      </View>
    </>
  );
};

export default Login;
