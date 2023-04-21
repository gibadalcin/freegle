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
  const { vehicleType, codeBrands, codeModel, setCodeYear } = useSelects();
  const [txt, setTxt] = useState('Selecione o Ano');
  const [modalVisible, setModalVisible] = useState(false);
  const [options, setOptions] = useState<Option[]>([]);
  const [selectedOption, setSelectedOption] = useState<Option | null>(null);

  const filterType = vehicleType ? vehicleType.toLowerCase() : null;
  const filterCodeBrands = codeBrands ? codeBrands : null;
  const filterCodeModels = codeModel ? codeModel : null;
  useEffect(() => {
    async function fetchOptions() {
      if (filterType && filterCodeBrands && filterCodeModels) {
        try {
          const baseURL = `https://parallelum.com.br/fipe/api/v1/${filterType}/marcas/${filterCodeBrands}/modelos/${filterCodeModels}/anos`;
          const response = await axios.get(baseURL);
          setOptions(response.data);
        } catch (error) {
          console.log('error:', error);
        }
      }
    }
    fetchOptions();
  }, [vehicleType, codeBrands, codeModel]);

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
      {filterCodeModels && (
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
