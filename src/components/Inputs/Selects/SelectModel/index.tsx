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
  const { visible, setVisible, vehicleType, codeBrands, codeModel, setCodeModel } = useSelects();
  const [txt, setTxt] = useState('Selecione o Modelo');
  const [modalVisible, setModalVisible] = useState(false);
  const [options, setOptions] = useState<Option[]>([]);
  const [selectedOption, setSelectedOption] = useState<Option | null>(null);
  const [isDisabled, setIsDisabled] = useState(false);

  const filterType = vehicleType ? vehicleType.toLowerCase() : null;
  const filterCode = codeBrands ? codeBrands : null;

  useEffect(() => {
    async function fetchOptions() {
      const URL_MODELS = `https://parallelum.com.br/fipe/api/v1/${filterType}/marcas/${filterCode}/modelos`;
      console.log(URL_MODELS);
      try {
        const baseURL = URL_MODELS;
        const response = await axios.get(baseURL);
        setOptions(response.data.modelos);
        console.log('Sucesso modelos');
      } catch (error) {
        console.log(error);
      }
    }
    if (filterType && filterCode && options.length === 0) {
      fetchOptions();
    }
  }, [vehicleType, visible, codeBrands, filterType, codeModel, options]);

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
            setIsDisabled(true);
          }}
          disabled={isDisabled}
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
      {filterCode && visible && (
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
            <View style={styles.selectContain}>
              <Text style={styles.selectTitle}>Modelo</Text>
            </View>
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
