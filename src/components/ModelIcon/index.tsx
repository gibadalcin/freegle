import React from 'react';
import EntIcon from 'react-native-vector-icons/Entypo';
import AntIcon from 'react-native-vector-icons/AntDesign';

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

export default function ModelIcon(
  { antName, antSize, antColor, antOnPress }: AntProps,
  { entName, entSize, entColor, entOnPress }: EntProps
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
    </>
  );
}
