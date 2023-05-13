import React, { useEffect, useState } from 'react';
import { View, Modal, TouchableOpacity, Text, FlatList, ActivityIndicator } from 'react-native';
import Model from '../Model';
import styles from './style';
import { useSelects } from '../../../../contexts/Select';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import axios from 'axios';
import { colors } from '../../../../globals';

interface Option {
  codigo: string;
  nome: string;
}

export default function SelectType() {
  const {
    visible,
    setVisible,
    vehicleType,
    setCodeModel,
    setCodeBrands,
    setCodeYear,
    isLoading,
    setIsLoading,
  } = useSelects();
  const [txt, setTxt] = useState('Selecione a Marca');
  const [modalVisible, setModalVisible] = useState(false);
  const [options, setOptions] = useState<Option[]>([]);
  const [selectedOption, setSelectedOption] = useState<Option | null>(null);

  const filterType = vehicleType ? vehicleType.toLowerCase() : null;
  async function fetchOptions() {
    console.log('Entrei de furão em marcas');
    const URL_BRANDS = filterType
      ? `https://parallelum.com.br/fipe/api/v1/${filterType}/marcas`
      : '';

    try {
      const response = await axios.get(URL_BRANDS);
      setIsLoading(false);
      setVisible(true);
      setOptions(response.data);
    } catch (error) {
      setIsLoading(false);
      console.log(error);
    }
  }

  useEffect(() => {
    if (filterType !== null && filterType !== '') {
      console.log('aqui estou');
      fetchOptions();
    }
  }, [vehicleType, visible, txt]);

  useEffect(() => {
    clearFields();
  }, [vehicleType]);

  const clearFields = () => {
    setSelectedOption(null);
    setTxt('Selecione a Marca');
    setCodeBrands('');
    setCodeModel('');
    setCodeYear('');
  };

  function renderOption(item: Option) {
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
          }}
          disabled={false}
        >
          <Text style={styles.item}>{capitalizedString}</Text>
          <Icon name={'chevron-right'} style={styles.icon} />
        </TouchableOpacity>
      </>
    );
  }

  const capitalized = selectedOption
    ? selectedOption.nome.charAt(0).toUpperCase() + selectedOption.nome.toLowerCase().slice(1)
    : null;
  return (
    <>
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
          </TouchableOpacity>
          <FlatList
            data={options}
            keyExtractor={(item) => String(item.codigo)}
            renderItem={({ item }) => renderOption(item)}
          />
        </View>
      </Modal>

      {filterType && (
        <Model
          text={capitalized ? capitalized : txt}
          onPress={() => {
            setModalVisible(true);
          }}
          disabled={false}
        />
      )}
    </>
  );
}
