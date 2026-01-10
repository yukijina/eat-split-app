import { useState } from 'react';
import Button from './Button';

export default function FormSplitBill({ selectedFriend }) {
  const [bill, setBill] = useState('');
  const [userExpense, setUserExpense] = useState('');
  const [payer, setPayer] = useState('user');
  const friendExpense = bill && userExpense ? bill - userExpense : '';

  function handleSplitBill() {}

  return (
    <form className='form-split-bill'>
      <h2>Split a bill with {selectedFriend.name}</h2>

      <div>
        <label htmlFor='bill'>💰 Bill value</label>
        <input
          type='text'
          id='bill'
          value={bill}
          onChange={(e) => setBill(Number(e.target.value))}
        />
      </div>
      <div>
        <label htmlFor='userExpense'>🧍‍♂️ Your expense</label>
        <input
          type='text'
          id='userExpense'
          value={userExpense}
          onChange={(e) =>
            setUserExpense(
              Number(e.target.value) > bill
                ? userExpense
                : Number(e.target.value)
            )
          }
        />
      </div>
      <div>
        <label htmlFor='friendsExpense'>
          👭 {selectedFriend.name}'s expense
        </label>
        <input type='text' id='friendsExpense' disabled value={friendExpense} />
      </div>

      <div>
        <label htmlFor='who'>💸 Who is paying the bill?</label>
        <select id='who' onChange={(e) => setPayer(e.target.value)}>
          <option value='user'>You</option>
          <option value='friend'>{selectedFriend.name}</option>
        </select>
      </div>
      <Button>Split bill</Button>
    </form>
  );
}
