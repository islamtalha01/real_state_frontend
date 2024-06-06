// import React from "react";
// import UserMessage from "./UserMessage";
// import SystemMessage from "./SystemMessage";
// import ScrollToBottom from "react-scroll-to-bottom";
// import { useSelector } from "react-redux";
// import { selectMessages } from "../../redux/reducers/chatSlice";
// import { useMessages } from "../../MessageContext";
// const Content = () => {
//   // const messages = useSelector(selectMessages);
//   const { messages } = useMessages();

//   return (
//     <div className="relative flex-1 h-full">
//       <div className=" border-b border-[#f2f2f2] px-[2rem] pb-6 dark:border-[#484848]">
//         {/* <div className="items-left flex flex-col justify-between">
//           <div className="flex flex-col items-center my-16">
//             <h1 className="text-3xl font-bold text-center">
//               Real Estate Genius
//             </h1>
//             <p className="text-gray-400 mt-2 text-center">
//               Your AI Real Estate Agent
//             </p>
//           </div>
//         </div> */}

// <div className="flex flex-col items-center justify-center">
//   <div className=" my-4 ">
//     <h1 className="text-3xl font-bold text-left">
      
//     Todd Kingsley

//     </h1>
//     <p className="text-gray-400 mt-2 text-left">
//     AI agent for Southern California
//     </p>
//   </div>
// </div>





//       </div>
     
//         {messages.length > 0 ? (
//           <ScrollToBottom
//             initialScrollBehavior="auto"
//             followButtonClassName="scroll-to-last-message"
//             className="!absolute top-0 flex flex-col w-full h-full overflow-x-hidden overflow-y-auto"
//           >
//             {messages.map((message, index) =>
//               message.role === "user" ? (
//                 <UserMessage key={index} message={message.content} />
//               ) : (
//                 <SystemMessage key={index} message={message.content} />
//               )
//             )}
//           </ScrollToBottom>
//         ) : (
//           <div className="text-center pt-5">    
//             <div className="pb-1 text-lg dark:text-white">Hey there!</div>
//             <div className="pr-5 text-sm text-gray-400">
//               My name is Todd Kingsley AI Assistant here to help with your real estate needs 🏠
//             </div>
//           </div>
//         )}
//     </div>
//   );
// };

// export default Content;


// Content.js
import React from "react";
import UserMessage from "./UserMessage";
import SystemMessage from "./SystemMessage";
import { dummyMessages } from "./dummyMessages";

const Content = () => {
  return (
    <div className="relative flex-1 h-full">
      <div className="border-b border-[#f2f2f2] px-[2rem] pb-6 dark:border-[#484848]">
        <div className="flex flex-col items-center justify-center my-4">
          <h1 className="text-3xl font-bold text-left">Todd Kingsley</h1>
          <p className="text-gray-400 mt-2 text-left">
            AI agent for Southern California
          </p>
        </div>
      </div>
        
      {dummyMessages.length > 0 ? (
        <>
       
         <div className=" flex flex-col w-full overflow-x-hidden overflow-y-auto">
          
          {dummyMessages.map((message, index) =>
            message.role === "user" ? (
              <UserMessage key={index} message={message.content} />
            ) : (
              <SystemMessage key={index} message={message.content} />
            )
          )}
        </div>
        </>
       
      ) : (
        <div className="text-center pt-5">
          <div className="pb-1 text-lg dark:text-white">Hey there!</div>
          <div className="pr-5 text-sm text-gray-400">
            My name is Todd Kingsley AI Assistant here to help with your real
            estate needs 🏠
          </div>
        </div>
      )}
    </div>
  );
};

export default Content;
