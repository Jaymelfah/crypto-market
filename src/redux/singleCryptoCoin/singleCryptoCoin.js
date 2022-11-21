import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const initialState = true;

const url = 'https://api.coingecko.com/api/v3/coins/';

export const getSingleCoinFromApi = createAsyncThunk('coins/getSingleData', async (id) => {
  const response = await fetch(`${url}${id}`);
  const data = await response.json();
  return data;
});

export const SingleCoinSlice = createSlice({
  name: 'singleCoin',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getSingleCoinFromApi.pending, () => initialState);
    builder.addCase(getSingleCoinFromApi.fulfilled, (state, action) => action.payload);
  },

});

export default SingleCoinSlice.reducer;
