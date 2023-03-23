import PropTypes from 'prop-types';
import s from './FriendListItem.module.css';

function FriendListItem({ isOnline, avatar, name }) {
  return (
    <li className={s.item}>
      <span className={isOnline ? s.statusTrue : s.statusFalse}></span>
      <img className={s.avatar} src={avatar} alt="User avatar" width="48" />
      <p className={s.name}>{name}</p>
    </li>
  );
}

FriendListItem.prototype = {
  isOnline: PropTypes.bool.isRequired,
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default FriendListItem;
