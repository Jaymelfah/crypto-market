import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import CoinDetails from '../components/Pages/CoinDetails';
import store from '../redux/configureStore';

describe('Coin details', () => {
  test('Render coin details page', () => {
    const coinDetails = render(
      <React.StrictMode>
        <Provider store={store}>
          <BrowserRouter>
            <CoinDetails />
          </BrowserRouter>
        </Provider>
      </React.StrictMode>,
    );
    expect(coinDetails).toMatchSnapshot();
  });
});
