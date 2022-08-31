import PropTypes from 'prop-types';
import styles from './FriendList.module.css';
const FriendListItem = ({ friends }) => {
  let onlineColor = '';
  return friends.map(({ id, avatar, name, isOnline }) => {
    isOnline === true && (onlineColor = 'green');
    isOnline === false && (onlineColor = 'red');
    return (
      <li key={id} className={styles.item}>
        <span
          className={styles.status}
          style={{ backgroundColor: onlineColor }}
        >
          {isOnline}
        </span>
        <img className={styles.avatar} src={avatar} alt={name} width="48" />
        <p className={styles.name}>{name}</p>
      </li>
    );
  });
};
const FriendList = ({ friends }) => {
  return (
    <ul className={styles.friendList}>
      <FriendListItem friends={friends} />
    </ul>
  );
};
export default FriendList;
FriendListItem.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.exact({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired,
      isOnline: PropTypes.boolean.isRequired,
    }),
  ),
};