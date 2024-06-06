import React from "react";
import { RxReload } from "react-icons/rx";

const ReloadButton = () => {
  const handleReload = () => {
    window.location.reload();
  };

  return (
<div style={{ padding: '5px', margin: '15px' }}>
   <button
      onClick={handleReload}
      className="flex items-center justify-center  bg-blue-500 text-white rounded-full"
      style={{ width: "32px", height: "32px" }}
      aria-label="Reload Page"
    >
       <RxReload />
 
    </button>
    </div>
    
  );
};

export default ReloadButton;
