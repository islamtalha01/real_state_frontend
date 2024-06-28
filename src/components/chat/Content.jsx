import React, { useEffect, useRef, useState } from "react";
import UserMessage from "./UserMessage";
import SystemMessage from "./SystemMessage";
import ScrollToBottom from "react-scroll-to-bottom";
import { useMessages } from "../../MessageContext";
import ChatTextarea from "../../components/chat/ChatTextarea";

const introductoryMessage = [
  {
    content:
      "Are you interested in understanding the current real estate market trends in Southern California?",
    role: "system",
  },
  {
    content:
      "Which specific areas or neighborhoods are you interested in exploring within Southern California?",
    role: "system",
  },
  {
    content:
      "What type of community vibe are you looking for (e.g., family-friendly, urban, suburban, beach town)?",
    role: "system",
  },
  {
    content:
      "Do you need information on the buying process, including financing options and what it is like to have Todd Kingsley on your team?",
    role: "system",
  },
];

const Content = () => {
  const { messages, loading, setEnableAudio } = useMessages();
  const scrollRef = useRef();

  const [isChecked, setIsChecked] = useState(false);

  const handleSwitch = (event) => {
    const isChecked = event.target.checked;

    setEnableAudio(isChecked);
    setIsChecked(isChecked);
  };

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);

  return (
    <div className="relative flex-1 h-full flex flex-col pb-0">
      <div>
        {/* <div className="absolute top-4 right-4">
          <label
            htmlFor="toggleSwitch"
            className="flex items-center cursor-pointer"
          >
            <div className="relative">
              <input
                id="toggleSwitch"
                type="checkbox"
                className="sr-only"
                checked={isChecked}
                onChange={handleSwitch}
              />
              <div
                className={`block w-14 h-8 rounded-full ${
                  isChecked ? "bg-customBlue" : "bg-gray-600"
                }`}
              ></div>
              <div
                className={`dot absolute left-1 top-1 w-6 h-6 rounded-full transition ${
                  isChecked
                    ? "transform translate-x-6 bg-white"
                    : "transform translate-x-0 bg-white"
                }`}
              ></div>
            </div>
            <div className="ml-3 text-white font-medium">
              Disable Audio Response
            </div>
          </label>
        </div> */}
      </div>
      <div className="border-b border-[#f2f2f2] px-[2rem] pb-6 dark:border-[#484848] flex-shrink-0">
        <div className="flex flex-col items-center justify-center">
          <div className="my-4 mr-4">
            <h1 className="text-3xl font-bold text-left">Todd Kingsley</h1>
            <p className="text-gray-400 mt-2 text-left">
              Southern California AI Agent
            </p>
          </div>
        </div>
      </div>
    { !messages.length > 0 && <div className="flex flex-col items-center justify-center">
          <div className="text-center pt-4 pb-4">
          <div className="pb-1 text-lg dark:text-white">Hey there!</div>
           <div className=" p-4 text-sm text-center text-gray-400">
              I am Todd Kingsley's AI Assistant and am here to help you with ALL of
              your real estate questions 🏠
            </div>
          </div>
          </div>}
      {messages.length > 0 ? (
        <ScrollToBottom className="flex flex-row h-screen justify-center items-center overflow-hidden scrollbar-hide ">
          <div>
          <div className="text-center pt-4 pb-4">
          <div className="pb-1 text-lg dark:text-white">Hey there!</div>
           <div className=" p-4 text-sm text-center text-gray-400">
              I am Todd Kingsley's AI Assistant and am here to help you with ALL of
              your real estate questions 🏠
            </div>
          </div>
            {messages?.map((message, index) => {
              const isLastMessage = index === messages.length - 1;
              return (
                <div key={index}>
                  {message.role === "user" ? (
                    <UserMessage message={message.content} />
                  ) : (
                    <SystemMessage
                      message={message.content}
                      loading={loading}
                      isLastMessage={isLastMessage}
                    />
                  )}
                </div>
              );
            })}
            <div ref={scrollRef} />
          </div>
        </ScrollToBottom>
      ) : (
       

        <div className=" flex flex-col h-screen justify-center items-center overflow-auto ">
          
        <div class="mx-3 mt-12 flex max-w-3xl flex-wrap items-stretch justify-center gap-4">
         
            <div class="flex max-w-3xl flex-wrap items-stretch justify-center gap-4">
              <button class="relative flex w-40 flex-col gap-2 rounded-2xl border border-token-border-light px-3 pb-4 pt-3 text-start align-top text-[15px] shadow-xxs transition enabled:hover:bg-token-main-surface-secondary disabled:cursor-not-allowed">
              
                <div class="line-clamp-3 text-balance text-gray-600 dark:text-gray-500 break-word">
                "Are you interested in understanding the current real estate market trends in Southern California?",
                </div>
              </button>
              <button class="relative flex w-40 flex-col gap-2 rounded-2xl border border-token-border-light px-3 pb-4 pt-3 text-start align-top text-[15px] shadow-xxs transition enabled:hover:bg-token-main-surface-secondary disabled:cursor-not-allowed">
              
                <div class="line-clamp-3 text-balance text-gray-600 dark:text-gray-500 break-word">
                "Which specific areas or neighborhoods are you interested in exploring within Southern California?",
                </div>
              </button>
            </div> 
             <div class="flex max-w-3xl flex-wrap items-stretch justify-center gap-4">
              <button class="relative flex w-40 flex-col gap-2 rounded-2xl border border-token-border-light px-3 pb-4 pt-3 text-start align-top text-[15px] shadow-xxs transition enabled:hover:bg-token-main-surface-secondary disabled:cursor-not-allowed">
             
                <div class="line-clamp-3 text-balance text-gray-600 dark:text-gray-500 break-word">
                "What type of community vibe are you looking for (e.g., family-friendly, urban, suburban, beach town)?",
                </div>
              </button>
              <button class="relative flex w-40 flex-col gap-2 rounded-2xl border border-token-border-light px-3 pb-4 pt-3 text-start align-top text-[15px] shadow-xxs transition enabled:hover:bg-token-main-surface-secondary disabled:cursor-not-allowed">
               
                <div class="line-clamp-3 text-balance text-gray-600 dark:text-gray-500 break-word">
      "Do you need information on the buying process, including financing options and what it is like to have Todd Kingsley on your team?",
                </div>
              </button>
            </div>
          </div>
        </div>
      )}
      {/* <div className=" mx-3 xl:mx-40 "> */}
      <div>
        <ChatTextarea />
      </div>
    </div>
  );
};

export default Content;
