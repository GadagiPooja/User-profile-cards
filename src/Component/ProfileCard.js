// import React from 'react';
// import './ProfileCard.css';

// function ProfileCard({ imageUrl, name, role, skills, isOnline, lastSeen }) {
//   const calculateLastSeen = (lastSeenDate) => {
//     const now = new Date();
//     const lastSeenTime = new Date(lastSeenDate);
//     const diff = Math.abs(now - lastSeenTime);
//     const hours = Math.floor(diff / (1000 * 60 * 60));
//     const days = Math.floor(hours / 24);

//     if (isOnline) {
//       return <span className="online-status">Online</span>;
//     } else if (hours < 24) {
//       return `Last seen ${hours} hour${hours > 1 ? 's' : ''} ago`;
//     } else if (days < 7) {
//       return `Last seen ${days} day${days > 1 ? 's' : ''} ago`;
//     } else {
//       return `Last seen several days ago`;
//     }
//   };

//   return (
//     <div className="profile-card">
//       <div className="profile-header">
//         <img src={imageUrl} alt={`${name}`} className="profile-pic" />
//       </div>
//       <div className="profile-info">
//         <h3>{name}</h3>
//         <p>{role}</p>
//         <h4>Skills:</h4>
//         <ul>
//           {skills.map((skill, index) => (
//             <li key={index}>{skill}</li>
//           ))}
//         </ul>
//         <p className="last-seen">{calculateLastSeen(lastSeen)}</p>
//       </div>
//       <div className="profile-actions">
//         <button className="view-cv-btn">View CV</button>
//         <button className="make-offer-btn">Make Offer</button>
//       </div>
//     </div>
//   );
// }

// export default ProfileCard;



import React from 'react';
import './ProfileCard.css';

const ProfileCard = ({ imageUrl, name, age, location, role, skills, hourlyRate, isOnline, lastSeen }) => {
    // Function to handle the last seen status based on date difference
    const getLastSeenStatus = (lastSeen) => {
        const now = new Date();
        const lastSeenDate = new Date(lastSeen);
        const differenceInHours = Math.abs(now - lastSeenDate) / 36e5; // Convert ms to hours

        if (differenceInHours < 1) {
            return 'Last seen less than an hour ago';
        } else if (differenceInHours < 24) {
            return `Last seen ${Math.floor(differenceInHours)} hour${Math.floor(differenceInHours) > 1 ? 's' : ''} ago`;
        } else if (differenceInHours < 48) {
            return `Last seen ${Math.floor(differenceInHours / 24)} day ago`;
        } else if (differenceInHours <= 7 * 24) {
            return `Last seen ${Math.floor(differenceInHours / 24)} days ago`;
        } else {
            return 'Last seen several days ago';
        }
    };

    return (
        <div className="profile-card">
            <div className="profile-header">
                <img className="profile-pic" src={imageUrl} alt={name} />
            </div>
            <div className="profile-info">
                <h3>{name}, {age}</h3>
                <p>{location}</p>
                <p>{role}</p>
                <p>€{hourlyRate}/hour</p>

                {/* Skills rendering */}
                <p><strong>Skills:</strong> {skills.join(', ')}</p>

                {/* Conditional rendering for online status */}
                <p className={isOnline ? 'online-status' : 'last-seen'}>
                    {isOnline ? 'Online' : getLastSeenStatus(lastSeen)}
                </p>

                <div className="profile-actions">
                    <button className="view-cv-btn">View CV</button>
                    <button className="make-offer-btn">Make Offer</button>
                </div>
            </div>
        </div>
    );
};

export default ProfileCard;
