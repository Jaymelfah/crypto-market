import { configureStore } from '@reduxjs/toolkit';
import CoinReducer from './allCryptoCoins/allCryptoCoins';

const store = configureStore({
  reducer: {
    coins: CoinReducer,

  },
});

export default store;
