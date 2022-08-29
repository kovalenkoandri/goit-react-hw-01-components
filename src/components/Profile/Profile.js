import PropTypes from 'prop-types';
import urlPropType from 'url-prop-type';
// import Wrapper from './Wrapper.styled';
import styles from './Profile.module.css';
const Profile = ({
  avatar,
  username,
  tag,
  location,
  followers,
  views,
  likes,
}) => (
  <div className={styles.profile}>
    <div className={styles.description}>
      <img src={avatar} alt={username} className={styles.avatar} />
      <p className={styles.name}>{username}</p>
      <p className={styles.tag}>@{tag}</p>
      <p className={styles.location}>{location}</p>
    </div>
    {/* <Wrapper> */}
    <ul className={styles.stats}>
      <li className={styles.card}>
        <span className={styles.label}>Followers</span>
        <span className={styles.quantity}>{followers}</span>
      </li>
      <li className={styles.card}>
        <span className={styles.label}>Views</span>
        <span className={styles.quantity}>{views}</span>
      </li>
      <li className={styles.card}>
        <span className={styles.label}>Likes</span>
        <span className={styles.quantity}>{likes}</span>
      </li>
    </ul>
    {/* </Wrapper> */}
  </div>
);
export default Profile;
Profile.propTypes = {
  avatar: urlPropType.isRequired,
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  followers: PropTypes.number.isRequired,
  views: PropTypes.number.isRequired,
  likes: PropTypes.number.isRequired,
};
