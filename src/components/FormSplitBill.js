export default function FormSplitBill() {
  return (
    <form className='form-split-bill'>
      <h2>Split a bill with X</h2>

      <div>
        <label htmlFor='bill'>💰 Bill value</label>
        <input type='text' id='bill' />
      </div>
      <div>
        <label htmlFor='myExpense'>🧍‍♂️ Your expense</label>
        <input type='text' id='myExpense' />
      </div>
      <div>
        <label htmlFor='friendsExpense'>👭 X's expense</label>
        <input type='text' id='friendsExpense' disabled />
      </div>
      <div>
        <label htmlFor='who'>💸 Who is paying the bill?</label>
        <select id='who'>
          <option></option>
          <option value='user'>You</option>
          <option value='friend'>Friend</option>
        </select>
      </div>
    </form>
  );
}
