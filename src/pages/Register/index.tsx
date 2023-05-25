import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { View, TouchableOpacity, ActivityIndicator } from 'react-native';
import { StackTypes } from '../../routes/Stack';
import styles from './style';
import InputText from '../../components/Inputs/Text';
import { MatComIcons } from '../../components/ModelIcon';
import Auth from '@react-native-firebase/auth';
import validator from 'validator';
import TextPassStrengthBar from '../../components/ProgressBars/PassStrengthBar';
import { colors, height, size, text, width } from '../../globals/Useful';
import { useCurrentConditional } from '../../contexts/Conditional';
import { useCurrentMessage } from '../../contexts/Messages';
import CustomNavigation from '../../components/NavControler';
import BgImage from '../../components/BgImage';
import { useCommon } from '../../contexts/CommonUse';

const Register = () => {
  const { initializing, setInitializing } = useCommon();
  const navigation = useNavigation<StackTypes>();
  const {
    disabledButtomRegister,
    setDisabledButtomRegister,
    validatedRegistration,
    setValidatedRegistration,
    showApplicationForm,
    setShowRegistrationScreen,
  } = useCurrentConditional();
  const { registrationStatusMessage, setRegistrationStatusMessage, errorMessage, setErrorMessage } =
    useCurrentMessage();

  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const [confirmPass, setConfirmPass] = useState('');
  const [hidePassword, setHidePassword] = useState(true);
  const [iconEyePass, setIconEyePass] = useState('eye');
  const [hideConfirmPass, setHideConfirmPass] = useState(true);
  const [iconEyeConfirm, setIconEyeConfirm] = useState('eye');
  const [priorityMessage, setPriorityMessage] = useState(false);
  const [colorBar, setColorBar] = useState('transparent');
  const [progressBar, setProgressBar] = useState(0);
  const [emailIsValid, setEmailIsValid] = useState(false);
  const emailRegex = text.emailValidationRegex;

  useEffect(() => {
    const isConfirmed = pass === confirmPass && pass && emailRegex.test(email) && !emailIsValid;
    setDisabledButtomRegister(!isConfirmed);
    setValidatedRegistration(!!isConfirmed);
    setEmailIsValid(false);

    if (pass.length < 8 && pass) {
      setRegistrationStatusMessage(text.minPassLength);
    } else if (pass !== confirmPass && pass.length === confirmPass.length) {
      setRegistrationStatusMessage(text.differentPass);
    } else if (pass.length !== confirmPass.length && confirmPass && pass) {
      setRegistrationStatusMessage(text.passHaveDifferentLengths);
    } else if (!emailRegex.test(email) && pass === confirmPass && pass && !priorityMessage) {
      setRegistrationStatusMessage(text.wrongEmail);
    } else if (validatedRegistration) {
      setRegistrationStatusMessage(text.saveRecord);
      if (!errorMessage && priorityMessage) {
        setRegistrationStatusMessage(text.successfullyRegistered);
      }
    } else {
      if (priorityMessage) {
        setRegistrationStatusMessage(text.emailAlreadyExists);
      } else {
        setRegistrationStatusMessage(text.fillingSuggestion);
      }
    }
  }, [
    confirmPass,
    pass,
    email,
    emailRegex,
    disabledButtomRegister,
    emailIsValid,
    registrationStatusMessage,
  ]);

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

  const handleRegister = () => {
    if (email && pass) {
      signUp();

      initialClear();
    }
  };

  const signUp = () => {
    Auth()
      .createUserWithEmailAndPassword(email, pass)
      .then((response) => {
        console.log('user: ', response);
        clearFields();
      })
      .catch((error) => {
        if ('auth/email-already-in-use') {
          clearError();
        } else {
          console.log(error.code);
        }
      });
  };

  const initialClear = () => {
    setValidatedRegistration(false);
    setRegistrationStatusMessage('');
    setErrorMessage(false);
    setPriorityMessage(true);
    setInitializing(true);
  };

  const clearError = () => {
    setEmail('');
    setRegistrationStatusMessage('');
    setErrorMessage(false);
    setPriorityMessage(false);
    setInitializing(false);
  };

  const clearFields = () => {
    setEmail('');
    setPass('');
    setConfirmPass('');
    setRegistrationStatusMessage('');
    setErrorMessage(false);
    setPriorityMessage(false);
    setPriorityMessage(false);
    setInitializing(false);
    setShowRegistrationScreen(false);
    navigation.navigate('Home');
  };

  const toggleHidePass = () => {
    setHidePassword(!hidePassword);
    hidePassword ? setIconEyePass('eye-off') : setIconEyePass('eye');
  };

  const toggleHideConfirm = () => {
    setHideConfirmPass(!hideConfirmPass);
    hideConfirmPass ? setIconEyeConfirm('eye-off') : setIconEyeConfirm('eye');
  };

  return (
    <>
      <BgImage />
      <View style={[styles.container, { height: height, width: width }]}>
        <CustomNavigation
          onPress={() => {
            handleRegister();
          }}
        />

        {initializing && (
          <View
            style={{
              flex: 1,
              position: 'absolute',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <ActivityIndicator size={60} color={colors.lightTransWhite} />
          </View>
        )}

        {showApplicationForm && (
          <View style={styles.form}>
            <InputText
              name="Email"
              placeDescription="Email..."
              onChange={(t) => setEmail(t)}
              keyboard="email-address"
              secureText={false}
              autoCap="none"
              value={email}
            />

            <View style={styles.containerPass}>
              <InputText
                name="Senha"
                placeDescription="Senha..."
                value={pass}
                onChange={(t) => setPass(t)}
                secureText={hidePassword}
                autoCap="none"
              />
              <TouchableOpacity style={styles.eye} onPress={toggleHidePass}>
                <MatComIcons
                  _matComName={iconEyePass}
                  _matComSize={size.sIcon}
                  _matComColor={colors.lightTransWhite}
                />
              </TouchableOpacity>

              <View style={styles.bar}>
                <TextPassStrengthBar
                  color={colorBar}
                  styleAttr="Horizontal"
                  indeterminate={false}
                  progress={progressBar}
                />
              </View>
            </View>

            <View style={styles.containerPass}>
              <InputText
                name="Confirme a Senha"
                placeDescription="Confirme a senha..."
                onChange={(t) => {
                  setConfirmPass(t);
                }}
                value={confirmPass}
                secureText={hideConfirmPass}
              />
              <TouchableOpacity style={styles.eye} onPress={toggleHideConfirm}>
                <MatComIcons
                  _matComName={iconEyeConfirm}
                  _matComSize={size.sIcon}
                  _matComColor={colors.lightTransWhite}
                />
              </TouchableOpacity>
            </View>
          </View>
        )}
      </View>
    </>
  );
};

export default Register;
