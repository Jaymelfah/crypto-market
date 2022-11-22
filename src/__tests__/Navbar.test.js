import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import Navbar from '../components/Navbar';
import store from '../redux/configureStore';
import '@testing-library/jest-dom';

describe('navbar rendering', () => {
  test('Render navbar correctly', () => {
    const navbar = render(
      <React.StrictMode>
        <Provider store={store}>
          <BrowserRouter>
            <Navbar />
          </BrowserRouter>
        </Provider>
      </React.StrictMode>,
    );
    expect(navbar).toMatchSnapshot();
  });
  test('check if logo title displays correctly', () => {
    render(
      <React.StrictMode>
        <Provider store={store}>
          <BrowserRouter>
            <Navbar />
          </BrowserRouter>
        </Provider>
      </React.StrictMode>,
    );
    expect(screen.getByText(/Crypto-Base/i)).toBeInTheDocument();
  });
  test('check if logo image displays', () => {
    render(
      <React.StrictMode>
        <Provider store={store}>
          <BrowserRouter>
            <Navbar />
          </BrowserRouter>
        </Provider>
      </React.StrictMode>,
    );
    const image = screen.getByRole('img');
    expect(image).toBeInTheDocument();
  });
});
