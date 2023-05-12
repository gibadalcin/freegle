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
  const { visible, setVisible, vehicleType, setVehicleType, codeBrands, setCodeBrands } =
    useSelects();
  const [options, setOptions] = useState<Option[]>([]);
  const [enabled, setEnabled] = useState<boolean>(false);
  const [topSpace, setTopSpace] = useState<string>('30%');

  useEffect(() => {
    async function fetchList() {
      const list = callList;

      let compare = {};
      if (list && list !== compare) {
        const optionsArray = list.map((type) => ({
          codigo: type.codigo,
          nome: type.nome,
        }));

        setOptions(optionsArray);
        if (vehicleType === '' && codeBrands === '') {
          setTopSpace('30%');
          setEnabled(false);
        } else {
          setTopSpace('0%');
          setEnabled(true);
        }
      }
      setVisible(true);
    }

    fetchList();
  }, [vehicleType, visible, enabled, topSpace]);

  const handledType = (type: string) => {
    setEnabled(true);
    switch (type) {
      case 'carros':
        setVehicleType(options[0].nome);
        break;
      case 'motos':
        setVehicleType(options[1].nome);
        break;
      case 'caminhoes':
        setVehicleType(options[2].nome);
        break;
      default:
        setEnabled(false);
    }
  };

  const colorType = (ref: string) => {
    let color = ref === vehicleType ? colors.specialRed : colors.originalBlack;
    return color;
  };

  return (
    <View style={[styles.selectArea, { top: topSpace }]}>
      <View style={styles.vehicleArea}>
        <TouchableOpacity
          style={[styles.vehicleSelect, { backgroundColor: colorType('carros') }]}
          onPress={() => {
            if (vehicleType === '') {
              handledType('carros');
            }
          }}
          disabled={enabled}
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
          style={[styles.vehicleSelect, { backgroundColor: colorType('motos') }]}
          onPress={() => {
            handledType('motos');
          }}
          disabled={enabled}
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
          style={[styles.vehicleSelect, { backgroundColor: colorType('caminhoes') }]}
          onPress={() => {
            handledType('caminhoes');
          }}
          disabled={enabled}
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
