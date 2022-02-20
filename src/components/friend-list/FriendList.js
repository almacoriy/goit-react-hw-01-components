import PropTypes from 'prop-types';
import FriendListItem from 'components/friend-list/FriendListItem ';

export default function FriendList({ friends }) {
  return (
    <ul className="friend-list">
      {friends.map(friend => {
        return (
          <FriendListItem
            key={friend.id}
            className="item"
            avatar={friend.avatar}
            name={friend.name}
            isOnline={friend.isOnline}
          />
        );
      })}
    </ul>
  );
}

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({ id: PropTypes.number.isRequired })
  ).isRequired,
};
