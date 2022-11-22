import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import HomePage from '../components/Pages/HomePage';
import store from '../redux/configureStore';
import '@testing-library/jest-dom';

describe('home page rendering', () => {
  test('Render home page correctly', () => {
    const homePage = render(
      <React.StrictMode>
        <Provider store={store}>
          <BrowserRouter>
            <HomePage />
          </BrowserRouter>
        </Provider>
      </React.StrictMode>,
    );
    expect(homePage).toMatchSnapshot();
  });
  test('check if input is present', () => {
    render(
      <React.StrictMode>
        <Provider store={store}>
          <BrowserRouter>
            <HomePage />
          </BrowserRouter>
        </Provider>
      </React.StrictMode>,
    );
    const input = screen.getByRole('textbox');
    expect(input).toBeInTheDocument();
  });
});
