import React from 'react';
import EntIcon from 'react-native-vector-icons/Entypo';
import AntIcon from 'react-native-vector-icons/AntDesign';
import Awe5Icon from 'react-native-vector-icons/FontAwesome5';
interface EntProps {
  entName: string;
  entSize: number;
  entColor: string;
  entOnPress?: () => void;
}

interface AntProps {
  antName: string;
  antSize: number;
  antColor: string;
  antOnPress?: () => void;
}

interface Awe5Props {
  awe5Name: string;
  awe5Size: number;
  awe5Color: string;
  awe5OnPress?: () => void;
}

export const EntypoIcon = ({ entName, entSize, entColor, entOnPress }: EntProps): JSX.Element => (
  <EntIcon name={entName} size={entSize} color={entColor} onPress={entOnPress} />
);

export const AntDesignIcon = ({
  antName,
  antSize,
  antColor,
  antOnPress,
}: AntProps): JSX.Element => (
  <AntIcon name={antName} size={antSize} color={antColor} onPress={antOnPress} />
);

export const FontAwesome5Icon = ({
  awe5Name,
  awe5Size,
  awe5Color,
  awe5OnPress,
}: Awe5Props): JSX.Element => (
  <Awe5Icon name={awe5Name} size={awe5Size} color={awe5Color} onPress={awe5OnPress} />
);

export default function ModelIcon(
  { antName, antSize, antColor, antOnPress }: AntProps,
  { entName, entSize, entColor, entOnPress }: EntProps,
  { awe5Name, awe5Size, awe5Color, awe5OnPress }: Awe5Props
): JSX.Element {
  return (
    <>
      <EntypoIcon entName={entName} entSize={entSize} entColor={entColor} entOnPress={entOnPress} />
      <AntDesignIcon
        antName={antName}
        antSize={antSize}
        antColor={antColor}
        antOnPress={antOnPress}
      />
      <FontAwesome5Icon
        awe5Name={awe5Name}
        awe5Size={awe5Size}
        awe5Color={awe5Color}
        awe5OnPress={awe5OnPress}
      />
    </>
  );
}
