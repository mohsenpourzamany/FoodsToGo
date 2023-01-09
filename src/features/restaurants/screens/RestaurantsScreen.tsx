import {StyleSheet, View, SafeAreaView, StatusBar} from 'react-native';
import React from 'react';
import {Searchbar} from 'react-native-paper';
import RestaurantInfoComponent from '../components/RestaurantInfoComponent';
// import styled from '@types/styled-components';

const RestaurantsScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.search}>
        <Searchbar value="Search" />
      </View>
      <View style={styles.screen}>
        <RestaurantInfoComponent />
      </View>
    </SafeAreaView>
  );
};

export default RestaurantsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight,
  },
  search: {
    padding: 10,
    backgroundColor: '#ccc',
    color: '#eee',
    borderRadius: 5,
  },
  screen: {
    flex: 1,
    padding: 16,
    backgroundColor: '#FFA500',
  },
});
