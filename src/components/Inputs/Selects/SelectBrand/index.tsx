import React, { useEffect, useState } from 'react';
import { View, Modal, TouchableOpacity, Text, FlatList } from 'react-native';
import Model from '../Model';
import styles from './style';
import { useSelects } from '../../../../contexts/Select';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import axios from 'axios';
import DisabledModel from '../DisabledModel';

interface Option {
  codigo: string;
  nome: string;
}

export default function SelectType() {
  const { vehicleType, setCodeBrands } = useSelects();
  const [txt, setTxt] = useState('Selecione a Marca');
  const [modalVisible, setModalVisible] = useState(false);
  const [options, setOptions] = useState<Option[]>([]);
  const [selectedOption, setSelectedOption] = useState<Option | null>(null);

  const filterType = vehicleType ? vehicleType.toLowerCase() : null;
  useEffect(() => {
    async function fetchOptions() {
      if (filterType) {
        try {
          const baseURL = 'https://parallelum.com.br/fipe/api/v1/' + filterType + '/marcas';
          const response = await axios.get(baseURL);
          setOptions(response.data);
        } catch (error) {
          console.log(error);
        }
      }
    }
    fetchOptions();
  }, [vehicleType]);

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
      {filterType && (
        <Model
          text={capitalized ? capitalized : txt}
          onPress={() => {
            setModalVisible(true);
          }}
        />
      )}
      <View>
        <Modal
          animationType="slide"
          visible={modalVisible}
          onRequestClose={() => setModalVisible(false)}
          transparent={true}
        >
          <TouchableOpacity style={styles.safe} onPress={() => setModalVisible(false)} />
          <View style={styles.selectField}>
            <View style={styles.selectContain}>
              <Text style={styles.selectTitle}>Marca</Text>
            </View>
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
