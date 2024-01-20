import FriendListItem from 'components/FriendListItem/FriendListItem.jsx';
import css from "./FriendList.module.css";

export default function FriendList({friends}) {
  return (
      <ul className={css.friend_list}>
          {friends.map(friend => (<FriendListItem key={friend.id} avatar={friend.avatar} name={friend.name} isOnline={friend.isOnline} />))}
    </ul>
  )
};