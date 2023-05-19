import React, { ReactNode, useEffect, useState } from 'react';
import styles from './style';
import { Text, View } from 'react-native';
import BgImage from '../../components/BgImage';
import { useSelects } from '../../contexts/Select';
import firestore from '@react-native-firebase/firestore';
import CustomNavigation from '../../components/CustomNavigation';
import { ScrollView } from 'react-native-gesture-handler';

interface VehicleProps {
  id: string;

  brand: string;
  model: string;
  yearModel: number;
  price: number;
  currentDate: Date;
}

export default function Saved() {
  const { isLoading, setIsLoading } = useSelects();
  const [vehicles, setVehicles] = useState<VehicleProps[]>([]);

  useEffect(() => {
    setIsLoading(true);

    const subscribe = firestore()
      .collection('veiculos')
      .onSnapshot((querySnapshot) => {
        const data = querySnapshot.docs.map((doc) => {
          return {
            id: doc.id,
            ...doc.data(),
          };
        }) as VehicleProps[];
        setVehicles(data);
        console.log(vehicles);
        setIsLoading(false);
      });

    return () => subscribe();
  }, []);

  return (
    <>
      <BgImage />
      <View style={styles.container}>
        <ScrollView>
          <View style={styles.scroll}>
            {vehicles.map((item) => (
              <View key={item.id} style={[styles.vehicleContainer, styles.shadowProps]}>
                <Text style={[styles.text, styles.shadowProps]}>Marca: {item.brand}</Text>
                <Text style={[styles.text, styles.shadowProps]}>Modelo: {item.model}</Text>
                <Text style={[styles.text, styles.shadowProps]}>Ano: {item.yearModel}</Text>
                <Text style={[styles.text, styles.shadowProps]}>Preço: {item.price}</Text>
                <Text style={[styles.text, styles.shadowProps]}>
                  Data: {item.currentDate.toString()}
                </Text>
              </View>
            ))}
          </View>
        </ScrollView>
      </View>

      <CustomNavigation
        pageTitle="Salvos"
        onPress={() => {
          setVehicles(vehicles);
        }}
        navIconAlert={styles.navIconAlert}
      />
    </>
  );
}
