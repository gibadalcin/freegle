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
    setCodeBrands,
    codeModel,
    setCodeModel,
    setCodeYear,
    isLoading,
    setIsLoading,
  } = useSelects();
  const [txt, setTxt] = useState('Selecione o Modelo');
  const [modalVisible, setModalVisible] = useState(false);
  const [options, setOptions] = useState<Option[]>([]);
  const [selectedOption, setSelectedOption] = useState<Option | null>(null);

  const filterType = vehicleType ? vehicleType.toLowerCase() : null;
  const filterCode = codeBrands ? codeBrands : null;

  async function fetchOptions() {
    console.log('Entrei de furão em modelos');
    const URL_MODELS = `https://parallelum.com.br/fipe/api/v1/${filterType}/marcas/${filterCode}/modelos`;

    try {
      const response = await axios.get(URL_MODELS);
      setIsLoading(false);
      setVisible(true);
      setOptions(response.data.modelos);
    } catch (error) {
      setIsLoading(false);
      console.log(error);
    }
  }

  useEffect(() => {
    if (filterType && filterCode) {
      fetchOptions();
    }
  }, [vehicleType, codeBrands, visible, txt]);

  useEffect(() => {
    clearFields();
  }, [vehicleType, codeBrands]);

  const clearFields = () => {
    setSelectedOption(null);
    setTxt('Selecione o modelo');
    setCodeModel('');
    setCodeYear('');
  };

  function renderOption(item: Option) {
    return (
      <>
        <TouchableOpacity
          style={styles.containerItem}
          onPress={() => {
            setSelectedOption(item);
            setCodeModel(item.codigo);
            setTxt(item.nome);
            setModalVisible(false);
          }}
          disabled={false}
        >
          <Text style={styles.item}>{item.nome}</Text>
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
      {filterCode && (
        <Model
          text={capitalized ? capitalized : txt}
          onPress={() => {
            setModalVisible(true);
          }}
          disabled={false}
        />
      )}
      <View>
        <Modal
          animationType="slide"
          visible={modalVisible}
          onRequestClose={() => {
            setModalVisible(true);
          }}
          transparent={true}
        >
          <TouchableOpacity
            style={styles.safe}
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
              <Text style={styles.selectTitle}>Modelo</Text>
            </TouchableOpacity>
            <FlatList
              data={options}
              keyExtractor={(item) => item.codigo}
              renderItem={({ item }) => renderOption(item)}
            />
          </View>
        </Modal>
      </View>
    </View>
  );
}
