import React from 'react';
import SingleStat from './SingleStat/SingleStat';
import statics from './statistical-data.json';
import style from './Statistics.module.css';

const Statistics = ({ title }) => {
  return (
    <section className="statistics">
      {title && <h2 className={style.title}>{title}</h2>}
      <ul className={style.list}>
        {statics.map(stat => {
          return <SingleStat key={stat.id} {...stat} />;
        })}
      </ul>
    </section>
  );
};

export default Statistics;
