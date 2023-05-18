import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { StackTypes } from '../../routes/Stack';
import styles from './style';
import InputText from '../../components/Inputs/Text';
import Button from '../../components/Buttons/Button';
import { FontAwesome5Icon, MatComIcons } from '../../components/ModelIcon';
import BgImage from '../../components/BgImage';
import Auth from '@react-native-firebase/auth';
import { colors, size, text } from '../../globals';
import CustomNavigation from '../../components/CustomNavigation';
import { useCurrentPages } from '../../contexts/Pages';

const Login = () => {
  const navigation = useNavigation<StackTypes>();
  const [isLoading, setIsLoading] = useState(false);
  const [email, setEmail] = useState<string>('');
  const [pass, setPass] = useState<string>('');
  const [disabled, setDisabled] = useState<boolean>(true);
  const [hidePassword, setHidePassword] = useState(true);
  const [iconEyePass, setIconEyePass] = useState<string>('eye');
  const [textMessageView, setTextMessageView] = useState<string>('');
  const [showError, setShowError] = useState<boolean>(false);
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
      <FontAwesome5Icon _awe5Name={'exclamation'} _awe5Size={48} _awe5Color={'yellow'} />
    </View>
  );

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

  const handledLogin = () => {
    signIn();
  };

  const toggleHidePass = () => {
    setHidePassword(!hidePassword);
    hidePassword ? setIconEyePass('eye-off') : setIconEyePass('eye');
  };

  const clearFields = () => {
    setEmail('');
    setPass('');
    setDisabled(true);
    setPassIsValid(false);
  };

  const signIn = () => {
    setIsLoading(true);
    Auth()
      .signInWithEmailAndPassword(email, pass)
      .then((userCredential) => {
        console.log('usuário logado ', userCredential);
        timeToLogin();
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

  const timeToError = () => {
    setTimeout(() => {
      setShowError(false);
    }, 3000);
  };

  const timeToLogin = () => {
    setTimeout(() => {
      navigation.navigate('Home');
      setIsLoading(false);
      clearFields();
    }, 1000);
  };

  return (
    <>
      <BgImage />
      <View style={[styles.bgIntensity, { backgroundColor: `${colorIntensity}` }]} />
      <View style={styles.container}>
        {passIsValid ? showMessageView : showError && showMessageView}
        {passIsValid ? showIconMessageView : showError && showIconMessageView}

        <CustomNavigation pageTitle={'Login'} navIconLogin={styles.navIconLogin} />

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
              <MatComIcons
                _matComName={iconEyePass}
                _matComSize={size.sIcon}
                _matComColor={colors.middleTransBlack}
              />
            </TouchableOpacity>
          </View>

          <View>
            <Button
              disabled={disabled}
              isLoading={isLoading}
              onPress={handledLogin}
              title="Entrar"
            />
          </View>
        </View>
      </View>
    </>
  );
};

export default Login;
