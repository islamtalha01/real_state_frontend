import React from 'react';
// import './Loader.css'; // Ensure this CSS file contains the above CSS

function Loader() {
  return (
    <div class="flex flex-row gap-2">
    <div class="w-2 h-2 rounded-full bg-[#3B82F6] animate-bounce"></div>
    <div class="w-2 h-2 rounded-full bg-[#3B82F6] animate-bounce [animation-delay:-.3s]"></div>
    <div class="w-2 h-2 rounded-full bg-[#3B82F6] animate-bounce [animation-delay:-.5s]"></div>
    </div>
  );
}

export default Loader;
