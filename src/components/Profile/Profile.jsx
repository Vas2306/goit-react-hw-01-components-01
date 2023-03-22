import PropTypes from "prop-types";
import "./Profile.css"
const Profile = (props) => {
  const { username,tag,location,avatar,stats:{followers,views,likes} } = props;
    return (
         <div className="profile">
  <div className="description">
    <img
      src={avatar}
      alt="User avatar"
      className="avatar"
    />
    <p className="name">{username}</p>
    <p className="tag">@{tag}</p>
    <p className="location">{location}</p>
  </div>

  <ul className="stats">
    <li className="item">
      <span className="label">Followers</span>
      <span className="quantity">{followers}</span>
    </li>
    <li className="item">
      <span className="label">Views</span>
      <span className="quantity">{views}</span>
    </li>
    <li className="item">
      <span className="label">Likes</span>
      <span className="quantity">{likes}</span>
    </li>
  </ul>
</div>
    );
};
export default Profile;

Profile.prototype = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string,
  stats: PropTypes.shape({
    followers: PropTypes.number,
    views: PropTypes.number,
    likes: PropTypes.number,
  }),
};