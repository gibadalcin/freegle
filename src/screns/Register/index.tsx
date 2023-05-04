import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { View, Alert, TouchableOpacity, Text, ProgressBarAndroidComponent } from 'react-native';
import Button from '../../components/Buttons/Button';
import { StackTypes } from '../../routes/Stack';
import styles from './style';
import InputText from '../../components/Inputs/Text';
import { AntDesignIcon, EntypoIcon } from '../../components/ModelIcon';
import Auth from '@react-native-firebase/auth';
import validator from 'validator';
import TextPassStrengthBar from '../../components/ProgressBars/PassStrengthBar';

const Register = () => {
  const navigation = useNavigation<StackTypes>();
  const [email, setEmail] = useState<string>('');
  const [pass, setPass] = useState<string>('');
  const [confirmPass, setConfirmPass] = useState<string>('');
  const [disabled, setDisabled] = useState<boolean>(true);
  const [hidePassword, setHidePassword] = useState(true);
  const [iconEyePass, setIconEyePass] = useState<string>('eye-with-line');
  const [hideConfirmPass, setHideConfirmPass] = useState(true);
  const [iconEyeConfirm, setIconEyeConfirm] = useState<string>('eye-with-line');
  const [isValid, setIsValid] = useState<boolean>(true);
  const [textMessageView, setTextMessageView] = useState<string>('');
  const [isLoading, setIsLoading] = useState(false);
  const [showError, setShowError] = useState<boolean>(false);
  const [TextPassStrength, setTextPassStrength] = useState<String>('');
  const [colorBar, setColorBar] = useState<string>('');
  const [progressBar, setProgressBar] = useState<number>(0);
  const [showTextRef, setShowTextRef] = useState<number>(4);
  const [stateIsValid, setStateIsValid] = useState<boolean>(true);
  const [stateValidator, setStateValidator] = useState<boolean>(false);

  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const colorIntensity = isValid || showError ? '#000000bb' : 'transparent';
  const showMessageView = <Text style={styles.statusResponse}>{textMessageView}</Text>;
  const showIconMessageView = (
    <View style={styles.attention}>
      <AntDesignIcon antName={'warning'} antSize={28} antColor={'yellow'} />
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
      pass !== confirmPass ? setShowTextRef(1) : setShowTextRef(2);
    } else {
      setStateIsValid(false);
    }

    if (!emailRegex.test(email) && pass === confirmPass && pass) {
      setTextMessageView('Por favor preencha o email corretamente');
      setIsValid(true);
    } else {
      stateIsValid ? setIsValid(true) : setIsValid(false);
    }
  }, [confirmPass, pass, email, emailRegex, disabled, stateIsValid, showTextRef]);

  //Validação senha forte/fraca
  useEffect(() => {
    validator.isStrongPassword(pass, {
      minLength: 8,
      minLowercase: 1,
      minUppercase: 1,
      minNumbers: 1,
      minSymbols: 1,
    })
      ? setStateValidator(true)
      : stateValidator;

    if (stateValidator) {
      setTextPassStrength('Forte');
      setColorBar('green');
      setProgressBar(1);
    } else if (pass === '' && !stateValidator) {
      setTextPassStrength('');
      setColorBar('transparent');
      setProgressBar(0);
    } else {
      setTextPassStrength('Fraca');
      setColorBar('red');
      setProgressBar(0.5);
    }
  }, [pass, colorBar, progressBar, showTextRef, stateValidator]);

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
    hidePassword ? setIconEyePass('eye') : setIconEyePass('eye-with-line');
  };

  const toggleHideConfirm = () => {
    setHideConfirmPass(!hideConfirmPass);
    hideConfirmPass ? setIconEyeConfirm('eye') : setIconEyeConfirm('eye-with-line');
  };

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

        <View style={styles.arrowField}>
          <EntypoIcon
            entName={'arrow-long-left'}
            entSize={40}
            entColor={'#ffffff'}
            entOnPress={() => {
              navigation.navigate('Home');
            }}
          />
        </View>

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
          <View style={styles.eye}>
            <EntypoIcon
              entName={iconEyePass}
              entSize={28}
              entColor={'#00000099'}
              entOnPress={toggleHidePass}
            />
          </View>
          <View style={styles.passStrength}>
            <Text style={styles.passStrengthText}>{TextPassStrength}</Text>
          </View>
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
          <View style={styles.eye}>
            <EntypoIcon
              entName={iconEyeConfirm}
              entSize={28}
              entColor={'#00000099'}
              entOnPress={toggleHideConfirm}
            />
          </View>
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
    </>
  );
};

export default Register;
