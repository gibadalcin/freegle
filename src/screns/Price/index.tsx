import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { BackHandler, Text, TouchableOpacity, View } from 'react-native';
import { StackTypes } from '../../routes/Stack';
import styles from './style';
import { useResult } from '../../contexts/Price';
import { useCurrentPages } from '../../contexts/Pages';
import BgImage from '../../components/BgImage';
import { useSelects } from '../../contexts/Select';
import { colors, size } from '../../globals';
import { MatComIcons } from '../../components/ModelIcon';
import auth, { FirebaseAuthTypes } from '@react-native-firebase/auth';

const Model = () => {
  const navigation = useNavigation<StackTypes>();
  const { currentPage, setCurrentPage } = useCurrentPages();
  const { vehicleType, setVehicleType, setCodeBrands, setCodeModel, setCodeYear } = useSelects();
  const [navPosition, setNavPosition] = useState<'left' | 'right'>('left');
  const [user, setUser] = useState<FirebaseAuthTypes.User | null>(null);
  const [disabled, setDisabled] = useState<boolean>(false);
  const colorDisabled = disabled ? colors.originalGrey : colors.lightTransWhite;

  useEffect(() => {
    setCurrentPage('price');
  }, [currentPage]);

  const {
    yearModel,
    brand,
    monthRef,
    model,
    setYearModel,
    setFipeCode,
    setFuel,
    setBrand,
    setMonthRef,
    setModel,
    setFuelAcronym,
    setType,
    setPrice,
    price,
  } = useResult();

  useEffect(() => {
    setCurrentPage('home');
    const unsubscribe = auth().onAuthStateChanged((_user) => {
      setUser(_user);
    });

    user?.email ? setDisabled(false) : setDisabled(true);
    console.log(user, currentPage);
    return unsubscribe;
  }, [currentPage, disabled, user, colorDisabled]);

  const handleBackButton = () => {
    BackHandler.exitApp();
    return true;
  };

  useEffect(() => {
    BackHandler.addEventListener('hardwareBackPress', handleBackButton);

    return () => {
      BackHandler.removeEventListener('hardwareBackPress', handleBackButton);
    };
  }, []);

  useEffect(() => {}, [navPosition]);
  const toggleReverse = () => {
    setNavPosition(navPosition === 'left' ? 'right' : 'left');
  };

  const clearFields = () => {
    setVehicleType('');
    setCodeBrands('');
    setCodeModel('');
    setCodeYear('');
  };

  return (
    <>
      <BgImage />
      <View style={styles.container}>
        <View style={styles.dataField}>
          <Text style={[styles.dataBigTextBrand, styles.shadowProps]}>{brand}</Text>
          <Text style={[styles.dataSmallTextModel, styles.shadowProps]}>{model}</Text>
          <Text style={[styles.dataBigTextYear, styles.shadowProps]}>{yearModel}</Text>
        </View>
        <View style={styles.priceField}>
          <Text style={[styles.dataSmallTextRef, styles.shadowProps]}>ref.{monthRef}</Text>
          <Text style={[styles.priceText, styles.shadowProps]}>{price}</Text>
        </View>
      </View>

      <View style={[styles.customNav, { [navPosition]: '-40%' }]}>
        <Text style={[styles.reverseTextPage, styles.shadowProps, { [navPosition]: '24%' }]}>
          FIPE
        </Text>
        <TouchableOpacity style={styles.customNavButtom} onPress={toggleReverse}>
          <View style={[styles.reversePosition, { [navPosition]: '14%' }]}>
            <MatComIcons
              _matComName={'swap-horizontal'}
              _matComSize={size.bIcon}
              _matComColor={colors.lightTransWhite}
            />
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.navIconBack, { [navPosition]: '52%' }]}
          onPress={() => {
            navigation.navigate('Home');
            clearFields();
          }}
          disabled={false}
        >
          <MatComIcons
            _matComName={'arrow-left-bold'}
            _matComSize={size.mIcon}
            _matComColor={colors.lightTransWhite}
          />
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.navIconClose, { [navPosition]: '106%' }]}
          onPress={() => {
            handleBackButton();
            clearFields();
          }}
          disabled={false}
        >
          <MatComIcons
            _matComName={'window-close'}
            _matComSize={size.mIcon}
            _matComColor={colors.lightTransWhite}
          />
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.navIconLogin, { [navPosition]: '90%' }]}
          onPress={() => {
            clearFields();
          }}
          disabled={disabled}
        >
          <MatComIcons
            _matComName={'content-save-outline'}
            _matComSize={size.mIcon}
            _matComColor={colorDisabled}
          />
        </TouchableOpacity>
      </View>
    </>
  );
};

export default Model;
