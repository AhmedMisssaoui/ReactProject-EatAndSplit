import { useState } from "react";
import Button from "./Button";
import FriendList from "./FriendList";
import FriendForm from "./FriendForm";
import FormSplitBill from "./FormSplitBill";

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
  const [showAddFriend, setShowAddFriend] = useState(false);
  const [showSplitBill, setShowSplitBill] = useState(null);
  const [friends, setFriends] = useState(initialFriends);

  function handleFriendForm() {
    setShowAddFriend((isOpen) => !isOpen);
  }
  function handleAddFriend(friend) {
    setFriends((friends) => [...friends, friend]);
    setShowAddFriend(false);
  }
  function handleSplitBell(id, balance) {
    setFriends(
      friends.map((friend) =>
        friend.id === id
          ? { ...friend, balance: friend.balance + balance }
          : friend
      )
    );
    setShowSplitBill(null);
  }
  return (
    <div className="app">
      <div className="sidebar">
        <FriendList
          friends={friends}
          showSplitBill={showSplitBill}
          setShowSplitBill={setShowSplitBill}
        />

        {showAddFriend && <FriendForm onAddFriend={handleAddFriend} />}

        <Button onShow={handleFriendForm}>
          {showAddFriend ? "Close" : "Add Friend"}
        </Button>
      </div>
      {showSplitBill !== null && (
        <FormSplitBill
          showSplitBill={showSplitBill}
          onSplitBell={handleSplitBell}
        />
      )}
    </div>
  );
}
