import PropTypes from 'prop-types';
import styles from './FriendList.module.css';
import friends from 'components/FriendList/friends';
// function FriendListItem() {
const FriendListItem = friends.map(({ id, avatar, name, isOnline }) => {
        // { console.log(id, avatar, name, isOnline); }
        return (
            <li key={id.toString()} className={styles.item}>
                <span className={styles.status}>{isOnline}</span>
                <img className={styles.avatar} src={avatar} alt={name} width="48" />
                <p className={styles.name}>{name}</p>
            </li>
        );
    });
// };
const FriendList = ({ friends }) => {
// {console.log(friends);}
    return (
      <ul className={styles.friendList}>
        {FriendListItem}
        {/* {friends.map(({ id, avatar, name, isOnline }) => (
          <li key={id.toString()} className={styles.item}>
            <span className={styles.status}>{isOnline}</span>
            <img className={styles.avatar} src={avatar} alt={name} width="48" />
            <p className={styles.name}>{name}</p>
          </li>
        ))} */}
      </ul>
    );
};
export default FriendList;
// FriendListItem.propTypes = {
//   avatar: PropTypes.string.isRequired,
//   name: PropTypes.string.isRequired,
//   isOnline: PropTypes.bool.isRequired,
//   id: PropTypes.number.isRequired,
// };
