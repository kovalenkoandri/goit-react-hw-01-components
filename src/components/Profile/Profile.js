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
  <div className="profile">
    <div class="description" className={styles.cards}>
      <img
        src={avatar}
        alt={username}
        className={styles.avatar}
      />
      <p class="name" className={styles.card}>
        {username}
      </p>
      <p class="tag" className={styles.card}>
        {tag}
      </p>
      <p class="location" className={styles.card}>
        {location}
      </p>
    </div>
    {/* <Wrapper> */}
    <ul class="stats" className={styles.cards}>
      <li className={styles.card}>
        <span class="label">Followers: </span>
        <span class="quantity">{followers}</span>
      </li>
      <li className={styles.card}>
        <span class="label">Views: </span>
        <span class="quantity">{views}</span>
      </li>
      <li className={styles.card}>
        <span class="label">Likes: </span>
        <span class="quantity">{likes}</span>
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
