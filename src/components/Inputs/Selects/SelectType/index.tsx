import React, { useEffect, useState } from 'react';
import { View, TouchableOpacity } from 'react-native';
import styles from './style';
import { callList } from '../../../../services/TypeList';
import { useSelects } from '../../../../contexts/Select';
import { FontistoIcons } from '../../../ModelIcon';
import { colors, size } from '../../../../globals';

interface Option {
  codigo: string;
  nome: string;
}

export default function SelectType() {
  const {
    setVisible,
    vehicleType,
    setVehicleType,
    isLoading,
    setIsLoading,
    setCodeBrands,
    setCodeModel,
    setCodeYear,
  } = useSelects();
  const [topSpace, setTopSpace] = useState<string>('0%');
  const car = 'carros';
  const motorcycle = 'motos';
  const truck = 'caminhoes';

  useEffect(() => {
    vehicleType ? setTopSpace('0%') : setTopSpace('30%');
  }, [vehicleType, isLoading]);

  const fetchOptions = (type: string) => {
    if (callList) {
      const newOptions: Option[] = callList.map((call) => {
        return { codigo: call.codigo, nome: call.nome };
      });

      newOptions.forEach((newOptions) => {
        if (newOptions.nome === type) {
          setVehicleType(newOptions.nome);
          console.log('Item selecionado:', newOptions.nome);
        }
        setVisible(true);
      });
    }
  };

  useEffect(() => {
    clearFields();
  }, [vehicleType]);

  const clearFields = () => {
    setCodeBrands('');
    setCodeModel('');
    setCodeBrands('');
    setCodeYear('');
  };

  const colorType = (ref: string) => {
    let color = ref === vehicleType ? colors.specialRed : colors.originalBlack;
    return color;
  };

  return (
    <View style={[styles.selectArea, { top: topSpace }]}>
      <View style={styles.vehicleArea}>
        <TouchableOpacity
          style={[styles.vehicleSelect, { backgroundColor: colorType(car) }]}
          onPress={() => {
            fetchOptions(car);
          }}
        >
          <FontistoIcons
            _fontName={'car'}
            _fontSize={size.bIcon}
            _fontColor={colors.lightTransWhite}
          />
        </TouchableOpacity>
      </View>

      <View style={styles.vehicleArea}>
        <TouchableOpacity
          style={[styles.vehicleSelect, { backgroundColor: colorType(motorcycle) }]}
          onPress={() => {
            fetchOptions(motorcycle);
          }}
        >
          <FontistoIcons
            _fontName={'motorcycle'}
            _fontSize={size.bIcon}
            _fontColor={colors.lightTransWhite}
          />
        </TouchableOpacity>
      </View>

      <View style={styles.vehicleArea}>
        <TouchableOpacity
          style={[styles.vehicleSelect, { backgroundColor: colorType(truck) }]}
          onPress={() => {
            fetchOptions(truck);
          }}
        >
          <FontistoIcons
            _fontName={'truck'}
            _fontSize={size.bIcon}
            _fontColor={colors.lightTransWhite}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}
