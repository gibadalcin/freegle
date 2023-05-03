import React, { useEffect, useState } from 'react';
import { View, Modal, TouchableOpacity, Text, FlatList } from 'react-native';
import Model from '../Model';
import styles from './style';
import { callList } from '../../../../services/TypeList';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useSelects } from '../../../../contexts/Select';

interface Option {
  codigo: string;
  nome: string;
}

export default function SelectType() {
  const { setVehicleType } = useSelects();
  const [txt, setTxt] = useState('Selecione o Tipo');
  const [modalVisible, setModalVisible] = useState(false);
  const [options, setOptions] = useState<Option[]>([]);
  const [selectedOption, setSelectedOption] = useState<Option | null>(null);
  const [visibleSelect, setvisibleSelect] = useState(true);

  useEffect(() => {
    async function fetchList() {
      const list = callList;
      let compare = {};
      if (list && list !== compare) {
        setOptions(list);
      }
    }

    fetchList();
  }, []);

  function renderOption(item: Option) {
    const capitalizedString = item.nome.charAt(0).toUpperCase() + item.nome.slice(1);
    return (
      <>
        <TouchableOpacity
          style={styles.containerItem}
          onPress={() => {
            setSelectedOption(item);
            setTxt(item.nome);
            setModalVisible(false);
            setVehicleType(item.nome);
            setvisibleSelect(true);
          }}
        >
          <Text style={styles.item}>{capitalizedString}</Text>
          <Icon name={'chevron-right'} style={styles.icon} />
        </TouchableOpacity>
      </>
    );
  }

  const capitalized = selectedOption
    ? selectedOption.nome.charAt(0).toUpperCase() + selectedOption.nome.slice(1)
    : null;
  return (
    <View>
      {visibleSelect && (
        <Model
          text={capitalized ? capitalized : txt}
          onPress={() => {
            setModalVisible(true);
            setvisibleSelect(false);
          }}
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
              setvisibleSelect(true);
            }}
          />
          <View style={styles.selectField}>
            <View style={styles.selectContain}>
              <Text style={styles.selectTitle}>Tipo</Text>
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
