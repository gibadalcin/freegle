import React from 'react';
import { View } from 'react-native';
import { ProgressBar } from '@react-native-community/progress-bar-android';

interface StrengthBar {
  color?: string;
  progress?: number;
  styleAttr?:
    | 'Horizontal'
    | 'Normal'
    | 'Small'
    | 'Large'
    | 'Inverse'
    | 'SmallInverse'
    | 'LargeInverse';
  indeterminate?: boolean;
}

export default function PassStrengthBar({
  color,
  progress,
  styleAttr,
  indeterminate,
}: StrengthBar) {
  return (
    <>
      <ProgressBar
        color={color}
        styleAttr={styleAttr}
        indeterminate={indeterminate}
        progress={progress}
      />
    </>
  );
}
