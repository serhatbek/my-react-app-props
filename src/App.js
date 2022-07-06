import './App.css';
import Header from './components/Header';
import User from './components/User';
import User2 from './components/User2';

import React from 'react';

const friends = ['Aslı', 'Kürşat', 'Zeynep', 'Dila', 'Selin'];
const friends2 = [
  { name: 'Toprak', id: 1 },
  { name: 'Emel', id: 2 },
  { name: 'Bülent', id: 3 },
  { name: 'Kaan', id: 4 },
  { name: 'Serpil', id: 5 },
];

const App = () => {
  return (
    <div>
      <Header />
      <User
        name='Toprak'
        surname='Dost'
        occ='painter'
        about='He draws art'
        isArtist={true}
      />

      <User2
        name='Serhat'
        age={36}
        // musicLover={true}
        musicGenre='Gothic & Darkwave'
        movieGenre='Sci-Fi'
        friends={friends2}
        location={{
          city: 'Kadıköy/Istanbul',
          zip: 343434,
        }}
      />
      {/* 
      <User2
        name='Kürşat'
        age={30}
        musicLover={false}
        musicGenre='Pop'
        movieGenre='All'
        friends={['Zeynep', 'Serhat', 'Toprak', 'Dila', 'Selin']}
      /> */}
    </div>
  );
};

export default App;
