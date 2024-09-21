import React from 'react';
import ProfileCard from './Component/ProfileCard';
import profiles from './profile.json'; // Import the profiles JSON file

import './App.css';

function App() {
  // const now = new Date();
  // const threeHoursAgo = new Date(now.getTime() - 3 * 60 * 60 * 1000); // 3 hours ago
  // // const twoDaysAgo = new Date(now.getTime() - 2 * 24 * 60 * 60 * 1000); // 2 days ago
  // const eightDaysAgo = new Date(now.getTime() - 8 * 24 * 60 * 60 * 1000); // 8 days ago

  return (
    // <div className="cards-container">
    //   <ProfileCard 
    //     imageUrl="https://img.freepik.com/free-photo/portrait-man-laughing_23-2148859448.jpg?size=338&ext=jpg&ga=GA1.1.2008272138.1726790400&semt=ais_hybrid" 
    //     name="John Doe" 
    //     role="Software Engineer" 
    //     skills={['JavaScript', 'React', 'Node.js']} 
    //     isOnline={true} 
    //     lastSeen={threeHoursAgo} 
    //   />
    //   <ProfileCard 
    //     imageUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShQGpmSye-ONz-pfofohgt_pJnwLVJ5KB8wQ&s" 
    //     name="Jane Smith" 
    //     role="UI/UX Designer" 
    //     skills={['Figma', 'Sketch', 'Adobe XD']} 
    //     isOnline={false} 
    //     lastSeen={eightDaysAgo} 
    //   />
    // </div>  
    <div className="cards-container">
      {profiles.map(profile => (
        <ProfileCard
          key={profile.id}
          name={profile.name}
          age={profile.age}
          location={profile.location}
          role={profile.role}
          skills={profile.skills}
          hourlyRate={profile.hourlyRate}
          isOnline={profile.isOnline}
          lastSeen={profile.lastSeen}
          imageUrl={profile.imageUrl}
        />
      ))}
    </div>
  );
}

export default App;
