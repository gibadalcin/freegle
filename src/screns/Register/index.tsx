import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { View, Alert, TouchableOpacity, Text } from 'react-native';
import Button from '../../components/Buttons/Button';
import { StackTypes } from '../../routes/Stack';
import styles from './style';
import InputText from '../../components/Inputs/Text';
import { AntDesignIcon, EntypoIcon } from '../../components/ModelIcon';
import Auth from '@react-native-firebase/auth';

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
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const [isValid, setIsValid] = useState<boolean>(true);
  const [textMessageView, setTextMessageView] = useState<string>('');
  const [isLoading, setIsLoading] = useState(false);
  const [showError, setShowError] = useState<boolean>(false);
  const showMessageView = <Text style={styles.statusResponse}>{textMessageView}</Text>;
  const showIconMessageView = (
    <View style={styles.attention}>
      <AntDesignIcon antName={'warning'} antSize={28} antColor={'yellow'} />
    </View>
  );

  useEffect(() => {
    const isConfirmed =
      pass === confirmPass && pass && emailRegex.test(email) && comparePasswords();
    setDisabled(!isConfirmed);
    setIsValid(false);

    if (!emailRegex.test(email) && pass === confirmPass && pass) {
      setTextMessageView('Por favor preencha o email corretamente');
      setIsValid(true);
    } else {
      comparePasswords();
    }
  }, [confirmPass, pass, email, emailRegex, disabled]);

  const comparePasswords = () => {
    if (pass.length !== confirmPass.length && confirmPass) {
      setTextMessageView('As senhas têm comprimentos diferentes');
      setIsValid(true);
      console.log('caralho');
    } else if (pass !== confirmPass && pass.length === confirmPass.length) {
      setTextMessageView('As senhas são diferentes');
      setIsValid(true);
    } else if (pass.length < 6 && pass) {
      setTextMessageView('As senha deve ter no mínimo 6 caracteres');
      setIsValid(true);
    } else {
      setIsValid(false);
    }

    // Todas as posições correspondem, as senhas são iguais
    return true;
  };

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
          setShowError(true);
          setTextMessageView('O email informado já existe!');
          timeToError();
        } else if (error.code === 'auth/invalid-email') {
          setShowError(true);
          setTextMessageView('O email informado é inválido!');
          timeToError();
        }
      });
  };

  const timeToError = () => {
    setTimeout(() => {
      setIsLoading(false);
      setShowError(false);
      setTextMessageView('');
    }, 3000);
  };

  const timeToLogin = () => {
    setTimeout(() => {
      setIsLoading(false);
      navigation.navigate('Login');
    }, 3000);
  };

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
  };

  return (
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
  );
};

export default Register;
