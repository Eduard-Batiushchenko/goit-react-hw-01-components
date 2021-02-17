import React from 'react';
import style from './SingleStat.module.css';
import PropTypes from 'prop-types';

const SingleStat = ({ label, percentage }) => {
  const r = () => (Math.random() * 256) >> 0;
  const color = `rgb(${r()}, ${r()}, ${r()})`;
  return (
    <>
      <li className={style.item} style={{ backgroundColor: color }}>
        <span className={style.label}>.{label}</span>
        <span className={style.percentage}>{percentage}%</span>
      </li>
    </>
  );
};
SingleStat.propTypes = {
  label: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,
};

export default SingleStat;
