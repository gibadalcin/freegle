import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Text, View } from 'react-native';
import { StackTypes } from '../../routes/Stack';
import styles from './style';
import Arrow from '../../components/ModelIcon';
import { useAuth } from '../../contexts/Auth';
import { useResult } from '../../contexts/Price';

const Model = () => {
  const navigation = useNavigation<StackTypes>();
  const { signed } = useAuth();
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

  return (
    <View style={styles.container}>
      <View style={styles.resultContainer}>
        <View style={styles.dataField}>
          <View style={styles.dataItemFields}>
            <Text style={styles.dataBigTextBrand}>{brand}</Text>
            <Text style={styles.dataSmallTextModel}>{model}</Text>
            <Text style={styles.dataBigTextYear}>{yearModel}</Text>
            <Text style={styles.dataSmallTextRef}>ref.{monthRef}</Text>
          </View>
        </View>
        <View style={styles.priceField}>
          <Text style={styles.priceText}>{price}</Text>
        </View>
        <View style={styles.arrowField}>
          <Arrow
            name={'reply'}
            size={50}
            color={'#ffffff99'}
            onPress={() => {
              navigation.navigate('Home');
              setYearModel('');
              setFipeCode('');
              setFuel('');
              setBrand('');
              setMonthRef('');
              setModel('');
              setFuelAcronym('');
              setType('');
              setPrice('');
            }}
          />
        </View>

        <View style={styles.resultFieldButtons}>
          {signed && (
            <Arrow
              name={'archive'}
              size={54}
              color={'#c8a75a'}
              onPress={() => {
                navigation.navigate('Home');
                setYearModel('');
                setFipeCode('');
                setFuel('');
                setBrand('');
                setMonthRef('');
                setModel('');
                setFuelAcronym('');
                setType('');
                setPrice('');
              }}
            />
          )}
        </View>
      </View>
    </View>
  );
};

export default Model;
