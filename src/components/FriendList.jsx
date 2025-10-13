import Friend from "./Friend"

export default function FriendList({friends, onClickButton, selectedFriend}) {
  return (
    <ul>
      {friends.map(friend => (
        <Friend friend={friend} key={friend.id} onClickButton={onClickButton} selectedFriend={selectedFriend}/>
      ))}
    </ul>
  )
}