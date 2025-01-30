import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import useStore from '../store/Store';

const DetailsScreen = ({navigation, route}) => {
  const ItemOfIndex = useStore(state =>
    route.params.type == 'Coffee' ? state.CoffeeList : state.BeanList,
  )[route.params.index];

  return (
    <View>
      <Text>DetailsScreen</Text>
    </View>
  );
};

export default DetailsScreen;

const styles = StyleSheet.create({});
