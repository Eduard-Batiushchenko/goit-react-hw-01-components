import React from 'react';
import Proptypes from 'prop-types';
import style from './SingleProfile.module.css';

const SingleProfile = ({ name, avatar, tag, location, stats }) => {
  return (
    <>
      <div className={style.description}>
        <img src={avatar} alt={name} className={style.avatar} width="80" />
        <p className={style.name}>{name}</p>
        <p className={style.tag}>@{tag}</p>
        <p className={style.location}>{location}</p>
      </div>

      <ul className={style.stats}>
        <li className={style.item}>
          <span className="label">Followers</span>
          <span className="quantity">{stats.followers}</span>
        </li>
        <li className={style.item}>
          <span className="label">Views</span>
          <span className="quantity">{stats.views}</span>
        </li>
        <li className={style.item}>
          <span className="label">Likes</span>
          <span className="quantity">{stats.likes}</span>
        </li>
      </ul>
    </>
  );
};

SingleProfile.defaultProps = {
  avatar: 'avatar',
};

SingleProfile.propTypes = {
  name: Proptypes.string.isRequired,
  avatar: Proptypes.string,
  tag: Proptypes.string.isRequired,
  location: Proptypes.string.isRequired,
  stats: Proptypes.object.isRequired,
};

export default SingleProfile;
