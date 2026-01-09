export default function FormSplitBill({ selectedFriend }) {
  return (
    <form className='form-split-bill'>
      <h2>Split a bill with {selectedFriend.name}</h2>

      <div>
        <label htmlFor='bill'>💰 Bill value</label>
        <input type='text' id='bill' />
      </div>
      <div>
        <label htmlFor='myExpense'>🧍‍♂️ Your expense</label>
        <input type='text' id='myExpense' />
      </div>
      <div>
        <label htmlFor='friendsExpense'>
          👭 {selectedFriend.name}'s expense
        </label>
        <input type='text' id='friendsExpense' disabled />
      </div>
      <div>
        <label htmlFor='who'>💸 Who is paying the bill?</label>
        <select id='who'>
          <option></option>
          <option value='user'>You</option>
          <option value='friend'>{selectedFriend.name}</option>
        </select>
      </div>
    </form>
  );
}
