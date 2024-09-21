import React from 'react';
import './ProfileCard.css';

function ProfileCard({ imageUrl, name, role, skills, isOnline, lastSeen }) {
  const calculateLastSeen = (lastSeenDate) => {
    const now = new Date();
    const lastSeenTime = new Date(lastSeenDate);
    const diff = Math.abs(now - lastSeenTime);
    const hours = Math.floor(diff / (1000 * 60 * 60));
    const days = Math.floor(hours / 24);

    if (isOnline) {
      return <span className="online-status">Online</span>;
    } else if (hours < 24) {
      return `Last seen ${hours} hour${hours > 1 ? 's' : ''} ago`;
    } else if (days < 7) {
      return `Last seen ${days} day${days > 1 ? 's' : ''} ago`;
    } else {
      return `Last seen several days ago`;
    }
  };

  return (
    <div className="profile-card">
      <div className="profile-header">
        <img src={imageUrl} alt={`${name}`} className="profile-pic" />
      </div>
      <div className="profile-info">
        <h3>{name}</h3>
        <p>{role}</p>
        <h4>Skills:</h4>
        <ul>
          {skills.map((skill, index) => (
            <li key={index}>{skill}</li>
          ))}
        </ul>
        <p className="last-seen">{calculateLastSeen(lastSeen)}</p>
      </div>
      <div className="profile-actions">
        <button className="view-cv-btn">View CV</button>
        <button className="make-offer-btn">Make Offer</button>
      </div>
    </div>
  );
}

export default ProfileCard;
