import React from 'react';
import PropTypes from 'prop-types';
import {} from './Statistics.styled';

export const Statistics = ({ good, neutral, bad }) => {
  let total = good + neutral + bad;
  let positive = 0;
  if (total) {
    positive = Math.round(((good + neutral) * 100) / total);
  }

  return (
    <>
      <p>
        Good: <span>{good}</span>
      </p>
      <p>
        Neutral: <span>{neutral}</span>
      </p>
      <p>
        Bad: <span>{bad}</span>
      </p>
      <p>
        Total: <span>{total}</span>
      </p>
      <p>
        Positive feedback: <span>{positive}%</span>
      </p>
    </>
  );
};

export const Notification = ({ message }) => {
  return (
    <>
      <h2>{message}</h2>
    </>
  );
};

Statistics.propTypes = {
  good: PropTypes.number,
  neutral: PropTypes.number,
  bad: PropTypes.number,
};

Notification.propTypes = {
  message: PropTypes.string,
};
