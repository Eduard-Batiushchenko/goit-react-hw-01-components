import React from 'react';
import user from './user.json';
import style from './Profile.module.css';
import SingleProfile from './SingleProfile/SingleProfile';

const Profile = () => {
  return (
    <div className={style.profile}>
      <SingleProfile {...user} />
    </div>
  );
};

export default Profile;
