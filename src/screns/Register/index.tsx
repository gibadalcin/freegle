import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { View, TouchableOpacity, Text, BackHandler } from 'react-native';
import Button from '../../components/Buttons/Button';
import { StackTypes } from '../../routes/Stack';
import styles from './style';
import InputText from '../../components/Inputs/Text';
import { AntDesignIcon, EntypoIcon, FontAwesome5Icon } from '../../components/ModelIcon';
import Auth from '@react-native-firebase/auth';
import validator from 'validator';
import TextPassStrengthBar from '../../components/ProgressBars/PassStrengthBar';
import BgImage from '../../components/BgImage';

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
  const [isValid, setIsValid] = useState<boolean>(true);
  const [textMessageView, setTextMessageView] = useState<string>('');
  const [isLoading, setIsLoading] = useState(false);
  const [showError, setShowError] = useState<boolean>(false);
  const [TextPassStrength, setTextPassStrength] = useState<String>('');
  const [colorBar, setColorBar] = useState<string>('transparent');
  const [progressBar, setProgressBar] = useState<number>(0);
  const [stateIsValid, setStateIsValid] = useState<boolean>(true);
  const [navPosition, setNavPosition] = useState<'left' | 'right'>('left');

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
    const isConfirmed = pass === confirmPass && pass && emailRegex.test(email) && !stateIsValid;
    setDisabled(!isConfirmed);
    setIsValid(false);
    setStateIsValid(true);

    if (pass.length < 8 && pass) {
      setTextMessageView('A senha deve ter no mínimo 8 caracteres');
    } else if (pass !== confirmPass && pass.length === confirmPass.length) {
      setTextMessageView('As senhas são diferentes');
    } else if (pass.length !== confirmPass.length && confirmPass && pass) {
      setTextMessageView('As senhas têm comprimento diferente');
    } else {
      setStateIsValid(false);
    }

    if (!emailRegex.test(email) && pass === confirmPass && pass) {
      setTextMessageView('Por favor preencha o email corretamente');
      setIsValid(true);
    } else {
      stateIsValid ? setIsValid(true) : setIsValid(false);
    }
  }, [confirmPass, pass, email, emailRegex, disabled, stateIsValid]);

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
      setTextPassStrength('Forte');
      setColorBar('#39ff14');
      setProgressBar(1);
    } else if (pass === '' && !state) {
      setTextPassStrength('');
      setColorBar('transparent');
      setProgressBar(0);
    } else {
      setTextPassStrength('Fraca');
      setColorBar('red');
      setProgressBar(0.5);
    }
  }, [pass, colorBar, progressBar]);

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

  /*
   * Funções de ação
   */
  const handleRegisterButton = () => {
    signUp();
    //clearFields();
  };

  const toggleHidePass = () => {
    setHidePassword(!hidePassword);
    hidePassword ? setIconEyePass('eye-with-line') : setIconEyePass('eye');
  };

  const toggleHideConfirm = () => {
    setHideConfirmPass(!hideConfirmPass);
    hideConfirmPass ? setIconEyeConfirm('eye-with-line') : setIconEyeConfirm('eye');
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
            <View style={styles.reversePosition}>
              <AntDesignIcon antName={'swap'} antSize={50} antColor={'#ffffffbb'} />
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.navIconBack, { [navPosition]: '46%' }]}
            onPress={() => {
              navigation.navigate('Home');
            }}
            disabled={false}
          >
            <AntDesignIcon antName={'arrowleft'} antSize={36} antColor={'#ffffffbb'} />
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.navIconClose, { [navPosition]: '103%' }]}
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
              navigation.navigate('Login');
            }}
            disabled={false}
          >
            <EntypoIcon entName={'user'} entSize={32} entColor={'#ffffffbb'} />
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
              <EntypoIcon entName={iconEyeConfirm} entSize={28} entColor={'#00000099'} />
            </TouchableOpacity>
          </View>

          <View>
            <Button
              disabled={disabled}
              isLoading={isLoading}
              onPress={handleRegisterButton}
              title="Salvar"
            />
          </View>
        </View>
      </View>
    </>
  );
};

export default Register;
