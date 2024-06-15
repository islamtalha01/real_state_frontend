// import React, { useEffect, useState } from 'react';

// function Test() {
//   const [message, setMessage] = useState('');
//   const [threadId, setThreadId] = useState('');
//   const [audio, setAudio] = useState(null);

//   const sendMessage = async () => {
//     const thread_id = agentID;
//     const response = await fetch("http://127.0.0.1:3000/chat", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({
//         thread_id: thread_id,
//         message: message,
//       })
     
//     });

//     if (!response.ok) {
//       throw new Error("Network response was not ok");
//     }

//     const data = await response.json();
//     const audioUrl = URL.createObjectURL(response.data);
//     setAudio(audioUrl);
    
//   };

//  const startConverstaion = async()=>{

//   const response = await fetch("http://127.0.0.1:3000/start");
//   if (!response.ok) {
//     throw new Error("Network Error");
//   }
//   const data = await response.json();
//   setAgentID(data.thread_id);
//   setThreadId(data);
//   console.log(data)

//  }

//    useEffect(()=>{

//     startConverstaion()
//    },[])


//   return (
//     <div>
//       <input 
//        style={{ color: 'black' }} 
//        type="text" 
//         value={message} 
//         onChange={(e) => setMessage(e.target.value)} 
//       />
//       <button onClick={sendMessage}>Send</button>
//       {audio && <audio controls src={audio} />}
//     </div>
//   );
// }

// export default Test;
