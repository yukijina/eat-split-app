import './index.css';
import FriendsList from './components/FriendsList';
import FormAddFriend from './components/FormAddFriend';
import FormSplitBill from './components/FormSplitBill';
import Button from './components/Button';
import { useState } from 'react';

const initialFriends = [
  {
    id: 118836,
    name: 'Clark',
    image: 'https://i.pravatar.cc/48?u=118836',
    balance: -7,
  },
  {
    id: 933372,
    name: 'Sarah',
    image: 'https://i.pravatar.cc/48?u=933372',
    balance: 20,
  },
  {
    id: 499476,
    name: 'Anthony',
    image: 'https://i.pravatar.cc/48?u=499476',
    balance: 0,
  },
];

function App() {
  const [currentFriend, setCurrentFriend] = useState({});

  return (
    <div className='app'>
      <div className='sidebar'>
        <FriendsList
          friends={initialFriends}
          setCurrentFriend={setCurrentFriend}
        />
        <FormAddFriend />
        <Button>Add Friens</Button>
      </div>
      <FormSplitBill />
    </div>
  );
}

export default App;
