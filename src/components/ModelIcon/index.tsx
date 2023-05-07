import React from 'react';
import EntIcon from 'react-native-vector-icons/Entypo';
import AntIcon from 'react-native-vector-icons/AntDesign';
import Awe5Icon from 'react-native-vector-icons/FontAwesome5';
import IonIcon from 'react-native-vector-icons/Ionicons';
import AweIcon from 'react-native-vector-icons/FontAwesome';
interface EntProps {
  entName: string;
  entSize: number;
  entColor: string;
}

interface AntProps {
  antName: string;
  antSize: number;
  antColor: string;
}

interface Awe5Props {
  awe5Name: string;
  awe5Size: number;
  awe5Color: string;
}
interface AweProps {
  aweName: string;
  aweSize: number;
  aweColor: string;
}

interface IonProps {
  ionName: string;
  ionSize: number;
  ionColor: string;
}

export const EntypoIcon = ({ entName, entSize, entColor }: EntProps): JSX.Element => (
  <EntIcon name={entName} size={entSize} color={entColor} />
);

export const AntDesignIcon = ({ antName, antSize, antColor }: AntProps): JSX.Element => (
  <AntIcon name={antName} size={antSize} color={antColor} />
);

export const FontAwesome5Icon = ({ awe5Name, awe5Size, awe5Color }: Awe5Props): JSX.Element => (
  <Awe5Icon name={awe5Name} size={awe5Size} color={awe5Color} />
);

export const FontAwesomeIcon = ({ aweName, aweSize, aweColor }: AweProps): JSX.Element => (
  <AweIcon name={aweName} size={aweSize} color={aweColor} />
);

export const IonIcons = ({ ionName, ionSize, ionColor }: IonProps): JSX.Element => (
  <IonIcon name={ionName} size={ionSize} color={ionColor} />
);

export default function ModelIcon(
  { antName, antSize, antColor }: AntProps,
  { entName, entSize, entColor }: EntProps,
  { awe5Name, awe5Size, awe5Color }: Awe5Props,
  { ionName, ionSize, ionColor }: IonProps
): JSX.Element {
  return (
    <>
      <EntypoIcon entName={entName} entSize={entSize} entColor={entColor} />
      <AntDesignIcon antName={antName} antSize={antSize} antColor={antColor} />
      <FontAwesome5Icon awe5Name={awe5Name} awe5Size={awe5Size} awe5Color={awe5Color} />
      <FontAwesomeIcon aweName={awe5Name} aweSize={awe5Size} aweColor={awe5Color} />
      <IonIcons ionName={awe5Name} ionSize={awe5Size} ionColor={awe5Color} />
    </>
  );
}
