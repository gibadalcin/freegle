import { View, Text, TouchableOpacity, BackHandler, ViewStyle, StyleProp } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { size, colors } from '../../globals';
import styles from './style';
import { MatComIcons } from '../ModelIcon';
import React, { useEffect, useState } from 'react';
import { StackTypes } from '../../routes/Stack';
import { useSelects } from '../../contexts/Select';
import { useCurrentPages } from '../../contexts/Pages';

interface CustomNavProps {
  pageTitle?: string;
  valuePositionNav?: string;
  textReversePositionValue?: string;
  reverseIconPositionValue?: string;
  PositionValueBackIcon?: string;
  alternateIconPositionValue?: string;
  PositionValueCloseIcon?: string;
  navIconRegister?: StyleProp<ViewStyle>;
  navIconLogin?: StyleProp<ViewStyle>;
  navIconRefresh?: StyleProp<ViewStyle>;
  navIconSave?: StyleProp<ViewStyle>;
  onPress?: () => void;
}

const CustomNavigation = ({
  pageTitle,
  valuePositionNav = '-40%',
  textReversePositionValue = '18%',
  reverseIconPositionValue = '12%',
  PositionValueBackIcon = '50%',
  alternateIconPositionValue = '90%',
  PositionValueCloseIcon = '106%',
  navIconRegister,
  navIconLogin,
  navIconRefresh,
  navIconSave,
  onPress,
}: CustomNavProps) => {
  const [navPosition, setNavPosition] = useState<'left' | 'right'>('left');
  const navigation = useNavigation<StackTypes>();
  const { setVehicleType, setCodeBrands, setCodeModel, setCodeYear } = useSelects();
  const { setCurrentBgPage } = useCurrentPages();
  const { isLoading } = useSelects();
  const [disabled, setDisabled] = useState<boolean>(true);
  const colorDisabled = disabled ? colors.originalGrey : colors.lightTransWhite;

  const toggleReverse = () => {
    setNavPosition(navPosition === 'left' ? 'right' : 'left');
  };

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

  const clearfields = () => {
    setVehicleType(''), setCodeBrands(''), setCodeModel(''), setCodeYear(''), setCurrentBgPage('');
  };

  return (
    <>
      <View style={[styles.customNav, { [navPosition]: valuePositionNav }]}>
        <Text
          style={[
            styles.reverseTextPage,
            {
              [navPosition]:
                pageTitle === 'Veículos' || pageTitle === 'Cadastro'
                  ? '24%'
                  : textReversePositionValue,
            },
          ]}
        >
          {pageTitle}
        </Text>
        <TouchableOpacity style={styles.customNavButtom} onPress={toggleReverse}>
          <View
            style={[
              styles.reversePosition,
              { [navPosition]: pageTitle === 'Veículos' ? '14%' : reverseIconPositionValue },
            ]}
          >
            {!isLoading && (
              <MatComIcons
                _matComName={'swap-horizontal'}
                _matComSize={size.bIcon}
                _matComColor={colors.lightTransWhite}
              />
            )}
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.navIconBack,
            { [navPosition]: pageTitle === 'Veículos' ? '52%' : PositionValueBackIcon },
          ]}
          onPress={() => {
            navigation.navigate('Home');
            clearfields();
          }}
          disabled={false}
        >
          <MatComIcons
            _matComName={'arrow-left-bold'}
            _matComSize={size.mIcon}
            _matComColor={colors.lightTransWhite}
          />
        </TouchableOpacity>

        {navIconRegister && (
          <TouchableOpacity
            style={[navIconRegister, { [navPosition]: alternateIconPositionValue }]}
            onPress={() => {
              navigation.navigate('Login');
            }}
            disabled={false}
          >
            <MatComIcons
              _matComName={'login'}
              _matComSize={size.mIcon}
              _matComColor={colors.lightTransWhite}
            />
          </TouchableOpacity>
        )}

        {navIconLogin && (
          <TouchableOpacity
            style={[navIconLogin, { [navPosition]: alternateIconPositionValue }]}
            onPress={() => {
              navigation.navigate('Register');
            }}
            disabled={false}
          >
            <MatComIcons
              _matComName={'account-plus'}
              _matComSize={size.mIcon}
              _matComColor={colors.lightTransWhite}
            />
          </TouchableOpacity>
        )}

        {navIconRefresh && (
          <TouchableOpacity
            style={[navIconRefresh, { [navPosition]: alternateIconPositionValue }]}
            onPress={onPress}
            disabled={false}
          >
            <MatComIcons
              _matComName={'refresh'}
              _matComSize={size.mIcon}
              _matComColor={colors.lightTransWhite}
            />
          </TouchableOpacity>
        )}

        {navIconSave && (
          <TouchableOpacity
            style={[navIconSave, { [navPosition]: alternateIconPositionValue }]}
            onPress={onPress}
            disabled={disabled}
          >
            <MatComIcons
              _matComName={'content-save-outline'}
              _matComSize={size.mIcon}
              _matComColor={colorDisabled}
            />
          </TouchableOpacity>
        )}

        <TouchableOpacity
          style={[styles.navIconClose, { [navPosition]: PositionValueCloseIcon }]}
          onPress={() => {
            handleBackButton();
          }}
          disabled={false}
        >
          <MatComIcons
            _matComName={'window-close'}
            _matComSize={size.mIcon}
            _matComColor={colors.lightTransWhite}
          />
        </TouchableOpacity>
      </View>
    </>
  );
};
export default CustomNavigation;
