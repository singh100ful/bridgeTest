import {Dimensions} from 'react-native';
export const WINDOW_WIDTH = Dimensions.get('window').width;
export const WINDOW_HEIGHT = Dimensions.get('window').height;
const guidelineBaseWidth = 360;
const guidelineBaseHeight = 640;

export const scaleSize = (size: number) =>
  (WINDOW_WIDTH / guidelineBaseWidth) * size;

export const moderateScale = (size: number, factor: number = 0.5) =>
  size + (scaleSize(size) - size) * factor;

export const verticalScale = (size: number) =>
  (WINDOW_HEIGHT / guidelineBaseHeight) * size;

export const scaleFont = (size: number, factor = 0.5) =>
  size + (scaleSize(size) - size) * factor;

export const scalePresets = {
  screenWidth: WINDOW_WIDTH,
  screenHeight: WINDOW_HEIGHT,
  smallScale: moderateScale(8),
  mediumScale: moderateScale(10),
  baseScale: moderateScale(16),
  largeScale: moderateScale(20),
};
