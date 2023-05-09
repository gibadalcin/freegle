import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, Alert, BackHandler } from 'react-native';
import { StackTypes } from '../../routes/Stack';
import styles from './style';
import InputText from '../../components/Inputs/Text';
import Button from '../../components/Buttons/Button';
import { AntDesignIcon, EntypoIcon, FontAwesome5Icon } from '../../components/ModelIcon';
import BgImage from '../../components/BgImage';
import Auth from '@react-native-firebase/auth';
import colors from '../../Globals/Colors';
import size from '../../Globals/Sizes';
import text from '../../Globals/Text';

const Login = () => {
  const [isLoading, setIsLoading] = useState(false);
  const navigation = useNavigation<StackTypes>();
  const [email, setEmail] = useState<string>('');
  const [pass, setPass] = useState<string>('');
  const [disabled, setDisabled] = useState<boolean>(true);
  const [hidePassword, setHidePassword] = useState(true);
  const [iconEyePass, setIconEyePass] = useState<string>('eye');
  const [textMessageView, setTextMessageView] = useState<string>('');
  const [showError, setShowError] = useState<boolean>(false);
  const [navPosition, setNavPosition] = useState<'left' | 'right'>('left');
  const [passIsValid, setPassIsValid] = useState<boolean>(true);
  const [emailIsValid, setEmailIsValid] = useState<boolean>(false);

  const emailRegex = text.emailValidationRegex;
  const colorIntensity = passIsValid || showError ? colors.lightTransBlack : 'transparent';
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
    const isConfirmed = pass && emailRegex.test(email) && !emailIsValid;
    setDisabled(!isConfirmed);
    setPassIsValid(false);
    setEmailIsValid(true);

    if (pass.length < 8 && email && emailRegex.test(email)) {
      setTextMessageView(text.minPassLentgth);
      setPassIsValid(false);
    } else {
      setEmailIsValid(false);
    }

    if (!emailRegex.test(email) && pass.length >= 8) {
      setTextMessageView(text.wrongEmail);
      setPassIsValid(true);
    } else {
      emailIsValid ? setPassIsValid(true) : setPassIsValid(false);
    }
  }, [pass, email, emailRegex, disabled, emailIsValid]);

  /*
   * Funções de ação
   */
  const handleLogin = () => {
    signIn();
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
    setPassIsValid(false);
  };

  /*
   * Firebase - Api
   */
  const signIn = () => {
    setIsLoading(true);
    Auth()
      .signInWithEmailAndPassword(email, pass)
      .then((userCredential) => {
        console.log('usuário logado ', userCredential);
        timeToLogin();
        setIsLoading(false);
        //navigation.navigate('Home');
        clearFields();
      })
      .catch((error) => {
        switch (error.code) {
          case 'auth/wrong-password':
            setTextMessageView(text.wrongPass);
            setShowError(true);
            setIsLoading(false);
            break;
          case 'auth/user-not-found':
            setTextMessageView(text.emailNotExist);
            setShowError(true);
            setIsLoading(false);
            timeToError();
            break;
          default:
            setIsLoading(false);
            console.log(error.code);
        }
      });
  };

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
      navigation.navigate('Login');
    }, 3000);
  };

  return (
    <>
      <BgImage />
      <View style={[styles.bgIntensity, { backgroundColor: `${colorIntensity}` }]} />
      <View style={styles.container}>
        {passIsValid ? showMessageView : showError && showMessageView}
        {passIsValid ? showIconMessageView : showError && showIconMessageView}

        <View style={styles.form} /* message and button input block*/>
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
              onChange={(t: React.SetStateAction<string>) => setPass(t)}
              secureText={hidePassword}
              autoCap="none"
              value={pass}
            />
            <TouchableOpacity style={styles.eye} onPress={toggleHidePass}>
              <EntypoIcon
                entName={iconEyePass}
                entSize={size.sIcon}
                entColor={colors.middleTransBlack}
              />
            </TouchableOpacity>
          </View>

          <View>
            <Button
              disabled={disabled}
              isLoading={isLoading}
              onPress={handleLogin}
              title="Entrar"
            />
          </View>
        </View>

        <View
          style={[styles.customNav, { [navPosition]: '-40%' }]} /*black hole navigation block */
        >
          <TouchableOpacity style={styles.customNavButtom} onPress={toggleReverse}>
            <View style={[styles.reversePosition, { [navPosition]: '12%' }]}>
              <AntDesignIcon
                antName={'swap'}
                antSize={size.bIcon}
                antColor={colors.lightTransWhite}
              />
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.navIconBack, { [navPosition]: '48%' }]}
            onPress={() => {
              navigation.navigate('Home');
            }}
            disabled={false}
          >
            <AntDesignIcon
              antName={'arrowleft'}
              antSize={size.mIcon}
              antColor={colors.lightTransWhite}
            />
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.navIconClose, { [navPosition]: '104%' }]}
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
            style={[styles.navIconLogin, { [navPosition]: '90%' }]}
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
        </View>
      </View>
    </>
  );
};

export default Login;
