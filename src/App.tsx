import React from 'react';
import {SafeAreaView} from 'react-native';
import AppNavigator from './navigation/Navigator';

export default function App() {
  return (
    <>
      <SafeAreaView />
      <AppNavigator />
    </>
  );
}