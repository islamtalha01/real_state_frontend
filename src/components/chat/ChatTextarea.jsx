// // // @ts-nocheck


// // import React, { useEffect, useRef, useState } from "react";
// // import Textarea from "react-textarea-autosize";
// // import axios from "axios";

// // import { useDispatch, useSelector } from "react-redux";
// // import {
// //   addMessage,
// //   selectMessages,
// //   selectPrompt,
// //   setPrompt,
// // } from "../../redux/reducers/chatSlice";

// // const ChatTextarea = () => {
// //   const dispatch = useDispatch();
// //   const prompt = useSelector(selectPrompt);
// //   const messages = useSelector(selectMessages);

// //   const textAreaRef = useRef(null);


// //   const [textAreaContent, setTextAreaContent] = useState('');



// //   const [isLoading, setIsLoading] = useState(false);

// //   const [fileInput, setFileInput] = useState(null);
// //   const [isFileSelected, setIsFileSelected] = useState(false);

// //   useEffect(() => {
// //     if (textAreaRef.current === null) return;
// //     textAreaRef.current.focus();
// //   }, []);



// //   const handleTextAreaChange = (e) => {
// //     // Update text area content
// //     setTextAreaContent(e.target.value);
// //   };

// //   const handleSendResponse = () => {
// //     // Implement logic to send response
// //     // This function will be called when the arrow button is clicked
// //   };

// //   function handleKeyDown(e) {
// //     if (e.key === "Enter" && !e.shiftKey) {
// //       e.preventDefault();
// //       if (isLoading) return;
// //       if (prompt.trim() === "") return;
// //       setIsLoading(true);
// //       dispatch(
// //         addMessage({
// //           role: "user",
// //           content: prompt,
// //         })
// //       );

// //       axios
// //         .post("/api/chat", {
// //           prompt,
// //           messages,
// //         })
// //         .then((response) => response.data)
// //         .then((data) => {
// //           setIsLoading(false);
// //           data.data.map((message) => dispatch(addMessage(message)));
// //         });

// //       dispatch(setPrompt(""));
// //     }
// //   }

// //   return (
// //     <div className="mt-1 relative rounded-md shadow-sm">
// //       <div className="relative">
// //         <Textarea
// //           ref={textAreaRef}
// //           rows={1}
// //           name="comment"
// //           id="comment"
// //           className="px-6 py-3 bg-accents-1 focus:outline-none block w-full text-white rounded-md resize-none pr-[3.5rem]"
// //           placeholder="Type your message here..."
// //           defaultValue={""}
// //           value={prompt}
// //           onKeyDown={handleKeyDown}
// //           onInput={(e) => {dispatch(setPrompt(e.currentTarget.value))

// //             setTextAreaContent(e.currentTarget.value)
// //           }}
// //         />

// //         <div className="absolute inset-y-0 left-0 flex items-center pl-2">
// //           {/* Attachment button */}
// //           {/* <button className="text-white p-2 rounded-full">
// //             <svg
// //               xmlns="http://www.w3.org/2000/svg"
// //               width="1em"
// //               height="1em"
// //               fill="currentColor"
// //               viewBox="0 0 256 256"
// //               className="h-4 w-4 dark:text-white"
// //             >
// //               <path d="M209.66,122.34a8,8,0,0,1,0,11.32l-82.05,82a56,56,0,0,1-79.2-79.21L147.67,35.73a40,40,0,1,1,56.61,56.55L105,193A24,24,0,1,1,71,159L154.3,74.38A8,8,0,1,1,165.7,85.6L82.39,170.31a8,8,0,1,0,11.27,11.36L192.93,81A24,24,0,1,0,159,47L59.76,147.68a40,40,0,1,0,56.53,56.62l82.06-82A8,8,0,0,1,209.66,122.34Z"></path>
// //             </svg>
// //           </button> */}
// //         </div>

// //         {/* Arrow */}
// //         <div className="absolute inset-y-0 right-0 flex items-center pr-2">
// //          { !isLoading && <div   className={`text-white p-2 rounded-full ${textAreaContent.length > 0 ? 'bg-blue-500' : (isFileSelected ? 'bg-blue-500' : 'bg-gray-500')}`}>
// //             <svg
// //               xmlns="http://www.w3.org/2000/svg"
// //               width="1em"
// //               height="1em"
// //               fill="currentColor"
// //               viewBox="0 0 256 256"
// //               className="h-4 w-4 dark:text-white"
// //             >
// //               <path d="M221.66,133.66l-72,72a8,8,0,0,1-11.32-11.32L196.69,136H40a8,8,0,0,1,0-16H196.69L138.34,61.66a8,8,0,0,1,11.32-11.32l72,72A8,8,0,0,1,221.66,133.66Z"></path>
// //             </svg>
// //           </div> }
// //         </div>

// //         <input
// //           type="file"
// //           id="fileInput"
// //           style={{ display: "none" }}
// //           onChange={() => setIsFileSelected(true)}
// //         />
// //       </div>
// //       {isLoading && (
// //         <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
            
// //          <div   className={"text-white p-2 rounded-full bg-blue-500" }>   
// //        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" viewBox="0 0 24 24" className="icon-lg"><rect width="10" height="10" x="7" y="7" fill="currentColor" rx="1.25"></rect></svg>
// //         </div>
// //         </div>
// //       )}
// //     </div>
// //   );
// // };

// // export default ChatTextarea;












// // import React, { useEffect, useRef, useState } from "react";
// // import Textarea from "react-textarea-autosize";
// // import axios from "axios";

// // import { useDispatch, useSelector } from "react-redux";
// // import {
// //   addMessage,
// //   selectMessages,
// //   selectPrompt,
// //   setPrompt,
// //   fetchAgentID,
// //   sendMessage,
// //   selectAgentID,
// //   selectLoading
// // } from "../../redux/reducers/chatSlice";

// // const ChatTextarea = () => {
// //   const dispatch = useDispatch();
// //   const prompt = useSelector(selectPrompt);
// //   const messages = useSelector(selectMessages);
// //   const agentID = useSelector(selectAgentID);
// //   const loading = useSelector(selectLoading);

// //   const textAreaRef = useRef(null);
// //   const [textAreaContent, setTextAreaContent] = useState('');
// //   const [isFileSelected, setIsFileSelected] = useState(false);
// //   const [isEnterPressed, setIsEnterPressed] = useState(false); // Flag state for Enter key

// //   useEffect(() => {
// //     if (textAreaRef.current === null) return;
// //     textAreaRef.current.focus();
// //   }, []);

// //   useEffect(() => {
// //     dispatch(fetchAgentID());
// //     console.log("bummed")
// //   }, [isEnterPressed]);

// //   const handleTextAreaChange = (e) => {
// //     setTextAreaContent(e.target.value);
// //   };

// //   const handleKeyDown = async (e) => {
// //     if (e.key === "Enter" && !e.shiftKey) {
// //       e.preventDefault();
// //       setIsEnterPressed(true); // Update flag state

// //       if (loading) return;
// //       if (prompt.trim() === "") return;
// //       console.log("mid wst sending bot req")
// //       dispatch(addMessage({ role: "user", content: prompt }));
// //       console.log(agentID)
// //       if (agentID) {
// //         dispatch(sendMessage({ agentID, message: prompt }));
// //       }

// //       dispatch(setPrompt(""));
// //     }
// //   };

// //   return (
// //     <div className="mt-1 relative rounded-md shadow-sm">
// //       <div className="relative">
// //         <Textarea
// //           ref={textAreaRef}
// //           rows={1}
// //           name="comment"
// //           id="comment"
// //           className="px-6 py-3 bg-accents-1 focus:outline-none block w-full text-white rounded-md resize-none pr-[3.5rem]"
// //           placeholder="Type your message here..."
// //           value={prompt}
// //           onKeyDown={handleKeyDown}
// //           onInput={(e) => {
// //             dispatch(setPrompt(e.currentTarget.value));
// //             setTextAreaContent(e.currentTarget.value);
// //           }}
// //         />

// //         <div className="absolute inset-y-0 left-0 flex items-center pl-2"></div>

// //         <div className="absolute inset-y-0 right-0 flex items-center pr-2">
// //           {!loading && (
// //             <div className={`text-white p-2 rounded-full ${textAreaContent.length > 0 ? 'bg-blue-500' : (isFileSelected ? 'bg-blue-500' : 'bg-gray-500')}`}>
// //               <svg
// //                 xmlns="http://www.w3.org/2000/svg"
// //                 width="1em"
// //                 height="1em"
// //                 fill="currentColor"
// //                 viewBox="0 0 256 256"
// //                 className="h-4 w-4 dark:text-white"
// //               >
// //                 <path d="M221.66,133.66l-72,72a8,8,0,0,1-11.32-11.32L196.69,136H40a8,8,0,0,1,0-16H196.69L138.34,61.66a8,8,0,0,1,11.32-11.32l72,72A8,8,0,0,1,221.66,133.66Z"></path>
// //               </svg>
// //             </div>
// //           )}
// //         </div>

// //         <input
// //           type="file"
// //           id="fileInput"
// //           style={{ display: "none" }}
// //           onChange={() => setIsFileSelected(true)}
// //         />
// //       </div>
// //       {loading && (
// //         <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
// //           <div className="text-white p-2 rounded-full bg-blue-500">
// //             <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" viewBox="0 0 24 24" className="icon-lg">
// //               <rect width="10" height="10" x="7" y="7" fill="currentColor" rx="1.25"></rect>
// //             </svg>
// //           </div>
// //         </div>
// //       )}
// //     </div>
// //   );
// // };

// // export default ChatTextarea;




import React, { useEffect, useRef, useState } from "react";
import Textarea from "react-textarea-autosize";
import axios from "axios";
import { useMessages } from "../../MessageContext";

const ChatTextarea = () => {
  const textAreaRef = useRef(null);
  const [prompt, setPrompt] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isFileSelected, setIsFileSelected] = useState(false);
  const [agentID, setAgentID] = useState(null);
  const { messages, setMessages } = useMessages();

  useEffect(() => {
    fetchAgentID();
  }, []);

  const fetchAgentID = async () => {
    try {
        const response = await fetch('http://127.0.0.1:8080/start');
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setAgentID(data.thread_id);
        console.log("agent id is",data.thread_id)
        // addSystemMessage("Hello! How can I assist you today?");
    } catch (error) {
        console.error("Error fetching agent ID:", error.message);
    }
};


 
const handleKeyDown = async (e) => {
  if (e.key === "Enter" && !e.shiftKey) {
    e.preventDefault();
    if (isLoading) return;
    if (prompt.trim() === "") return;

    setIsLoading(true);

    try {
      const thread_id = agentID;
      const response = await Promise.race([
        fetch('http://127.0.0.1:8080/chat', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            "thread_id": thread_id,
            "message": prompt
          }),
        }),
        new Promise((_, reject) =>
          setTimeout(() => reject(new Error('Request timeout')), 15) // Timeout after 10 seconds
        )
      ]);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      console.log("returned respones", data)
      setMessages((prevMessages) => [
        ...prevMessages,
        { role: "user", content: prompt },
        { role: "system", content: data.response },
      ]);
    } catch (error) {
      console.error("Error sending message:", error.message);
    }

    setIsLoading(false);
    setPrompt("");
  }
};


  // const addMessage = (message) => {
  //   // Implement logic to add message to UI
  // };

  return (
    <div className="mt-1 relative rounded-md shadow-sm">
      <div className="relative">
        <Textarea
          ref={textAreaRef}
          rows={1}
          name="comment"
          id="comment"
          className="px-6 py-3 bg-accents-1 focus:outline-none block w-full text-white rounded-md resize-none pr-[3.5rem]"
          placeholder="Type your message here..."
          value={prompt}
          onKeyDown={handleKeyDown}
          onChange={(e) => setPrompt(e.target.value)}
        />

        <div className="absolute inset-y-0 left-0 flex items-center pl-2"></div>

        <div className="absolute inset-y-0 right-0 flex items-center pr-2">
          {!isLoading && (
            <div className={`text-white p-2 rounded-full ${prompt.length > 0 ? 'bg-blue-500' : (isFileSelected ? 'bg-blue-500' : 'bg-gray-500')}`}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1em"
                height="1em"
                fill="currentColor"
                viewBox="0 0 256 256"
                className="h-4 w-4 dark:text-white"
              >
                <path d="M221.66,133.66l-72,72a8,8,0,0,1-11.32-11.32L196.69,136H40a8,8,0,0,1,0-16H196.69L138.34,61.66a8,8,0,0,1,11.32-11.32l72,72A8,8,0,0,1,221.66,133.66Z"></path>
              </svg>
            </div>
          )}
        </div>

        <input
          type="file"
          id="fileInput"
          style={{ display: "none" }}
          onChange={() => setIsFileSelected(true)}
        />
      </div>
      {isLoading && (
        <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
          <div className="text-white p-2 rounded-full bg-blue-500">
            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" viewBox="0 0 24 24" className="icon-lg">
              <rect width="10" height="10" x="7" y="7" fill="currentColor" rx="1.25"></rect>
            </svg>
          </div>
        </div>
      )}
    </div>
  );
};

export default ChatTextarea;



// // ChatTextarea.js
// import React, { useState } from "react";

// const ChatTextarea = () => {
//   const [prompt, setPrompt] = useState("");

//   const handleKeyDown = (e) => {
//     if (e.key === "Enter" && !e.shiftKey) {
//       e.preventDefault();
//       // Simulate sending prompt to server and receiving a system response
//       console.log("Sending prompt:", prompt);
//       setPrompt("");
//     }
//   };

//   return (
//     <div className="mt-1 relative rounded-md shadow-sm">
//       <div className="relative">
//         <textarea
//           rows={1}
//           className="px-6 py-3 bg-accents-1 focus:outline-none block w-full text-white rounded-md resize-none pr-[3.5rem]"
//           placeholder="Type your message here..."
//           value={prompt}
//           onKeyDown={handleKeyDown}
//           onChange={(e) => setPrompt(e.target.value)}
//         />
//       </div>
//     </div>
//   );
// };

// export default ChatTextarea;
