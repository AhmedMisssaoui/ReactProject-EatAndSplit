import { useState } from "react";
import Button from "./Button";

export default function FormSplitBill({ showSplitBill, onSplitBell }) {
  const [bill, setBill] = useState("");
  const [expence, setExpence] = useState("");
  const [paying, setPaying] = useState("user");
  const friendExpence = bill ? bill - expence : "";

  function handleSubmit(e) {
    e.preventDefault();

    if (!bill || !expence) return;

    onSplitBell(showSplitBill.id, paying === "user" ? friendExpence : -expence);
  }

  return (
    <form className="form-split-bill" onSubmit={handleSubmit}>
      <h2>SPLIT A BILL WITH {showSplitBill.name}</h2>
      <label>💰 Bill value</label>
      <input
        type="number"
        value={bill}
        onChange={(e) => setBill(Number(e.target.value))}
      />
      <label>🧍‍♂️ Your expence</label>
      <input
        type="number"
        value={expence}
        onChange={(e) =>
          setExpence(
            Number(e.target.value) > bill ? expence : Number(e.target.value)
          )
        }
      />
      <label>👨🏻‍🤝‍👨🏻 {showSplitBill.name}'s expense:</label>
      <input type="number" disabled value={friendExpence} />
      <label>🤑 Who is paying the bill?</label>
      <select value={paying} onChange={(e) => setPaying(e.target.value)}>
        <option value="user">You</option>
        <option value="friend">{showSplitBill.name}</option>
      </select>
      <Button>Split Bill</Button>
    </form>
  );
}
