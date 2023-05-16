import { useNavigation } from '@react-navigation/native';
import { ActivityIndicator, BackHandler, Text, TouchableOpacity, View } from 'react-native';
import { StackTypes } from '../../routes/Stack';
import styles from './style';
import Button from '../../components/Buttons/Button';
import { MatComIcons } from '../../components/ModelIcon';
import SelectType from '../../components/Inputs/Selects/SelectType';
import SelectBrand from '../../components/Inputs/Selects/SelectBrand';
import SelectModel from '../../components/Inputs/Selects/SelectModel';
import SelectYear from '../../components/Inputs/Selects/SelectYear';
import { useSelects } from '../../contexts/Select';
import { useResult } from '../../contexts/Price';
import axios from 'axios';
import { useEffect, useState } from 'react';
import BgImage from '../../components/BgImage';
import { colors, size } from '../../globals';
import React from 'react';

const Model = () => {
  const navigation = useNavigation<StackTypes>();
  const [navPosition, setNavPosition] = useState<'left' | 'right'>('left');

  useEffect(() => {}, [navPosition]);
  const toggleReverse = () => {
    setNavPosition(navPosition === 'left' ? 'right' : 'left');
  };

  const {
    vehicleType,
    setVehicleType,
    codeBrands,
    setCodeBrands,
    codeModel,
    setCodeModel,
    codeYear,
    setCodeYear,
    visible,
    isLoading,
    setIsLoading,
  } = useSelects();

  const {
    setYearModel,
    setFipeCode,
    setFuel,
    setBrand,
    setMonthRef,
    setModel,
    setFuelAcronym,
    setType,
    setPrice,
  } = useResult();

  const filterType = vehicleType ? vehicleType.toLowerCase() : null;
  const fetchOptions = async () => {
    const URL_VEHICLE = `https://parallelum.com.br/fipe/api/v1/${filterType}/marcas/${codeBrands}/modelos/${codeModel}/anos/${codeYear}`;
    try {
      setIsLoading(true);
      const response = await axios.get(URL_VEHICLE);
      const data = response.data;
      //console.log(data);
      setYearModel(data.AnoModelo);
      setFipeCode(data.CodigoFipe);
      setFuel(data.Combustivel);
      setBrand(data.Marca);
      setMonthRef(data.MesReferencia);
      setModel(data.Modelo);
      setFuelAcronym(data.SiglaCombustivel);
      setType(data.tipoVeiculo);
      setPrice(data.Valor);

      clearFields();
      setIsLoading(false);
      navigation.navigate('Price');
    } catch (error) {
      console.log(error);
    }
  };

  const handleBackButton = () => {
    BackHandler.exitApp();
    return true;
  };
  useEffect(() => {
    BackHandler.addEventListener('hardwareBackPress', handleBackButton);

    return () => {
      BackHandler.removeEventListener('hardwareBackPress', handleBackButton);
    };
  }, []);

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
        <View style={styles.selectContainer}>
          <View style={styles.selectFields}>
            <SelectType />
            <SelectBrand />
            <SelectModel />
            <SelectYear />

            <View>
              {codeYear && (
                <Button
                  disabled={isLoading}
                  isLoading={isLoading}
                  onPress={() => {
                    if (filterType && codeBrands && codeModel && codeYear) {
                      fetchOptions();
                    }
                  }}
                  title="Consultar"
                  backgroundColor={colors.specialRed}
                />
              )}
            </View>
          </View>
        </View>

        <View style={[styles.customNav, { [navPosition]: '-40%' }]}>
          <Text style={[styles.reverseTextPage, { [navPosition]: '24%' }]}>
            {vehicleType ? vehicleType : 'Veículo'}
          </Text>
          {!isLoading && (
            <TouchableOpacity style={styles.customNavButtom} onPress={toggleReverse}>
              <View style={[styles.reversePosition, { [navPosition]: '14%' }]}>
                <MatComIcons
                  _matComName={'swap-horizontal'}
                  _matComSize={size.bIcon}
                  _matComColor={colors.lightTransWhite}
                />
              </View>
            </TouchableOpacity>
          )}

          <TouchableOpacity
            style={[styles.navIconBack, { [navPosition]: '52%' }]}
            onPress={() => {
              navigation.navigate('Home');
              clearFields();
            }}
            disabled={false}
          >
            <MatComIcons
              _matComName={'arrow-left-bold'}
              _matComSize={size.mIcon}
              _matComColor={colors.lightTransWhite}
            />
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.navIconLogin, { [navPosition]: '90%' }]}
            onPress={() => {
              clearFields();
            }}
            disabled={false}
          >
            <MatComIcons
              _matComName={'refresh'}
              _matComSize={size.mIcon}
              _matComColor={colors.lightTransWhite}
            />
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.navIconClose, { [navPosition]: '106%' }]}
            onPress={() => {
              handleBackButton();
            }}
            disabled={false}
          >
            <MatComIcons
              _matComName={'window-close'}
              _matComSize={size.mIcon}
              _matComColor={colors.lightTransWhite}
            />
          </TouchableOpacity>
        </View>
        {isLoading && (
          <View
            style={{
              position: 'absolute',
              justifyContent: 'center',
              alignItems: 'center',
              bottom: '6%',
              [navPosition]: '6%',
            }}
          >
            <ActivityIndicator size={'large'} color={colors.specialGold} />
          </View>
        )}
      </View>
    </>
  );
};

export default Model;
