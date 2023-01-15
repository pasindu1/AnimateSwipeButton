import React from 'react';
import {StyleSheet, View} from 'react-native';
import {PanGestureHandler} from 'react-native-gesture-handler';
import LinearGradient from 'react-native-linear-gradient';
import Animated, {
  Extrapolate,
  interpolate,
  interpolateColor,
  useAnimatedGestureHandler,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  runOnJS,
} from 'react-native-reanimated';
import {useState} from 'react';
const BUTTON_WIDTH = 350;
const BUTTON_HEIGHT = 100;
const BUTTON_PADDING = 10;
const SWIPEABLE_DIMENSIONS = 100 - 2 * BUTTON_PADDING;

const H_WAVE_RANGE = SWIPEABLE_DIMENSIONS + 2 * BUTTON_PADDING;
const H_SWIPE_RANGE = BUTTON_WIDTH - 2 * BUTTON_PADDING - SWIPEABLE_DIMENSIONS;

const SwipeButton = ({onToggle}) => {

    
  return (
    <View style={styles.containerStyle}>
      <PanGestureHandler onGestureEvent={animatedGestureHandler}>
        <View style={styles.swipeableCircle}></View>
      </PanGestureHandler>
    </View>
  );
};

const styles = StyleSheet.create({
  containerStyle: {
    backgroundColor: 'white',
    height: BUTTON_HEIGHT,
    width: BUTTON_WIDTH,
    borderRadius: 100,
    alignItems: 'center',
    justifyContent: 'center',
  },
  swipeableCircle: {
    height: SWIPEABLE_DIMENSIONS,
    width: SWIPEABLE_DIMENSIONS,
    backgroundColor: 'red',
    borderRadius: 100,
    position: 'absolute',
    zIndex: 3,
    left: BUTTON_PADDING,
  },
  swipeText: {
    alignSelf: 'center',
    fontSize: 18,
    fontWeight: 'bold',
    zIndex: 2,
    color: '#1b9aaa',
  },
  background: {
    height: BUTTON_HEIGHT,
    borderRadius: BUTTON_HEIGHT,
    position: 'absolute',
    left: 0,
    backgroundColor: 'red',
  },
});

export default SwipeButton;
