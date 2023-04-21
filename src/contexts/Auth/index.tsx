import React, { ReactNode, createContext, useState, useEffect, useContext } from 'react';
import * as auth from '../../services/Auth';
import api from '../../services/Api';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { View, ActivityIndicator } from 'react-native';
import styles from './style';

interface AuthContextData {
  signed: boolean;
  user: object | null;
  signIn(): Promise<void>;
  signOut(): Promise<void>;
}

interface AuthProviderProps {
  children: ReactNode;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<object | null>(null);
  const [loading, setloading] = useState(true);
  useEffect(() => {
    async function loadStorageData() {
      const storageUser = await AsyncStorage.getItem('@freegleAuth: pass');
      const storageToken = await AsyncStorage.getItem('@freegleAuth: token');

      if (storageUser && storageToken) {
        api.defaults.headers['Authorization'] = `Bearer ${storageToken}`;
        setUser(JSON.parse(storageUser));
      }
      setloading(false);
    }

    loadStorageData();
  }, []);

  async function signIn() {
    const response = await auth.signIn();
    setUser(response.user);

    await AsyncStorage.setItem('@freegleAuth: user', JSON.stringify(response.user));
    await AsyncStorage.setItem('@freegleAuth: token', response.token);
  }

  async function signOut() {
    AsyncStorage.clear().then(() => {
      setUser(null);
    });
  }

  if (loading) {
    return (
      <View style={styles.loading}>
        <ActivityIndicator size="large" color={'#666'} />
      </View>
    );
  }
  return (
    <AuthContext.Provider value={{ signed: !!user, user, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};

export function useAuth() {
  const context = useContext(AuthContext);
  return context;
}
