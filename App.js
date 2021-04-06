import React from 'react';
import {StyleSheet} from 'react-native';
import {Provider} from 'react-redux';
import store from './src/store/Store';
import BottomTab from './src/navigation/BottomTab';

const App = () => {
  return (
    <Provider store={store}>
      <BottomTab />
    </Provider>
  );
};

const styles = StyleSheet.create({});

export default App;
