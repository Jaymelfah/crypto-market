import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import CoinCard from '../components/CoinCard';
import store from '../redux/configureStore';
import '@testing-library/jest-dom';

describe('Coin Card Rendering', () => {
  const coins = {
    name: 'Ethereum',
    image: '',
    rank: 2,
    currentPrice: '234',
  };
  test('Check if an image is rendered', () => {
    render(
      <React.StrictMode>
        <Provider store={store}>
          <BrowserRouter>
            <CoinCard coins={coins} />
          </BrowserRouter>
        </Provider>
      </React.StrictMode>,
    );
    const image = screen.getByRole('img');
    expect(image).toBeTruthy();
  });

  test('Render coin cards on the page', () => {
    const coinCard = render(
      <React.StrictMode>
        <Provider store={store}>
          <BrowserRouter>
            <CoinCard coins={coins} />
          </BrowserRouter>
        </Provider>
      </React.StrictMode>,
    );
    expect(coinCard).toMatchSnapshot();
  });
});
