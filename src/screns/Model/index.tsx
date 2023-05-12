import { useNavigation } from '@react-navigation/native';
import { BackHandler, Text, TouchableOpacity, View } from 'react-native';
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
import { useCurrentPages } from '../../contexts/Pages';
import BgImage from '../../components/BgImage';
import { colors, size } from '../../globals';

const Model = () => {
  const navigation = useNavigation<StackTypes>();
  const { currentPage, setCurrentPage } = useCurrentPages();
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

  const [isLoading, setIsLoading] = useState(false);
  const [disabled, setDisabled] = useState(true);

  useEffect(() => {
    if (vehicleType && codeBrands && codeModel && codeYear) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  }, [vehicleType, codeBrands, codeModel, codeYear]);

  const handleConsult = async () => {
    const filterType = vehicleType ? vehicleType.toLowerCase() : null;

    if (filterType && codeBrands && codeModel && codeYear) {
      try {
        setIsLoading(true);
        const baseURL = `https://parallelum.com.br/fipe/api/v1/${filterType}/marcas/${codeBrands}/modelos/${codeModel}/anos/${codeYear}`;

        const response = await axios.get(baseURL);
        const data = response.data;
        console.log(data);

        setYearModel(data.AnoModelo);
        setFipeCode(data.CodigoFipe);
        setFuel(data.Combustivel);
        setBrand(data.Marca);
        setMonthRef(data.MesReferencia);
        setModel(data.Modelo);
        setFuelAcronym(data.SiglaCombustivel);
        setType(data.tipoVeiculo);
        setPrice(data.Valor);

        setCodeBrands('');
        setCodeModel('');
        setCodeYear('');
        setIsLoading(false);
        navigation.navigate('Price');
      } catch (error) {
        console.log(error);
      }
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
                  disabled={disabled}
                  isLoading={isLoading}
                  onPress={handleConsult}
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
          <TouchableOpacity style={styles.customNavButtom} onPress={toggleReverse}>
            <View style={[styles.reversePosition, { [navPosition]: '14%' }]}>
              <MatComIcons
                _matComName={'swap-horizontal'}
                _matComSize={size.bIcon}
                _matComColor={colors.lightTransWhite}
              />
            </View>
          </TouchableOpacity>

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
      </View>
    </>
  );
};

export default Model;
