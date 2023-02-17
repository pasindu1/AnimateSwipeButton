import React from 'react';
import {
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import Animated, {
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
  Easing,
  Extrapolate,
  interpolateColor,
} from 'react-native-reanimated';

const BUTTON_WIDTH = 150;
const BUTTON_HEIGHT = 80;
const SWITCH_BUTTON_PADDING = 4;
const SWITCH_BUTTON_AREA = BUTTON_HEIGHT - SWITCH_BUTTON_PADDING;
const InterpolateXInput = [0, 1];

const AnimatedSwitchButton = () => {
  const shareValue = useSharedValue(0);
  const onPressSwitch = () => {
    if (shareValue.value === 0) {
      shareValue.value = withTiming(1, {
        duration: 800,
        easing: Easing.bezier(0.4, 0.0, 0.2, 1),
      });
    } else {
      shareValue.value = withTiming(0, {
        duration: 800,
        easing: Easing.bezier(0.4, 0.0, 0.2, 1),
      });
    }
  };

  const switchAreaStyles = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateX: interpolate(
            shareValue.value,
            InterpolateXInput,
            [0, BUTTON_WIDTH - SWITCH_BUTTON_AREA - 2 * SWITCH_BUTTON_PADDING],
            Extrapolate.CLAMP,
          ),
        },
      ],
      backgroundColor: interpolateColor(shareValue.value, InterpolateXInput, [
        '#c3c3c3',
        '#707070',
      ]),
    };
  });
  return (
    <TouchableOpacity
      onPress={onPressSwitch}
      activeOpacity={1}
      style={styles.containerStyle}>
      <Animated.View style={[styles.switchButton, switchAreaStyles]} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  containerStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    height: BUTTON_HEIGHT,
    width: BUTTON_WIDTH,
    backgroundColor: 'white',
    borderRadius: 500,
    borderColor:'#D8D8D8',
    borderWidth:1,
  },
  switchButton: {
    height: SWITCH_BUTTON_AREA,
    width: SWITCH_BUTTON_AREA,
    backgroundColor: 'red',
    position: 'absolute',
    left: SWITCH_BUTTON_PADDING,
    borderRadius: 100,
  },
});

export default AnimatedSwitchButton;
