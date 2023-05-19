import 'react-native-gesture-handler';
import { Image } from 'react-native';
import { useEffect, useState } from 'react';
import { useSelects } from '../../contexts/Select';
import styles from './style';
import React from 'react';

const BgImage = () => {
  const { vehicleType } = useSelects();
  const [showBgCar, setShowBgCar] = useState<boolean>(true);
  const [showBgMotorcycle, setShowBgMotorcycle] = useState<boolean>(false);
  const [showBgTruck, setShowBgTruck] = useState<boolean>(false);

  useEffect(() => {
    switch (vehicleType) {
      case 'motos':
        setShowBgCar(false);
        setShowBgTruck(false);
        setShowBgMotorcycle(true);
        break;
      case 'caminhoes':
        setShowBgCar(false);
        setShowBgMotorcycle(false);
        setShowBgTruck(true);
        break;
      default:
        setShowBgMotorcycle(false);
        setShowBgTruck(false);
        setShowBgCar(true);
        break;
    }
  }, [vehicleType]);

  return (
    <>
      {showBgMotorcycle && (
        <Image
          source={require('../../assets/static_bg_motorcycle.png')}
          style={styles.imageBackground}
        />
      )}
      {showBgCar && (
        <Image source={require('../../assets/static_bg_car.png')} style={styles.imageBackground} />
      )}
      {showBgTruck && (
        <Image
          source={require('../../assets/static_bg_truck.png')}
          style={styles.imageBackground}
        />
      )}
    </>
  );
};

export default BgImage;
