import React from 'react';
import Button from './Button';
import { useState } from 'react';

export default function FormAddFriend({ onAddFriend }) {
  const [name, setName] = useState('');
  const [image, setImage] = useState('https://i.pravatar.cc/48');

  function handleSubmit(e) {
    e.preventDefault();

    if (!name || !image) return;

    // Create a random Id
    const id = crypto.randomUUID();

    const newFriend = {
      id,
      name,
      image: `${image}?=${id}`,
      balance: 0,
    };

    // Clear the imputs
    setName('');
    setImage('https://i.pravatar.cc/48');

    // Function
    onAddFriend(newFriend);
  }

  return (
    <form className='form-add-friend' onSubmit={handleSubmit}>
      <label>👭 Friend name</label>
      <input
        type='text'
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <label>🌄 image URL</label>
      <input
        type='url'
        value={image}
        onChange={(e) => setImage(e.target.value)}
      />
      <Button>Add</Button>
    </form>
  );
}
