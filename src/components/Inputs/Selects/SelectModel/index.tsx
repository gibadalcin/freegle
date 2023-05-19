import React, { useEffect, useState } from 'react';
import { View, Modal, TouchableOpacity, Text, FlatList } from 'react-native';
import Model from '../Model';
import styles from './style';
import { useSelects } from '../../../../contexts/Select';
import axios from 'axios';
import { colors } from '../../../../globals';
import { MatComIcons } from '../../../ModelIcon';

interface Option {
  codigo: string;
  nome: string;
}

export default function SelectType() {
  const {
    visible,
    isLoading,
    vehicleType,
    codeBrands,
    setVisible,
    setCodeModel,
    setCodeYear,
    setIsLoading,
  } = useSelects();
  const [txt, setTxt] = useState('Selecione o Modelo');
  const [modalVisible, setModalVisible] = useState(false);
  const [options, setOptions] = useState<Option[]>([]);
  const [selectedOption, setSelectedOption] = useState<Option | null>(null);

  const filterType = vehicleType ? vehicleType.toLowerCase() : null;
  const filterCode = codeBrands ? codeBrands : null;
  async function fetchOptions() {
    const URL_MODELS = `https://parallelum.com.br/fipe/api/v1/${filterType}/marcas/${filterCode}/modelos`;
    try {
      const response = await axios.get(URL_MODELS);
      isLoading ? setIsLoading(false) : isLoading;
      setVisible(true);
      setOptions(response.data.modelos);
    } catch (error) {
      setIsLoading(false);
      console.log('erro no input de modelo: ', error);
    }
  }

  useEffect(() => {
    clearFields();
  }, [vehicleType, codeBrands]);

  useEffect(() => {
    if (filterCode) {
      fetchOptions();
    }
  }, [codeBrands]);

  useEffect(() => {}, [visible]);
  useEffect(() => {}, [txt]);

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
            isLoading ? isLoading : setIsLoading(true);
          }}
          disabled={false}
        >
          <Text style={styles.item}>{item.nome}</Text>
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
  }

  const capitalized = selectedOption
    ? selectedOption.nome.replace(/(^\w{1})|(\s+\w{1})/g, (letra) => letra.toUpperCase())
    : null;
  return (
    <View>
      {filterCode && (
        <Model
          text={capitalized ? capitalized : txt}
          onPress={() => {
            setModalVisible(true);
          }}
          disabled={isLoading}
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
              keyExtractor={(item) => item.codigo}
              renderItem={({ item }) => renderOption(item)}
            />
          </View>
        </Modal>
      </View>
    </View>
  );
}
