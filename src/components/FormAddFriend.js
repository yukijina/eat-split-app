import React from 'react';
import Button from './Button';

export default function FormAddFriend() {
  return (
    <form className='form-add-friend'>
      <label>👭 Friend name</label>
      <input type='text' />

      <label>🌄 image URL</label>
      <input type='url' />
      <Button>Add</Button>
    </form>
  );
}
