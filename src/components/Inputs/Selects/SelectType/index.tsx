import React, { useEffect, useState } from 'react';
import { View, Modal, TouchableOpacity, Text, FlatList } from 'react-native';
import Model from '../Model';
import styles from './style';
import { callList } from '../../../../services/TypeList';
import { useSelects } from '../../../../contexts/Select';
import { FontistoIcons, MatComIcons } from '../../../ModelIcon';
import { colors, size } from '../../../../globals';

interface Option {
  codigo: string;
  nome: string;
}

export default function SelectType() {
  const { visible, setVisible, vehicleType, setVehicleType } = useSelects();
  const [txt, setTxt] = useState('Selecione o Tipo');
  const [modalVisible, setModalVisible] = useState(false);
  const [options, setOptions] = useState<Option[]>([]);
  const [selectedOption, setSelectedOption] = useState<Option | null>(null);
  const [isDisabled, setIsDisabled] = useState(false);

  useEffect(() => {
    async function fetchList() {
      const list = callList;
      let compare = {};
      if (list && list !== compare) {
        setOptions(list);
      }
      setVisible(true);
    }

    fetchList();
  }, [vehicleType, visible]);

  return (
    <>
      <View style={styles.selectArea}>
        <TouchableOpacity style={styles.carSelect} onPress={() => {}}>
          <FontistoIcons
            _fontName={'car'}
            _fontSize={size.bIcon}
            _fontColor={colors.lightTransWhite}
          />
        </TouchableOpacity>

        <TouchableOpacity style={styles.carSelect} onPress={() => {}}>
          <FontistoIcons
            _fontName={'motorcycle'}
            _fontSize={size.bIcon}
            _fontColor={colors.lightTransWhite}
          />
        </TouchableOpacity>

        <TouchableOpacity style={styles.carSelect} onPress={() => {}}>
          <FontistoIcons
            _fontName={'truck'}
            _fontSize={size.bIcon}
            _fontColor={colors.lightTransWhite}
          />
        </TouchableOpacity>
      </View>
    </>
  );
}
