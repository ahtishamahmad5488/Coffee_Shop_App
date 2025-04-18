import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import useStore from '../store/Store';

const CartScreen = () => {
  const CartList = useStore(state => state.CartList);
  console.log('CartList= ', CartList.length);

  return (
    <View>
      <Text>CartScreen</Text>
    </View>
  );
};

export default CartScreen;

const styles = StyleSheet.create({});
