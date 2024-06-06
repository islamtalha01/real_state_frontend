import React from 'react';

const Avatar = ({ image, name, size,status }) => {
  const avatarStyle = {
    width: size,
    height: size,
    borderRadius: '8px', // Adjust border radius as needed
    objectFit: 'cover',
  };

  const getRandomNumber = () => Math.floor(Math.random() * 100); // Generate random number

  return (
    <div className="flex items-center justify-center" style={avatarStyle}>
      {image ? (
        <img src={image} alt="avatar" style={avatarStyle} />
      ) : (
        <div className="bg-white text-black flex items-center justify-center font-bold" style={avatarStyle}>
          {name ? name.charAt(0).toUpperCase()  : status == 'ai' ? 'DV' : getRandomNumber()} {/* Render initials or random number */}
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

