import {StyleSheet, Text, View} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import {SCREENS} from '../constants/Screens';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarHideOnKeyboard: true,
        tabBarShowLabel: false,
      }}>
      <Tab.Screen name="Home Screen" component={SCREENS.HomeScreen} />
      <Tab.Screen name="Cart Screen" component={SCREENS.CartScreen} />
      <Tab.Screen name="Favorite Screen" component={SCREENS.FavoriteScreen} />
      <Tab.Screen
        name="History Screen"
        component={SCREENS.OrderHistoryScreen}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;

const styles = StyleSheet.create({});
