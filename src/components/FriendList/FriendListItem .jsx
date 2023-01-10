import PropTypes from 'prop-types';
import { Item, Online, Offline, Avatar, FriendsName } from './FriendList.styled'

export const FriendListItem = ({name, avatar, isOnline}) => {

  return (
    <Item>
      {isOnline ? <Online/> : <Offline/>}
      <Avatar src={avatar} alt="User avatar" width="50" />
      <FriendsName>{name}</FriendsName>
    </Item>
  )
}

FriendListItem.propTypes = {
  isOnline: PropTypes.bool.isRequired,
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired
}
 