import PropTypes from 'prop-types';
import urlPropType from 'url-prop-type';
import Wrapper from './Wrapper.styled';
const listStyled = {
  listStyleType: 'none',  
};
const Profile = ({
  avatar,
  username,
  tag,
  location,
  followers,
  views,
  likes,
}) => (
  <div class="profile">
    <div class="description">
      <img src={avatar} alt={username} class="avatar" />
      <p class="name">{username}</p>
      <p class="tag">{tag}</p>
      <p class="location">{location}</p>
    </div>
    <Wrapper>
      <ul class="stats" style={ listStyled }>
        <li>
          <span class="label">Followers</span>
          <span class="quantity">{followers}</span>
        </li>
        <li>
          <span class="label">Views</span>
          <span class="quantity">{views}</span>
        </li>
        <li>
          <span class="label">Likes</span>
          <span class="quantity">{likes}</span>
        </li>
      </ul>
    </Wrapper>
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
