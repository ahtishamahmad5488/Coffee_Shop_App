import {create} from 'zustand';
import {produce} from 'immer';
import {persist, createJSONStorage} from 'zustand/middleware';
import AsyncStorage from '@react-native-async-storage/async-storage';
import CoffeeData from '../data/CoffeeData';
import BeansData from '../data/BeansData';

const useStore = create(
  persist(
    (set, get) => ({
      CoffeeList: CoffeeData,
      BeansList: BeansData,
      FavoriteList: [],
      CartList: [],
      OrderHistoryList: [],
      CartPrice: 0,
    }),
    {
      name: 'coffee-app',
      storage: createJSONStorage(() => AsyncStorage),
    },
  ),
);
export default useStore;
