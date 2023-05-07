import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Alert } from 'react-native';
import { StackTypes } from '../../routes/Stack';
import styles from './style';
import InputText from '../../components/Inputs/Text';
import Button from '../../components/Buttons/Button';
import { EntypoIcon } from '../../components/ModelIcon';
import BgImage from '../../components/BgImage';

const Login = () => {
  const [isLoading, setIsLoading] = useState(false);
  const navigation = useNavigation<StackTypes>();
  const [emailField, setEmailField] = useState<string>('');
  const [passField, setPassField] = useState<string>('');
  const [status] = useState<string>('');

  function handleLoginButton() {
    setIsLoading(true);
    setTimeout(() => {
      navigation.navigate('Home');
      setIsLoading(false);
    }, 2000);
  }

  const handleForgetButton = () => {
    Alert.alert('O link de redefinição foi enviado para o email cadastrado!');
  };

  const handleRegisterButton = () => {
    navigation.navigate('Register');
  };

  return (
    <>
      <BgImage />
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.arrowField}
          onPress={() => {
            navigation.navigate('Home');
          }}
        >
          <EntypoIcon entName={'arrow-long-left'} entSize={40} entColor={'#ffffff'} />
        </TouchableOpacity>
        <InputText
          name={'Email'}
          placeDescription={'Email...'}
          value={emailField}
          onChange={(t: React.SetStateAction<string>) => setEmailField(t)}
          keyboard={'email-address'}
          secureText={false}
          autoCap="none"
        />
        <InputText
          name={'Senha'}
          placeDescription={'Senha...'}
          value={passField}
          onChange={(t: React.SetStateAction<string>) => setPassField(t)}
          secureText
          autoCap="none"
        />

        <View style={styles.containerText}>
          <TouchableOpacity onPress={handleRegisterButton}>
            <Text style={styles.loginTextRegister}>Registre-se</Text>
          </TouchableOpacity>

          <Text style={styles.loginText}>|</Text>

          <TouchableOpacity onPress={handleForgetButton}>
            <Text style={styles.loginTextPass}>Esqueci minha senha</Text>
          </TouchableOpacity>
        </View>

        <View>
          <Button
            //disabled
            onPress={handleLoginButton}
            title="Entrar"
            isLoading={isLoading}
          />
        </View>

        <Text style={styles.statusLogin}>{status}</Text>
      </View>
    </>
  );
};

export default Login;
