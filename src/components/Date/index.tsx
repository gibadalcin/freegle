import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';

const DateControl: React.FC = () => {
  const [currentDate, setCurrentDate] = useState<string>('');

  useEffect(() => {
    const currentDate = new Date().toLocaleDateString();
    setCurrentDate(currentDate);
  }, []);

  return (
    <View>
      <Text>{currentDate}</Text>
    </View>
  );
};

export default DateControl;
