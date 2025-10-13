import FriendList from "./components/FriendList";
import FormAddFriend from "./components/FormAddFriend";
import Button from "./components/Button";
import FormSplitBill from "./components/FormSplitBill";
import { useState } from "react";

const initialFriends = [
  {
    id: 118836,
    name: "Clark",
    image: "https://i.pravatar.cc/48?u=118836",
    balance: -7,
  },
  {
    id: 933372,
    name: "Sarah",
    image: "https://i.pravatar.cc/48?u=933372",
    balance: 20,
  },
  {
    id: 499476,
    name: "Anthony",
    image: "https://i.pravatar.cc/48?u=499476",
    balance: 0,
  },
];

export default function App() {
  const [addForm, setAddForm] = useState(false);
  const [friends, setFriends] = useState(initialFriends);
  const [selectedFriend, setSelectedFriend] = useState(null);

  function toggleShowForm() {
    setAddForm(prev => !prev);
    setSelectedFriend(null);
  }

  function handleAddFriend(friend) {
    setFriends(friends => [...friends, friend]);
    setAddForm(false);
  }

  function handleShowSplitForm(friend) {
    setSelectedFriend((curr) => curr?.id === friend.id ? null : friend);
    setAddForm(false);
  }

  return (
    <div className="app">
      <div className="sidebar">
        <FriendList friends={friends} onClickButton={handleShowSplitForm} selectedFriend={selectedFriend}/>
        {addForm && <FormAddFriend onSubmit={handleAddFriend}/>}
        <Button onClick={toggleShowForm}>{addForm ? 'Close' : 'Add friend'}</Button>
      </div>
      {selectedFriend && <FormSplitBill selectedFriend={selectedFriend}/>}
    </div>
  )
}