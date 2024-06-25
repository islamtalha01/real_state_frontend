

import React, { useEffect, useRef } from "react";
import UserMessage from "./UserMessage";
import SystemMessage from "./SystemMessage";
import ScrollToBottom from "react-scroll-to-bottom";
import { useMessages } from "../../MessageContext";
import ChatTextarea from "../../components/chat/ChatTextarea";

const Content = () => {
  const { messages, loading } = useMessages();
  const scrollRef = useRef();

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);

  return (
    <div className="relative flex-1 h-full flex flex-col pb-0">
      <div className="border-b border-[#f2f2f2] px-[2rem] pb-6 dark:border-[#484848] flex-shrink-0">
        <div className="flex flex-col items-center justify-center">
          <div className="my-4">
            <h1 className="text-3xl font-bold text-left">Todd Kingsley</h1>
            <p className="text-gray-400 mt-2 text-left">
              AI agent for Southern California
            </p>
          </div>
        </div>
      </div>
      {messages.length > 0 ? (
        <ScrollToBottom className="flex-1 overflow-hidden scrollbar-hide">
        {messages.map((message, index) => {
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
      </ScrollToBottom>
      ) : (
        <div className="text-center pt-5 flex-1">
          <div className="pb-1 text-lg dark:text-white">Hey there!</div>
          <div className=" p-4 text-sm text-center text-gray-400">
            My name is Todd Kingsley AI Assistant here to help with your real
            estate needs 🏠
          </div>
        </div>
      )}
      <div className=" mx-3 xl:mx-40">
        <ChatTextarea />
      </div>
    </div>
  );
};

export default Content;
