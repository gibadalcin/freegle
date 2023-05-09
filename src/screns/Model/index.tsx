import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity, View } from 'react-native';
import { StackTypes } from '../../routes/Stack';
import styles from './style';
import Button from '../../components/Buttons/Button';
import { EntypoIcon } from '../../components/ModelIcon';
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
import colors from '../../Globals/Colors';

const Model = () => {
  const navigation = useNavigation<StackTypes>();
  const { currentPage, setCurrentPage } = useCurrentPages();

  useEffect(() => {
    setCurrentPage('model');
  }, [currentPage]);

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

  return (
    <>
      <BgImage />
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.arrowField}
          onPress={() => {
            navigation.navigate('Home');
            setVehicleType('');
            setCodeBrands('');
            setCodeModel('');
            setCodeYear('');
          }}
        >
          <EntypoIcon entName={'arrow-long-left'} entSize={40} entColor={colors.originalWhite} />
        </TouchableOpacity>

        <View style={styles.selectContainer}>
          <View style={styles.selectFields}>
            <SelectType />
            <SelectBrand />
            <SelectModel />
            <SelectYear />
          </View>
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
    </>
  );
};

export default Model;
