import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { View, TouchableOpacity, Text, BackHandler } from 'react-native';
import Button from '../../components/Buttons/Button';
import { StackTypes } from '../../routes/Stack';
import styles from './style';
import InputText from '../../components/Inputs/Text';
import { EntypoIcon, FontAwesome5Icon, MatComIcons } from '../../components/ModelIcon';
import Auth from '@react-native-firebase/auth';
import validator from 'validator';
import TextPassStrengthBar from '../../components/ProgressBars/PassStrengthBar';
import BgImage from '../../components/BgImage';
import { colors, size, text } from '../../globals';

const Register = () => {
  const navigation = useNavigation<StackTypes>();
  const [email, setEmail] = useState<string>('');
  const [pass, setPass] = useState<string>('');
  const [confirmPass, setConfirmPass] = useState<string>('');
  const [disabled, setDisabled] = useState<boolean>(true);
  const [hidePassword, setHidePassword] = useState(true);
  const [iconEyePass, setIconEyePass] = useState<string>('eye');
  const [hideConfirmPass, setHideConfirmPass] = useState(true);
  const [iconEyeConfirm, setIconEyeConfirm] = useState<string>('eye');
  const [textMessageView, setTextMessageView] = useState<string>('');
  const [isLoading, setIsLoading] = useState(false);
  const [showError, setShowError] = useState<boolean>(false);
  const [colorBar, setColorBar] = useState<string>('transparent');
  const [progressBar, setProgressBar] = useState<number>(0);
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
      <FontAwesome5Icon _awe5Name={'exclamation'} _awe5Size={48} _awe5Color={'yellow'} />
    </View>
  );

  //- Validação tela de registro
  useEffect(() => {
    const isConfirmed = pass === confirmPass && pass && emailRegex.test(email) && !emailIsValid;
    setDisabled(!isConfirmed);
    setPassIsValid(false);
    setEmailIsValid(true);

    if (pass.length < 8 && pass) {
      setTextMessageView(text.minPassLentgth);
      setPassIsValid(false);
    } else if (pass !== confirmPass && pass.length === confirmPass.length) {
      setTextMessageView('As senhas são diferentes');
    } else if (pass.length !== confirmPass.length && confirmPass && pass) {
      setTextMessageView('As senhas têm comprimento diferente');
    } else {
      setEmailIsValid(false);
    }

    if (!emailRegex.test(email) && pass === confirmPass && pass) {
      setTextMessageView(text.wrongEmail);
      setPassIsValid(true);
    } else {
      emailIsValid ? setPassIsValid(true) : setPassIsValid(false);
    }
  }, [confirmPass, pass, email, emailRegex, disabled, emailIsValid]);

  //Validação senha forte/fraca
  useEffect(() => {
    let state = false;
    validator.isStrongPassword(pass, {
      minLength: 8,
      minLowercase: 1,
      minUppercase: 1,
      minNumbers: 1,
      minSymbols: 1,
    })
      ? (state = true)
      : state;

    if (state) {
      setColorBar('#39ff14');
      setProgressBar(1);
    } else if (pass === '' && !state) {
      setColorBar('transparent');
      setProgressBar(0);
    } else {
      setColorBar('red');
      setProgressBar(0.5);
    }
  }, [pass, colorBar, progressBar]);

  /*
   * Funções de ação
   */
  const handleRegister = () => {
    signUp();
    clearFields();
  };

  const toggleHidePass = () => {
    setHidePassword(!hidePassword);
    hidePassword ? setIconEyePass('eye-off') : setIconEyePass('eye');
  };

  const toggleHideConfirm = () => {
    setHideConfirmPass(!hideConfirmPass);
    hideConfirmPass ? setIconEyeConfirm('eye-off') : setIconEyeConfirm('eye');
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
    setConfirmPass('');
    setDisabled(true);
  };

  /*
   * Firebase - Api
   */
  const signUp = () => {
    setIsLoading(true);
    Auth()
      .createUserWithEmailAndPassword(email, pass)
      .then((response) => {
        console.log('user: ', response);
        timeToLogin();
      })
      .catch((error) => {
        switch (error.code) {
          case 'auth/email-already-in-use':
            setTextMessageView('O email informado já existe!');
            setShowError(true);
            timeToError();
            setIsLoading(false);
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
      setIsLoading(false);
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

        <View style={[styles.customNav, { [navPosition]: '-40%' }]}>
          <Text style={[styles.reverseTextPage, { [navPosition]: '20%' }]}>Cadastro</Text>
          <TouchableOpacity style={styles.customNavButtom} onPress={toggleReverse}>
            <View style={[styles.reversePosition, { [navPosition]: '12%' }]}>
              <MatComIcons
                _matComName={'swap-horizontal'}
                _matComSize={size.bIcon}
                _matComColor={colors.lightTransWhite}
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
            <MatComIcons
              _matComName={'arrow-left-bold'}
              _matComSize={size.mIcon}
              _matComColor={colors.lightTransWhite}
            />
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.navIconClose, { [navPosition]: '108%' }]}
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

          <TouchableOpacity
            style={[styles.navIconLogin, { [navPosition]: '90%' }]}
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
              <MatComIcons
                _matComName={iconEyePass}
                _matComSize={size.sIcon}
                _matComColor={colors.middleTransBlack}
              />
            </TouchableOpacity>

            <View style={styles.bar}>
              <TextPassStrengthBar
                color={colorBar}
                styleAttr={'Horizontal'}
                indeterminate={false}
                progress={progressBar}
              />
            </View>
          </View>

          <View style={styles.containerPass}>
            <InputText
              name={'Confirme a Senha'}
              placeDescription={'Confirme a senha...'}
              onChange={(t: React.SetStateAction<string>) => {
                setConfirmPass(t);
              }}
              value={confirmPass}
              secureText={hideConfirmPass}
            />
            <TouchableOpacity style={styles.eye} onPress={toggleHideConfirm}>
              <MatComIcons
                _matComName={iconEyeConfirm}
                _matComSize={size.sIcon}
                _matComColor={colors.middleTransBlack}
              />
            </TouchableOpacity>
          </View>

          <View>
            <Button
              disabled={disabled}
              isLoading={isLoading}
              onPress={handleRegister}
              title="Salvar"
            />
          </View>
        </View>
      </View>
    </>
  );
};

export default Register;
