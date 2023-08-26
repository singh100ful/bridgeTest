import * as React from 'react';
import {Pressable, PressableProps, StyleSheet} from 'react-native';
import {TextAtom} from './TextAtom';
import {preset} from '../../../jest.config';
import {ColorPresets} from '../../theme/color';
import {scalePresets} from '../../theme/metrics';

interface ButtonAtomProps extends PressableProps {
  title: string;
}

export const ButtonAtom: React.FC<ButtonAtomProps> = ({title, ...rest}) => {
  return (
    <Pressable style={styles.container} {...rest}>
      <TextAtom text={title} style={{color: ColorPresets.white}} />
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: scalePresets.baseScale,
    paddingVertical: scalePresets.mediumScale,
    alignItems: 'center',
    backgroundColor: ColorPresets.primaryRed,
    marginVertical: scalePresets.mediumScale,
    borderRadius: scalePresets.mediumScale,
  },
});
