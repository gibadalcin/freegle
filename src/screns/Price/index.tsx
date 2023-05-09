import { useNavigation } from '@react-navigation/native';
import React, { useEffect } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { StackTypes } from '../../routes/Stack';
import styles from './style';
import { EntypoIcon } from '../../components/ModelIcon';
import { useResult } from '../../contexts/Price';
import { useCurrentPages } from '../../contexts/Pages';
import BgImage from '../../components/BgImage';
import { useSelects } from '../../contexts/Select';
import colors from '../../Globals/Colors';

const Model = () => {
  const navigation = useNavigation<StackTypes>();
  const { currentPage, setCurrentPage } = useCurrentPages();
  const { setVehicleType } = useSelects();

  useEffect(() => {
    setCurrentPage('price');
  }, [currentPage]);

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
    <>
      <BgImage />
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
          <TouchableOpacity
            style={styles.arrowField}
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
              setVehicleType('');
            }}
          >
            <EntypoIcon entName={'arrow-long-left'} entSize={40} entColor={colors.originalWhite} />
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.resultFieldButtons}
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
          >
            <EntypoIcon entName={'archive'} entSize={38} entColor={colors.originalWhite} />
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
};

export default Model;
