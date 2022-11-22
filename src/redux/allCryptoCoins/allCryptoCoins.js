import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const url = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=25&page=1&sparkline=false&price_change_percentage=1h';
const initialState = [];

export const getCoinsFromApi = createAsyncThunk('coins/getData',
  async () => {
    const response = await fetch(url);
    const data = await response.json();
    const coinsData = data.map((coin) => ({
      id: coin.id,
      name: coin.name,
      image: coin.image,
      rank: coin.market_cap_rank,
      currentPrice: coin.current_price,

    }));
    return coinsData;
  });

export const CoinSlice = createSlice({
  name: 'coin',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getCoinsFromApi.fulfilled, (state, action) => action.payload);
  },

});

export default CoinSlice.reducer;
