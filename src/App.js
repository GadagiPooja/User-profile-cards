// src/App.js
import React from 'react';
import ProfileCard from './Component/ProfileCard';

function App() {
  const profiles = [
    {
      name: 'Jeffrey Abrams',
      age: 51,
      location: 'New York, United States',
      role: 'Film Director, Producer',
      rate: '€14',
      description: 'Abrams was born in New York City and raised in Los Angeles.',
      status: 'https://img.freepik.com/free-photo/portrait-man-laughing_23-2148859448.jpg?size=338&ext=jpg&ga=GA1.1.2008272138.1726790400&semt=ais_hybrid',
      online: true,
    },
    {
      name: 'Pooja Gadagi',
      age: 21,
      location: 'Reykjavik, Iceland',
      role: 'Actor, Film Director',
      rate: '€9',
      description: 'Icelandic actor, theater and film director, and film producer.',
      status: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShQGpmSye-ONz-pfofohgt_pJnwLVJ5KB8wQ&s',
      lastSeen: '17 minutes ago',
      online: false,
    }
  ];

  return (
    <div className="app">
      <div className="profiles-container">
        {profiles.map((profile, index) => (
          <ProfileCard key={index} {...profile} />
        ))}
      </div>
    </div>
  );
}

export default App;
