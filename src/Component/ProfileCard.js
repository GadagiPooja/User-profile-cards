// src/components/ProfileCard.js
import React from 'react';
import './ProfileCard.css'; 

const ProfileCard = ({ name, age, location, role, rate, status, description, lastSeen, online }) => {
  return (
    <div className="profile-card">
      <div className="profile-header">
        <img
          src={status}
          alt={name}
          className="profile-pic"
        />
        <h2>{role}</h2>
        <p>{rate}/hour</p>
      </div>

      <div className="profile-info">
        <h3>{name}, {age}</h3>
        <p>{location}</p>
        <p>{description}</p>
      </div>

      <div className="profile-actions">
        <button className="view-cv-btn">VIEW CV</button>
        <button className="make-offer-btn">MAKE OFFER</button>
      </div>

      <div className="profile-footer">
        {online ? <span className="online-status">Online</span> : <span className="last-seen">Last seen: {lastSeen}</span>}
      </div>
    </div>
  );
};

export default ProfileCard;
