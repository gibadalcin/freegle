import React, { useEffect, useState } from 'react';
import { View, Modal, TouchableOpacity, Text, FlatList } from 'react-native';
import Model from '../Model';
import styles from './style';
import { useSelects } from '../../../../contexts/Select';
import axios from 'axios';
import { colors } from '../../../../globals';
import { MatComIcons } from '../../../ModelIcon';
import { useCurrentPages } from '../../../../contexts/Pages';

interface Option {
  codigo: string;
  nome: string;
}

export default function SelectType() {
  const {
    visible,
    vehicleType,
    isLoading,
    setVisible,
    setCodeModel,
    setCodeBrands,
    setCodeYear,
    setIsLoading,
  } = useSelects();
  const [txt, setTxt] = useState('Selecione a Marca');
  const [modalVisible, setModalVisible] = useState(false);
  const [options, setOptions] = useState<Option[]>([]);
  const [selectedOption, setSelectedOption] = useState<Option | null>(null);

  const filterType = vehicleType ? vehicleType.toLowerCase() : null;
  async function fetchOptions() {
    const URL_BRANDS = filterType
      ? `https://parallelum.com.br/fipe/api/v1/${filterType}/marcas`
      : '';

    try {
      const response = await axios.get(URL_BRANDS);
      isLoading ? setIsLoading(false) : isLoading;
      setVisible(true);
      setOptions(response.data);
    } catch (error) {
      setIsLoading(false);
      console.log(error);
    }
  }

  useEffect(() => {
    clearFields();
  }, [vehicleType]);

  useEffect(() => {
    if (filterType !== null && filterType !== '') {
      fetchOptions();
    }
  }, [vehicleType]);
  useEffect(() => {}, [isLoading]);
  useEffect(() => {}, [visible]);
  useEffect(() => {}, [txt]);

  const clearFields = () => {
    setSelectedOption(null);
    setTxt('Selecione a Marca');
    setCodeBrands('');
    setCodeModel('');
    setCodeYear('');
  };

  const renderOption = (item: Option) => {
    const capitalizedString = item.nome.charAt(0).toUpperCase() + item.nome.toLowerCase().slice(1);

    return (
      <>
        <TouchableOpacity
          style={styles.containerItem}
          onPress={() => {
            setSelectedOption(item);
            setTxt(item.nome);
            setModalVisible(false);
            setCodeBrands(item.codigo);
            isLoading ? isLoading : setIsLoading(true);
          }}
          disabled={false}
        >
          <Text style={styles.item}>{capitalizedString}</Text>
          <View style={styles.icon}>
            <MatComIcons
              _matComName={'chevron-right'}
              _matComSize={28}
              _matComColor={colors.originalWhite}
            />
          </View>
        </TouchableOpacity>
      </>
    );
  };

  const capitalized = selectedOption
    ? selectedOption.nome.charAt(0).toUpperCase() + selectedOption.nome.toLowerCase().slice(1)
    : null;
  return (
    <View>
      {filterType && (
        <Model
          text={capitalized ? capitalized : txt}
          onPress={() => {
            setModalVisible(true);
          }}
          disabled={false}
        />
      )}

      <Modal
        animationType="slide"
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(true);
        }}
        transparent={true}
      >
        <TouchableOpacity
          onPress={() => {
            setModalVisible(false);
          }}
        />
        <View style={styles.selectField}>
          <TouchableOpacity
            style={styles.selectContain}
            onPress={() => {
              setModalVisible(false);
            }}
          >
            <Text style={styles.selectTitle}>Marca</Text>
            <View style={styles.iconDown}>
              <MatComIcons
                _matComName={'chevron-double-down'}
                _matComSize={28}
                _matComColor={colors.originalWhite}
              />
            </View>
          </TouchableOpacity>
          <FlatList
            data={options}
            keyExtractor={(item) => String(item.codigo)}
            renderItem={({ item }) => renderOption(item)}
          />
        </View>
      </Modal>
    </View>
  );
}
