import * as React from 'react';
import {StyleSheet, View} from 'react-native';
import {ColorPresets} from '../theme/color';
import {scaleFont, scalePresets} from '../theme/metrics';
import {TextAtom} from '../components/atoms/TextAtom';

interface SuccessScreenProps {}

export const SuccessScreen: React.FC<SuccessScreenProps> = ({}) => {
  return (
    <View style={styles.container}>
      <TextAtom
        style={styles.content}
        text="Yay! Congratulations. Have an awesome app experience."
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: ColorPresets.white,
    alignItems: 'center',
    justifyContent: 'center',
    padding: scalePresets.baseScale,
  },
  content: {
    fontSize: scaleFont(24),
    lineHeight: scaleFont(30),
    letterSpacing: 0,
    textAlign: 'center',
  },
});
