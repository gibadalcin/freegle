import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Text, View } from 'react-native';
import { StackTypes } from '../../routes/Stack';
import styles from './style';
import { AntDesignIcon, EntypoIcon } from '../../components/ModelIcon';
import { useResult } from '../../contexts/Price';

const Model = () => {
  const navigation = useNavigation<StackTypes>();
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
          <EntypoIcon
            entName={'arrow-long-left'}
            entSize={40}
            entColor={'#ffffff'}
            entOnPress={() => {
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
          <EntypoIcon
            entName={'archive'}
            entSize={38}
            entColor={'#ffffff'}
            entOnPress={() => {
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
      </View>
    </View>
  );
};

export default Model;
