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
  const { visible, setVisible, vehicleType, codeBrands, codeModel, codeYear, setCodeYear } =
    useSelects();
  const [txt, setTxt] = useState('Selecione o Ano');
  const [modalVisible, setModalVisible] = useState(false);
  const [options, setOptions] = useState<Option[]>([]);
  const [selectedOption, setSelectedOption] = useState<Option | null>(null);

  const filterType = vehicleType ? vehicleType.toLowerCase() : null;
  const filterYear = codeModel ? codeModel : null;
  useEffect(() => {
    const filterBrands = codeBrands ? codeBrands : null;

    async function fetchOptions() {
      const URL_YEARS = `https://parallelum.com.br/fipe/api/v1/${filterType}/marcas/${filterBrands}/modelos/${filterYear}/anos`;
      console.log(URL_YEARS);
      try {
        const baseURL = URL_YEARS;
        const response = await axios.get(baseURL);
        setOptions(response.data);
        console.log('Sucesso anos');
      } catch (error) {
        console.log(error);
      }
    }
    if (filterType && filterBrands && filterYear && options.length === 0) {
      fetchOptions();
    }
  }, [vehicleType, codeBrands, codeModel, codeYear, visible]);

  function renderOption(item: Option) {
    return (
      <>
        <TouchableOpacity
          style={styles.containerItem}
          onPress={() => {
            setSelectedOption(item);
            setCodeYear(item.codigo);
            setTxt(item.nome);
            setModalVisible(false);
          }}
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
      {filterYear && visible && (
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
              <Text style={styles.selectTitle}>Ano</Text>
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
