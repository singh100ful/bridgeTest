import * as React from 'react';
import {Text, TextProps, TextStyle} from 'react-native';
import {ColorPresets} from '../../theme/color';
import {scaleFont} from '../../theme/metrics';

interface TextAtomProps extends TextProps {
  text?: string;
  style?: TextStyle;
}

export const TextAtom: React.FC<TextAtomProps> = ({text, style, ...rest}) => {
  return (
    <Text
      style={[
        {
          flexShrink: 1,
          flexWrap: 'wrap',
          color: ColorPresets.primaryText,
          fontSize: scaleFont(16),
          lineHeight: scaleFont(19),
          letterSpacing: 0,
        },
        style,
      ]}
      {...rest}>
      {text}
    </Text>
  );
};
