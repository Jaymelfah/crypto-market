/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import {
  getSingleCoinFromApi,
  initialState,
} from '../../redux/singleCryptoCoin/singleCryptoCoin';

const CoinDetails = () => {
  const coin = useSelector((state) => state.singleCoin);
  const id = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getSingleCoinFromApi(id.id));
  }, []);

  return (
    <div className="coin-container flex">
      <h1>{coin.name}</h1>
      <p>{coin.symbol}</p>
      {coin === initialState ? (
        <p>Loading</p>
      ) : (
        <div>
          <img src={coin.image.large} alt="coin img" />
          <div>
            <h3>Relevant Stats</h3>
            <p>
              Categories:
              {' '}
              {coin.categories[0]}
            </p>
            <p>
              Market Cap Rank:
              {' '}
              {coin.market_cap_rank}
            </p>
            <p>
              CMC Rank:
              {' '}
              {coin.coingecko_rank}
              {' '}
            </p>
            <div>
              <h3>Daily Price</h3>
              <p>
                High 24h: $
                {`${coin.market_data.high_24h.usd}`}
              </p>
              <p>
                Low 24h: $
                {`${coin.market_data.low_24h.usd}`}
              </p>
            </div>
            <h3>Price Changes</h3>
            <div>
              <p>
                1hr: %
                {coin.market_data.price_change_percentage_1h_in_currency.usd}
              </p>
              <p>
                24h: %
                {coin.market_data.price_change_percentage_24h}
              </p>
              <p>
                30d: %
                {coin.market_data.price_change_percentage_30d}
              </p>
              <p>
                60d: %
                {' '}
                {coin.market_data.price_change_percentage_60d}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
export default CoinDetails;
