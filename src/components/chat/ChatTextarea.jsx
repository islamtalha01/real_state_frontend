// // // // @ts-nocheck

// import React, { useEffect, useRef, useState } from "react";
// import Textarea from "react-textarea-autosize";
// import { useMessages } from "../../MessageContext";
// import Loader from "../loader/DevinLoader";

// const ChatTextarea = () => {
//   const textAreaRef = useRef(null);

//   const [prompt, setPrompt] = useState("");
//   const [agentID, setAgentID] = useState(null);
//   const { messages, setMessages, setLoading, loading } = useMessages();

//   const fetchAgentID = async () => {
//     try {
//       const response = await fetch("https://15.157.174.222/start");
//       if (!response.ok) {
//         throw new Error("Network response was not ok");
//       }
//       const data = await response.json();
//       setAgentID(data.thread_id);
//       console.log("agent id is", data.thread_id);
//     } catch (error) {
//       console.error("Error fetching agent ID:", error.message);
//     }
//   };

//   const fetchResponseFromAssistant = async () => {
//     if (prompt.trim() === "") return;

//     const userMessage = { content: prompt.trim(), role: "user" };
//     setMessages((messages) => [...messages, userMessage]);

//     // Add a dummy loading message
//     const loadingMessage = {
//       content: <Loader />,
//       role: "system",
//       isLoading: true,
//     };
//     setMessages((messages) => [...messages, loadingMessage]);

//     setLoading(true);

//     try {
//       const thread_id = agentID;
//       const response = await fetch("https://15.157.174.222/chat", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({
//           thread_id: thread_id,
//           message: prompt,
//         }),
//       });

//       if (!response.ok) {
//         throw new Error("Network response was not ok");
//       }

//       const data = await response.json();

//       // Replace the loading message with the actual response
//       setMessages((messages) =>
//         messages.map((msg) =>
//           msg.isLoading ? { content: data.response, role: "system" } : msg
//         )
//       );

//       setLoading(false);
//     } catch (error) {
//       console.error("Error sending message:", error.message);
//     }
//   };

//   useEffect(() => {
//     fetchAgentID();
//   }, []);

//   const handleKeyDown = async (e) => {
//     if ((e.key === "Enter" && !e.shiftKey) || e.type === "click") {
//       e.preventDefault();
//       if (loading) return;
//       fetchResponseFromAssistant();

//       setPrompt("");
//     }
//   };
//   const handleStopClick = () => {
//     // Cancel the ongoing request
//     setLoading(false);
//     // Remove the dummy loading message
//     setMessages((messages) =>
//       messages.filter((msg) => !msg.isLoading)
//     );
//   };
//   return (
//     <div className="mt-1 relative rounded-md shadow-sm">
//       <div className="relative">
//         <Textarea
//           ref={textAreaRef}
//           rows={1}
//           name="comment"
//           id="comment"
//           className="px-6 py-3 bg-accents-1 focus:outline-none block w-full text-white rounded-md resize-none pr-[3.5rem]"
//           placeholder="Type your message here..."
//           value={prompt}
//           style={{ caretColor: "#3B82F6" }}
//           onKeyDown={handleKeyDown}
//           onChange={(e) => setPrompt(e.target.value)}
//         />

//         <div className="absolute inset-y-0 left-0 flex items-center pl-2"></div>

//         <div className="absolute inset-y-0 right-0 flex items-center pr-2">
//           {!loading && (
//             <div
//               className={`text-white p-2 rounded-full ${
//                 prompt.length > 0 ? "bg-blue-500" : "bg-gray-500"
//               }`}
//               onClick={handleKeyDown}
//             >
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 width="1em"
//                 height="1em"
//                 fill="currentColor"
//                 viewBox="0 0 256 256"
//                 className="h-4 w-4 dark:text-white"
//               >
//                 <path d="M221.66,133.66l-72,72a8,8,0,0,1-11.32-11.32L196.69,136H40a8,8,0,0,1,0-16H196.69L138.34,61.66a8,8,0,0,1,11.32-11.32l72,72A8,8,0,0,1,221.66,133.66Z"></path>
//               </svg>
//             </div>
//           )}
//         </div>

//         <input className=" border-2 border-red-500"
//           type="file"
//           id="fileInput"
//           style={{ display: "none" }}
//           onChange={() => setIsFileSelected(true)}
//         />
//       </div>
//       {loading && (
//         <div
//         onClick={handleStopClick}
//         className="absolute inset-y-0 right-0 pr-3 flex items-center"
//       >
//           <div className="text-white p-2 rounded-full bg-blue-500">
       
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               width="1em"
//               height="1em"
//               fill="none"
//               viewBox="0 0 24 24"
//               className="icon-lg"
//             >
//               <rect
//                 width="10"
//                 height="10"
//                 x="7"
//                 y="7"
//                 fill="currentColor"
//                 rx="1.25"
//               ></rect>
//             </svg>
          
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default ChatTextarea;













// // // @ts-nocheck

import React, { useEffect, useRef, useState } from "react";
import Textarea from "react-textarea-autosize";
import { useMessages } from "../../MessageContext";
import Loader from "../loader/DevinLoader";

const ChatTextarea = () => {
  const textAreaRef = useRef(null);

  const [prompt, setPrompt] = useState("");
  const [agentID, setAgentID] = useState(null);
  const { messages, setMessages, setLoading, loading } = useMessages();

  const fetchAgentID = async () => {
    try {
      const response = await fetch("https://15.157.174.222/start");
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      setAgentID(data.thread_id);
      console.log("agent id is", data.thread_id);
    } catch (error) {
      console.error("Error fetching agent ID:", error.message);
    }
  };

  const fetchResponseFromAssistant = async () => {
    if (prompt.trim() === "") return;

    const userMessage = { content: prompt.trim(), role: "user" };
    setMessages((messages) => [...messages, userMessage]);

    // Add a dummy loading message
    const loadingMessage = {
      content: <Loader />,
      role: "system",
      isLoading: true,
    };
    setMessages((messages) => [...messages, loadingMessage]);

    setLoading(true);

    try {
      const thread_id = agentID;
      const response = await fetch("https://15.157.174.222/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          thread_id: thread_id,
          message: prompt,
        }),
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();

      // Replace the loading message with the actual response
      setMessages((messages) =>
        messages.map((msg) =>
          msg.isLoading ? { content: data.response, role: "system" } : msg
        )
      );

      setLoading(false);
    } catch (error) {
      console.error("Error sending message:", error.message);
    }
  };

  useEffect(() => {
    fetchAgentID();
  }, []);

  const handleKeyDown = async (e) => {
    if ((e.key === "Enter" && !e.shiftKey) || e.type === "click") {
      e.preventDefault();
      if (loading) return;
      fetchResponseFromAssistant();

      setPrompt("");
    }
  };
  const handleStopClick = () => {
    // Cancel the ongoing request
    setLoading(false);
    // Remove the dummy loading message
    setMessages((messages) => messages.filter((msg) => !msg.isLoading));
  };
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
          style={{ caretColor: "#3B82F6" }}
          onKeyDown={handleKeyDown}
          onChange={(e) => setPrompt(e.target.value)}
        />

        <div className="absolute inset-y-0 left-0 flex items-center pl-2"></div>

        <div className="absolute inset-y-0 right-0 flex items-center pr-2">
          {!loading && (
            <div
              className={`text-white p-2 rounded-full ${
                prompt.length > 0 ? "bg-blue-500 cursor-pointer" : "bg-gray-500"
              }`}
              onClick={handleKeyDown}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1em"
                height="1em"
                fill="currentColor"
                viewBox="0 0 256 256"
                className={`h-4 w-4 dark:text-white
                `}
              >
                <path d="M221.66,133.66l-72,72a8,8,0,0,1-11.32-11.32L196.69,136H40a8,8,0,0,1,0-16H196.69L138.34,61.66a8,8,0,0,1,11.32-11.32l72,72A8,8,0,0,1,221.66,133.66Z"></path>
              </svg>
            </div>
          )}
        </div>

        <input
          className=" border-2 border-red-500"
          type="file"
          id="fileInput"
          style={{ display: "none" }}
          onChange={() => setIsFileSelected(true)}
        />
      </div>
      {loading && (
        <div
          onClick={handleStopClick}
          className="cursor-pointer absolute inset-y-0 right-0 pr-3 flex items-center"
        >
          <div className="text-white p-2 rounded-full bg-blue-500">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1em"
              height="1em"
              fill="none"
              viewBox="0 0 24 24"
              className="icon-lg"
            >
              <rect
                width="10"
                height="10"
                x="7"
                y="7"
                fill="currentColor"
                rx="1.25"
              ></rect>
            </svg>
          </div>
        </div>
      )}
    </div>
  );
};

export default ChatTextarea;