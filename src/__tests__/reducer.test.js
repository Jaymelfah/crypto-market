import reducer from '../redux/allCryptoCoins/allCryptoCoins';

const mockStore = {
  coins: [
    {
      id: 'ethereum',
      name: 'ethereum',
      image: '',
      rank: 2,
      currentPrice: 232,
    },
  ],
};

describe('testing the coin reducer', () => {
  test('test coin reducer with mock store data', () => {
    const store = mockStore;
    const action = {
      type: 'coins/getData',
      payload: {
        id: 'ethereum',
        name: 'ethereum',
        image: '',
        rank: 2,
        currentPrice: 232,
      },
    };
    expect(reducer(store.coins, action)).toEqual([{

      id: 'ethereum',
      name: 'ethereum',
      image: '',
      rank: 2,
      currentPrice: 232,

    }]);
  });
});
