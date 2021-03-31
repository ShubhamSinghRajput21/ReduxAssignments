import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  FlatList,
  Text,
  StatusBar,
} from 'react-native';
import ProductCard from './src/components/ProductCard';

const DATA = [
  {
    id: 1,
    title: 'Boat Stone HeadPhones cordless',
    price: '100$',
    offerDuration: {
      days: '0',
      hours: '0',
      minutes: '0',
      seconds: '3',
    },
  },
  {
    id: 2,
    title: 'Boat Stone HeadPhones cordless',
    price: '100$',
    offerDuration: {
      days: '0',
      hours: '0',
      minutes: '0',
      seconds: '10',
    },
  },
  {
    id: 3,
    title: 'Boat Stone HeadPhones cordless',
    price: '100$',
    offerDuration: {
      days: '0',
      hours: '12',
      minutes: '0',
      seconds: '0',
    },
  },
  {
    id: 4,
    title: 'Boat Stone HeadPhones cordless',
    price: '100$',
    offerDuration: {
      days: '0',
      hours: '0',
      minutes: '1',
      seconds: '0',
    },
  },
  {
    id: 5,
    title: 'Boat Stone HeadPhones cordless',
    price: '100$',
    offerDuration: {
      days: '0',
      hours: '1',
      minutes: '10',
      seconds: '0',
    },
  },
  {
    id: 6,
    title: 'Boat Stone HeadPhones cordless',
    price: '100$',
    offerDuration: {
      days: '0',
      hours: '0',
      minutes: '2',
      seconds: '0',
    },
  },
];

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={styles.safeAreaView}>
        <FlatList
          data={DATA}
          renderItem={({item}) => <ProductCard {...item} />}
          keyExtractor={(item) => item.id.toString()}
        />
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
  },
});

export default App;
