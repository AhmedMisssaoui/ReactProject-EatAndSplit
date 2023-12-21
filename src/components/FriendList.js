import Friend from "./Friend";

export default function FriendList({
  friends,
  showSplitBill,
  setShowSplitBill,
}) {
  return (
    <ul>
      {friends.map((friend) => (
        <Friend
          showSplitBill={showSplitBill}
          setShowSplitBill={setShowSplitBill}
          friend={friend}
          key={friend.id}
        />
      ))}
    </ul>
  );
}
