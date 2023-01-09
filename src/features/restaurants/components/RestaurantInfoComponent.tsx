import {StyleSheet, Text} from 'react-native';
import React from 'react';
import {Card} from 'react-native-paper';

const RestaurantInfo = ({restaurant = {}}) => {
  const {
    name = 'some restaurant',
    icon,
    photos = [
      'https://www.foodiesfeed.com/wp-content/uploads/2019/06/top-view-for-box-of-2-burgers-home-made-600x899.jpg',
    ],
    addres = '100 some random street',
    openingNow = true,
    isClosedTemporarly,
  } = restaurant;
  return (
    <Card style={styles.card}>
      <Card.Cover key={name} style={styles.cover} source={{uri: photos[0]}} />
      <Text style={styles.title}>{name}</Text>
    </Card>
  );
};

export default RestaurantInfo;

const styles = StyleSheet.create({
  card: {backgroundColor: 'white'},
  cover: {padding: 20, backgroundColor: 'white'},
  title: {padding: 16, color: 'red'},
});
