/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';

import SwipeButton from './src/components/SwipeButton';
import AnimatedAccordion from './src/components/AnimatedAccordion';
import AnimatedSwitchButton from './src/components/AnimatedSwitchButton';
import SwitchListItems from './src/toggleSwitchList/toggleSwitchList';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      {/* <SwipeButton onToggle={() => {}}/>
      <AnimatedAccordion /> */}
      {/* <AnimatedSwitchButton /> */}
      <SwitchListItems/>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    height: '100%',
    // flexDirection: 'column',
    // justifyContent: 'center',
    // alignItems: 'center',
    backgroundColor:'#95C8D8',
  },
});

export default App;
