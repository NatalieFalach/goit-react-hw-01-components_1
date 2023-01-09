import PropTypes from 'prop-types';
import {ProfileWrapper, Description, Avatar, ProfileName, Tag, Location, StatsWrapper, StatsItem, Label, Quantity} from './Profile.styled'

export const Profile = ({ username, tag, location, avatar, stats }) => {
  
  return (
    <ProfileWrapper>
      <Description>
        <Avatar
          src={avatar}
          alt="User avatar"
          className="avatar"
        />
        <ProfileName>{username}</ProfileName>
        <Tag>{tag}</Tag>
        <Location>{location}</Location>
      </Description>

    <StatsWrapper>
      <StatsItem>
        <Label>Followers</Label>
        <Quantity>{stats.followers}</Quantity>
      </StatsItem>
      <StatsItem>
        <Label>Views</Label>
        <Quantity>{stats.views}</Quantity>
      </StatsItem>
      <StatsItem>
        <Label>Likes</Label>
        <Quantity>{stats.likes}</Quantity>
      </StatsItem>
    </StatsWrapper>
  </ProfileWrapper>
  )
}

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }).isRequired,
}
