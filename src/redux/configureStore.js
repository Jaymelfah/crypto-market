import { configureStore } from '@reduxjs/toolkit';
import CoinReducer from './allCryptoCoins/allCryptoCoins';
import SingleCoinReducer from './singleCryptoCoin/singleCryptoCoin';

const store = configureStore({
  reducer: {
    coins: CoinReducer,
    singleCoin: SingleCoinReducer,
  },
});

export default store;
