import React from 'react';
import PropTypes from 'prop-types';

const CoinCard = (props) => {
  const { coins } = props;

  return (

    <div className="coin-card flex">
      <h4>{coins.name}</h4>
      <img src={coins.image} alt={coins.name} />
      <p>
        Market Ranking:
        {' '}
        {coins.rank}
      </p>
      <p>
        Price:
        {' '}
        $
        {' '}
        {coins.currentPrice}
      </p>
    </div>

  );
};

CoinCard.propTypes = {
  coins: PropTypes.array,
}.isRequired;

export default CoinCard;
