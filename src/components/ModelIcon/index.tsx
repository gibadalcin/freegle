import React from 'react';
import Awe5Icon from 'react-native-vector-icons/FontAwesome5';
import MatComIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import FontistoIcon from 'react-native-vector-icons/Fontisto';

interface Awe5Props {
  _awe5Name: string;
  _awe5Size: number;
  _awe5Color: string;
}
export const FontAwesome5Icon = ({ _awe5Name, _awe5Size, _awe5Color }: Awe5Props): JSX.Element => (
  <Awe5Icon name={_awe5Name} size={_awe5Size} color={_awe5Color} />
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
