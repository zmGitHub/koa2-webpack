import React from 'react';
import avatar from './avatar.png';
import './Avatar.scss';

const Avatar = () => (
  <div className="ant-header-user">
    <ul className="ant-header-navbar">
      <li>
        <img src={avatar} alt="next champions" />
        <span>夏雨荷</span>
      </li>
    </ul>
  </div>
);
Avatar.propTypes = {
  handleClick: React.PropTypes.func,
};
export default Avatar;
