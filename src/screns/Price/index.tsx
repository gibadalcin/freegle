import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { Text, View } from 'react-native';
import { StackTypes } from '../../routes/Stack';
import styles from './style';
import { useResult } from '../../contexts/Price';
import { useCurrentPages } from '../../contexts/Pages';
import BgImage from '../../components/BgImage';
import { useSelects } from '../../contexts/Select';
import { colors } from '../../globals';
import auth, { FirebaseAuthTypes } from '@react-native-firebase/auth';
import CustomNavigation from '../../components/CustomNavigation';

const Model = () => {
  const navigation = useNavigation<StackTypes>();
  const { currentBgPage, setCurrentBgPage } = useCurrentPages();
  const { vehicleType, setVehicleType, setCodeBrands, setCodeModel, setCodeYear, setIsLoading } =
    useSelects();
  const [user, setUser] = useState<FirebaseAuthTypes.User | null>(null);
  const [disabled, setDisabled] = useState<boolean>(false);
  const colorDisabled = disabled ? colors.originalGrey : colors.lightTransWhite;

  const {
    yearModel,
    brand,
    monthRef,
    model,
    setYearModel,
    setFipeCode,
    setFuel,
    setBrand,
    setMonthRef,
    setModel,
    setFuelAcronym,
    setType,
    setPrice,
    price,
  } = useResult();

  useEffect(() => {
    setCurrentBgPage('price');
  });

  useEffect(() => {
    const unsubscribe = auth().onAuthStateChanged((_user) => {
      setUser(_user);
    });

    user?.email ? setDisabled(false) : setDisabled(true);
    return unsubscribe;
  }, [disabled, user, colorDisabled]);

  const onSave = () => {
    console.log('salvo');
    clearFields();
  };

  const clearFields = () => {
    setVehicleType('');
    setCodeBrands('');
    setCodeModel('');
    setCodeYear('');
  };

  return (
    <>
      <BgImage />
      <View style={styles.container}>
        <View style={styles.dataField}>
          <Text style={[styles.dataBigTextBrand, styles.shadowProps]}>{brand}</Text>
          <Text style={[styles.dataSmallTextModel, styles.shadowProps]}>{model}</Text>
          <Text style={[styles.dataBigTextYear, styles.shadowProps]}>{yearModel}</Text>
        </View>
        <View style={styles.priceField}>
          <Text style={[styles.dataSmallTextRef, styles.shadowProps]}>ref.{monthRef}</Text>
          <Text style={[styles.priceText, styles.shadowProps]}>{price}</Text>
        </View>

        <CustomNavigation
          pageTitle="FIPE"
          onPress={() => {
            onSave();
          }}
          navIconSave={styles.navIconSave}
        />
      </View>
    </>
  );
};

export default Model;
