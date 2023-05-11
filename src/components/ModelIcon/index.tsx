import React from 'react';
import EntIcon from 'react-native-vector-icons/Entypo';
import AntIcon from 'react-native-vector-icons/AntDesign';
import Awe5Icon from 'react-native-vector-icons/FontAwesome5';
import IonIcon from 'react-native-vector-icons/Ionicons';
import AweIcon from 'react-native-vector-icons/FontAwesome';
import EvilIcon from 'react-native-vector-icons/EvilIcons';
import MatComIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import FontistoIcon from 'react-native-vector-icons/Fontisto';

interface EntProps {
  _entName: string;
  _entSize: number;
  _entColor: string;
}
export const EntypoIcon = ({ _entName, _entSize, _entColor }: EntProps): JSX.Element => (
  <EntIcon name={_entName} size={_entSize} color={_entColor} />
);

interface AntProps {
  _antName: string;
  _antSize: number;
  _antColor: string;
}
export const AntDesignIcon = ({ _antName, _antSize, _antColor }: AntProps): JSX.Element => (
  <AntIcon name={_antName} size={_antSize} color={_antColor} />
);

interface Awe5Props {
  _awe5Name: string;
  _awe5Size: number;
  _awe5Color: string;
}
export const FontAwesome5Icon = ({ _awe5Name, _awe5Size, _awe5Color }: Awe5Props): JSX.Element => (
  <Awe5Icon name={_awe5Name} size={_awe5Size} color={_awe5Color} />
);

interface AweProps {
  _aweName: string;
  _aweSize: number;
  _aweColor: string;
}
export const FontAwesomeIcon = ({ _aweName, _aweSize, _aweColor }: AweProps): JSX.Element => (
  <AweIcon name={_aweName} size={_aweSize} color={_aweColor} />
);

interface IonProps {
  _ionName: string;
  _ionSize: number;
  _ionColor: string;
}
export const IonIcons = ({ _ionName, _ionSize, _ionColor }: IonProps): JSX.Element => (
  <IonIcon name={_ionName} size={_ionSize} color={_ionColor} />
);

interface EvilProps {
  _evilName: string;
  _evilSize: number;
  _evilColor: string;
}
export const EvilIcons = ({ _evilName, _evilSize, _evilColor }: EvilProps): JSX.Element => (
  <EvilIcon name={_evilName} size={_evilSize} color={_evilColor} />
);

interface MatComProps {
  _matComName: string;
  _matComSize: number;
  _matComColor: string;
}
export const MatComIcons = ({
  _matComName,
  _matComSize,
  _matComColor,
}: MatComProps): JSX.Element => (
  <MatComIcon name={_matComName} size={_matComSize} color={_matComColor} />
);

interface FontistoProps {
  _fontName: string;
  _fontSize: number;
  _fontColor: string;
}
export const FontistoIcons = ({ _fontName, _fontSize, _fontColor }: FontistoProps): JSX.Element => (
  <FontistoIcon name={_fontName} size={_fontSize} color={_fontColor} />
);
