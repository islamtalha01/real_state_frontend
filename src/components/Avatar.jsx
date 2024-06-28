import React from 'react';
import sidebarIcon from '../assets/test.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';


const Avatar = ({ name, size,status }) => {
  const avatarStyle = {
    width: size,
    height: size,
    borderRadius: '8px', // Adjust border radius as needed
    objectFit: 'cover',
  };

  const getRandomNumber = () => Math.floor(Math.random() * 100); // Generate random number

  console.log("status ",status)

  return (
    <div className="flex items-center justify-center" style={avatarStyle}>
      {status == 'ai' ? (
        <div className=" text-black flex items-center justify-center " style={avatarStyle}>
        <img src={sidebarIcon} alt="avatar" style={avatarStyle} />
       </div>
      ) : (
        // <div className="bg-white text-black flex items-center justify-center font-bold" style={avatarStyle}>
        //   {name ? name.charAt(0).toUpperCase()  : status == 'ai' ? 'DV' : getRandomNumber()} {/* Render initials or random number */}
        // </div>
        <div className=" bg-[#3B82F6] text-black flex items-center justify-center " style={avatarStyle}>

        <FontAwesomeIcon icon={faUser} className="user-icon" />
        </div>
      )}
    </div>
  );
};

// Default props
Avatar.defaultProps = {
  size: '40px', // Default size of the avatar
};

export default Avatar;


