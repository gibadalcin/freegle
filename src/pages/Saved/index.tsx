import React, { ReactNode, useEffect, useState } from 'react';
import styles from './style';
import { Text, TouchableOpacity, View } from 'react-native';
import BgImage from '../../components/BgImage';
import { useSelects } from '../../contexts/Select';
import firestore from '@react-native-firebase/firestore';
import CustomNavigation from '../../components/NavController';
import { ScrollView } from 'react-native-gesture-handler';
import { MatComIcons } from '../../components/ModelIcon';
import { colors, size } from '../../globals/Useful';

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
  const [selectType, setSelectType] = useState<string>('Lista');
  const [showOptions, setShowOptions] = useState<boolean>(false);
  const iconClose = selectType === 'Lista' ? 'close' : 'refresh';

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

  const formatString = (str: string) => {
    return str.replace(/(^\w{1})|(\s+\w{1})/g, (letra) => letra.toUpperCase());
  };
  console.log(selectType);
  return (
    <>
      <BgImage />
      <View style={styles.container}>
        <ScrollView>
          <View style={styles.scroll}>
            {vehicles.map((item) => (
              <View key={item.id} style={[styles.vehicleContainer, styles.shadowProps]}>
                <Text style={[styles.text, styles.shadowProps]}>
                  Marca: {formatString(item.brand)}
                </Text>
                <Text style={[styles.text, styles.shadowProps]}>
                  Modelo: {formatString(item.model)}
                </Text>
                <Text style={[styles.text, styles.shadowProps]}>Ano: {item.yearModel}</Text>
                <Text style={[styles.text, styles.shadowProps]}>Preço: {item.price}</Text>
                <Text style={[styles.text, styles.shadowProps]}>
                  Data: {item.currentDate.toString()}
                </Text>

                <TouchableOpacity onPress={() => {}} style={styles.deleteIcon}>
                  <MatComIcons
                    _matComName={'delete-forever'}
                    _matComSize={size.s2Icon}
                    _matComColor={colors.lightTransWhite}
                  />
                </TouchableOpacity>
              </View>
            ))}
          </View>
        </ScrollView>
      </View>

      <CustomNavigation
        pageTitle={selectType}
        onPress={() => {
          setShowOptions(true);
        }}
        navIconSearch={styles.navIconSearch}
      />

      {showOptions && (
        <View style={styles.filterContainer}>
          <View style={styles.filterContain}>
            <TouchableOpacity
              style={[styles.carsFilter, styles.shadowProps]}
              onPress={() => {
                setSelectType('Carros');
                setShowOptions(false);
              }}
            >
              <Text style={[styles.titleFilter, styles.shadowProps]}>Carros</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[styles.motorcycleFilter, styles.shadowProps]}
              onPress={() => {
                setSelectType('Motos');
                setShowOptions(false);
              }}
            >
              <Text style={[styles.titleFilter, styles.shadowProps]}>Motos</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[styles.trucksFilter, styles.shadowProps]}
              onPress={() => {
                setSelectType('Pesados');
                setShowOptions(false);
              }}
            >
              <Text style={[styles.titleFilter, styles.shadowProps]}>Pesados</Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => {
                if (selectType !== 'Lista') {
                  setSelectType('Lista');
                } else {
                  setShowOptions(false);
                }
              }}
              style={styles.closeIcon}
            >
              <MatComIcons
                _matComName={iconClose}
                _matComSize={size.m2Icon}
                _matComColor={colors.lightRed}
              />
            </TouchableOpacity>
          </View>
        </View>
      )}
    </>
  );
}
