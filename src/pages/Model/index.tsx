import { useNavigation } from '@react-navigation/native';
import { ActivityIndicator, View } from 'react-native';
import { StackTypes } from '../../routes/Stack';
import styles from './style';
import Button from '../../components/Buttons/Button';
import SelectType from '../../components/Inputs/Selects/SelectType';
import SelectBrand from '../../components/Inputs/Selects/SelectBrand';
import SelectModel from '../../components/Inputs/Selects/SelectModel';
import SelectYear from '../../components/Inputs/Selects/SelectYear';
import { useSelects } from '../../contexts/Select';
import { useResult } from '../../contexts/Price';
import axios from 'axios';
import { useEffect, useState } from 'react';
import BgImage from '../../components/BgImage';
import { colors } from '../../globals';
import React from 'react';
import { useCurrentPages } from '../../contexts/Pages';
import CustomNavigation from '../../components/CustomNavigation';

const Model = () => {
  const navigation = useNavigation<StackTypes>();
  const [navPosition] = useState<'left' | 'right'>('left');
  const { setCurrentBgPage } = useCurrentPages();
  const { vehicleType, codeBrands, codeModel, codeYear, isLoading, setIsLoading } = useSelects();
  const { setVehicleType, setCodeBrands, setCodeModel, setCodeYear } = useSelects();
  const titleText = vehicleType ? vehicleType : 'Veículos';
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

  useEffect(() => {
    setCurrentBgPage('model');
  });

  useEffect(() => {}, [navPosition]);

  const filterType = vehicleType ? vehicleType.toLowerCase() : null;
  const fetchOptions = async () => {
    const URL_VEHICLE = `https://parallelum.com.br/fipe/api/v1/${filterType}/marcas/${codeBrands}/modelos/${codeModel}/anos/${codeYear}`;
    try {
      setIsLoading(true);
      const response = await axios.get(URL_VEHICLE);
      const data = response.data;
      setYearModel(data.AnoModelo);
      setFipeCode(data.CodigoFipe);
      setFuel(data.Combustivel);
      setBrand(data.Marca);
      setMonthRef(data.MesReferencia);
      setModel(data.Modelo);
      setFuelAcronym(data.SiglaCombustivel);
      setType(data.tipoVeiculo);
      setPrice(data.Valor);

      setIsLoading(false);
      navigation.navigate('Price');
    } catch (error) {
      console.log('erro na tela de seleção de modelos: ', error);
    }
  };

  const clearfields = () => {
    setVehicleType(''), setCodeBrands(''), setCodeModel(''), setCodeYear('');
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

        <CustomNavigation
          pageTitle={
            titleText === 'caminhoes'
              ? 'Pesados'
              : titleText.charAt(0).toUpperCase() + titleText.toLowerCase().slice(1)
          }
          onPress={clearfields}
          navIconRefresh={styles.navIconRefresh}
        />

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
