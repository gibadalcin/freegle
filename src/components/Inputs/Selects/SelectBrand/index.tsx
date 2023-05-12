import React, { useEffect, useState } from 'react';
import { View, Modal, TouchableOpacity, Text, FlatList } from 'react-native';
import Model from '../Model';
import styles from './style';
import { useSelects } from '../../../../contexts/Select';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import axios from 'axios';

interface Option {
  codigo: string;
  nome: string;
}

export default function SelectType() {
  const {
    visible,
    setVisible,
    vehicleType,
    setVehicleType,
    codeBrands,
    setCodeModel,
    setCodeBrands,
    setCodeYear,
  } = useSelects();
  const [txt, setTxt] = useState('Selecione a Marca');
  const [modalVisible, setModalVisible] = useState(false);
  const [options, setOptions] = useState<Option[]>([]);
  const [selectedOption, setSelectedOption] = useState<Option | null>(null);
  const [isDisabled, setIsDisabled] = useState(false);

  const filterType = vehicleType ? vehicleType.toLowerCase() : null;

  useEffect(() => {
    async function fetchOptions() {
      const URL_BRANDS = filterType
        ? `https://parallelum.com.br/fipe/api/v1/${filterType}/marcas`
        : '';
      console.log(URL_BRANDS);
      try {
        const baseURL = URL_BRANDS;
        const response = await axios.get(baseURL);
        setOptions(response.data);
        console.log('Sucesso marcas');
      } catch (error) {
        console.log(error);
      }
    }
    if (filterType && options.length === 0) {
      fetchOptions();
    }
  }, [vehicleType, visible, codeBrands, filterType, options]);

  const clearFields = () => {
    setVehicleType('');
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
            setIsDisabled(true);
          }}
          disabled={isDisabled}
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
    <View>
      {filterType && visible && (
        <Model
          text={capitalized ? capitalized : txt}
          onPress={() => {
            setModalVisible(true);
            setVisible(false);
          }}
        />
      )}
      <View>
        <Modal
          animationType="slide"
          visible={modalVisible}
          onRequestClose={() => {
            setModalVisible(false);
            setVisible(true);
          }}
          transparent={true}
        >
          <TouchableOpacity
            style={styles.safe}
            onPress={() => {
              setModalVisible(false), setVisible(true);
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
      </View>
    </View>
  );
}
