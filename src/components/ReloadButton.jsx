import React from "react";
import { RxReload } from "react-icons/rx";

const ReloadButton = ({styleProp}) => {
  const handleReload = () => {
    window.location.reload();
  };

  return (
<div style={{ padding: '15px', margin: '0px' }}>
   <button
      onClick={handleReload}
      className="flex items-center justify-center  bg-blue-500 text-white rounded-full p-7"
      
      aria-label="Reload Page"
    >
       <RxReload style= {styleProp ? styleProp : { width: "32px", height: "32px" }}/>
 
    </button>
    </div>
    
  );
};

export default ReloadButton;
