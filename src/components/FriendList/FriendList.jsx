import PropTypes from 'prop-types';
import {Friends,Item,Online, Offline, Avatar,FriendsName } from './FriendList.styled'


export const FriendList = ({ friends }) => {
  return (
    <Friends>
      {friends.map((friend) => {
        return (
          <Item key={friend.id}>
            {friend.isOnline && (
              <Online>{friend.isOnline}</Online>
            )}
            {!friend.isOnline && (
              <Offline>{friend.isOnline}</Offline>
            )}
           
            <Avatar src={friend.avatar} alt="User avatar" width="50" />
            <FriendsName>{friend.name}</FriendsName>
          </Item>
        )
      })} 

    </Friends>
  )
}

FriendList.propTypes = {
 friends: PropTypes.arrayOf(
    PropTypes.shape({
      isOnline: PropTypes.bool.isRequired,
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired
    })
  ).isRequired,
}
