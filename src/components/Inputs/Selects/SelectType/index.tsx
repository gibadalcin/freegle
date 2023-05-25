import React, { useEffect, useState } from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import styles from './style';
import { callList } from '../../../../services/TypeList';
import { useSelects } from '../../../../contexts/Select';
import { FontAwesome5Icon, FontistoIcons } from '../../../ModelIcon';
import { colors, size } from '../../../../globals/Useful';
import NetInfo from '@react-native-community/netinfo';
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
  const [isConnected, setIsConnected] = useState<boolean | null>(null);
  const car = 'carros';
  const motorcycle = 'motos';
  const truck = 'caminhoes';
  const showIconMessageView = (
    <View style={[styles.attention, styles.shadowProps]}>
      <FontAwesome5Icon _awe5Name={'exclamation'} _awe5Size={48} _awe5Color={'yellow'} />
    </View>
  );

  useEffect(() => {
    const unsubscribe = NetInfo.addEventListener((state) => {
      setIsConnected(state.isConnected);
    });

    return () => {
      unsubscribe();
    };
  }, []);

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
          setIsLoading(true);
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

  if (isConnected === null) {
    return (
      <View style={[styles.replyStatus, styles.shadowProps]}>
        {showIconMessageView}
        <Text style={[styles.noInternetText, styles.shadowProps]}>
          Por favor, verifique sua conexão e tente novamente.
        </Text>
      </View>
    );
  } else {
    return (
      <View style={[styles.selectArea, { top: topSpace }]}>
        <View style={styles.vehicleArea}>
          <TouchableOpacity
            style={[styles.vehicleSelect, { backgroundColor: colorType(car) }]}
            onPress={() => {
              fetchOptions(car);
            }}
            disabled={isConnected ? false : true}
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
            disabled={isConnected ? false : true}
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
            disabled={isConnected ? false : true}
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
}
