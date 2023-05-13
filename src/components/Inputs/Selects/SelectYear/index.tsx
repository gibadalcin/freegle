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

  const filterBrands = codeBrands ? codeBrands : null;

  async function fetchOptions() {
    console.log('Entrei de furão em anos');
    const URL_YEARS = `https://parallelum.com.br/fipe/api/v1/${filterType}/marcas/${filterBrands}/modelos/${filterYear}/anos`;

    try {
      const response = await axios.get(URL_YEARS);
      setOptions(response.data);
      console.log('Sucesso anos: ', codeYear);
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    if (filterType && filterBrands && filterYear) {
      fetchOptions();
    }
  }, [codeYear, codeBrands, codeModel, visible, txt]);

  useEffect(() => {
    clearFields();
  }, [vehicleType, codeBrands, codeModel]);

  const clearFields = () => {
    setSelectedOption(null);
    setTxt('Selecione o ano');
    setCodeYear('');
  };

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
      {filterYear && (
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
            setModalVisible(false);
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
              <Text style={styles.selectTitle}>Ano</Text>
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
