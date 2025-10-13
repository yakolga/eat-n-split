import Button from "./Button";
import { useState } from "react";

export default function FormSplitBill({selectedFriend, onSubmit}) {
    const [bill, setBill] = useState('');
    const [expense, setExpense] = useState('');
    const [personPay, setPersonPay] = useState('user');

    const friendExpense = bill - expense;

    function handleFormSplittBill(e) {
        e.preventDefault();
        if (!bill || !expense || !personPay) return

        let youPay;
        let friendPay;

        if (personPay === 'user') {
            youPay = friendExpense;
        } else {
            friendPay = expense;
        }

        onSubmit(+youPay, +friendPay);
        setBill('');
        setExpense('');
        setPersonPay('user');
    }

    return (
        <form className="form-split-bill" onSubmit={(e) => handleFormSplittBill(e)}>
            <h2>Split a bill with {selectedFriend.name}</h2>

            <label>💰 Bill value</label>
            <input type="text" value={bill} onChange={(e) => setBill(e.target.value)}/>

            <label>🧍 Your expense</label>
            <input type="text" value={expense} onChange={(e) => setExpense(e.target.value)}/>

            <label>👫 {selectedFriend.name}'s expense</label>
            <input type="text" disabled value={friendExpense}/>

            <label>🤑 Who is paying the bill</label>
            <select value={personPay} onChange={(e) => setPersonPay(e.target.value)}>
                <option value="user">You</option>
                <option value="friend">{selectedFriend.name}</option>
            </select>

            <Button>Split bill</Button>
        </form>
    )
}