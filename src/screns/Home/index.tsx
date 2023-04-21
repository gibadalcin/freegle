import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, Text, TouchableOpacity, Alert } from 'react-native';
import Button from '../../components/Buttons/Button';
import { StackTypes } from '../../routes/Stack';
import styles from './style';
import { useAuth } from '../../contexts/Auth';

const Home = () => {
  const navigation = useNavigation<StackTypes>();
  const { signed, signOut, user } = useAuth();
  //console.log(signed);
  //console.log(user);

  function handleSignOut() {
    signOut();
    Alert.alert('Esta funcionalidade ainda não está disponível!');
  }

  function consultPlate() {}

  return (
    <View style={styles.container}>
      <Button
        onPress={() => {
          navigation.navigate('Model');
        }}
        title="Consultar Modelo"
      />
      {signed && <Button onPress={handleSignOut} title="Consultar Placa" />}

      <View style={styles.containerText}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Login');
          }}
        >
          <Text style={styles.loginTextLogin}>Login</Text>
        </TouchableOpacity>
        <Text style={styles.loginText}>|</Text>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Register');
          }}
        >
          <Text style={styles.loginText}>Registre-se</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Home;
