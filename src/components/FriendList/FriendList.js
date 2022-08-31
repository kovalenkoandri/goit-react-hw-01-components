import PropTypes from 'prop-types';
import styles from './FriendList.module.css';
import friends from 'components/FriendList/friends';
const FriendListItem = friends.map(({ id, avatar, name, isOnline }) => {
  let onlineColor = '';
  isOnline === true && (onlineColor = 'green');
  isOnline === false && (onlineColor = 'red');
  return (
    <li key={id} className={styles.item}>
      <span className={styles.status} style={{ backgroundColor: onlineColor }}>
        {isOnline}
      </span>
      <img className={styles.avatar} src={avatar} alt={name} width="48" />
      <p className={styles.name}>{name}</p>
    </li>
  );
});
const FriendList = ({ friends }) => {
  // how to forward friends to FriendListItem
  return <ul className={styles.friendList}>{FriendListItem}</ul>;
};
export default FriendList;
FriendListItem.propTypes = { // how to make it work
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
  id: PropTypes.number.isRequired,
};
