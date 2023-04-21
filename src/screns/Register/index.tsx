import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { View, Alert } from 'react-native';
import Button from '../../components/Buttons/Button';
import { StackTypes } from '../../routes/Stack';
import styles from './style';
import InputText from '../../components/Inputs/Text';
import Arrow from '../../components/ModelIcon';

const Register = () => {
  const navigation = useNavigation<StackTypes>();
  const [emailField, setEmailField] = useState<string>('');
  const [passField, setPassField] = useState<string>('');

  const handleLoginButton = () => {
    Alert.alert(emailField);
    Alert.alert(passField);
  };

  const handleRegisterButton = () => {
    navigation.navigate('Register');
  };

  return (
    <View style={styles.container}>
      <View style={styles.arrowField}>
        <Arrow
          name={'reply'}
          size={50}
          color={'#000000cc'}
          onPress={() => {
            navigation.navigate('Home');
          }}
        />
      </View>
      <InputText
        name={'Email'}
        placeDescription={'Email...'}
        onChange={(t: React.SetStateAction<string>) => setEmailField(t)}
        keyboard={'email-address'}
        secureText={false}
        autoCap="none"
        value={emailField}
      />
      <InputText
        name={'Senha'}
        placeDescription={'Senha...'}
        value={passField}
        onChange={(t: React.SetStateAction<string>) => setPassField(t)}
        secureText
        autoCap="none"
      />
      <InputText
        name={'Confirme a Senha'}
        placeDescription={'Confirme a senha...'}
        onChange={function (t: string): void {
          throw new Error('Function not implemented.');
        }}
        value={''}
        secureText={true}
      />
      <View>
        <Button
          //disabled
          onPress={() => {
            navigation.navigate('Login');
          }}
          title="Salvar"
        />
      </View>
    </View>
  );
};

export default Register;
