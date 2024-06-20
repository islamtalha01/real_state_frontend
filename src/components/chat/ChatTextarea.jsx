
// @ts-nocheck
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import React, { useEffect, useRef, useState } from "react";
import Textarea from "react-textarea-autosize";
import { useMessages } from "../../MessageContext";
import Loader from "../loader/DevinLoader";
// import convertAudioBlobToText from './speechRecognition';
const ChatTextarea = () => {
  const textAreaRef = useRef(null);
  const [prompt, setPrompt] = useState("");
  const [agentID, setAgentID] = useState(null);
  const { messages, setMessages, setLoading, loading } = useMessages();
  const [isRecording, setIsRecording] = useState(false);
  const recognition = useRef(null);

  const fetchAgentID = async () => {
    try {
     const config ={ headers: {
        "Content-Type": "application/json",
      }}
      const response = await fetch("https://real-estate-ai-32c351019223.herokuapp.com/start");

      if (!response.ok) {
        throw new Error("Network Error");
      }
      const data = await response.json();
      setAgentID(data.thread_id);
      console.log("agent id is", data.thread_id);
    } catch (error) {
      toast.error(error.message);
      console.error("Error fetching agent ID:", error.message);
    }
  };

  const fetchResponseFromAssistant = async () => {
    if (prompt.trim() === "") return;

    const userMessage = { content: prompt.trim(), role: "user" };
    setMessages((messages) => [...messages, userMessage]);

    const loadingMessage = {
      content: <Loader />,
      role: "system",
      isLoading: true,
    };
    setMessages((messages) => [...messages, loadingMessage]);

    setLoading(true);

    try {
      const thread_id = agentID;
      const response = await fetch("https://real-estate-ai-32c351019223.herokuapp.com/chat", {
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
      console.log("text data",data.text)
      const audioBlob = new Blob([new Uint8Array(atob(data.audio).split("").map(char => char.charCodeAt(0)))], { type: 'audio/mpeg' });
     
      const audioUrl = URL.createObjectURL(audioBlob)
      const audio = new Audio(audioUrl);
      audio.play();

      setMessages((messages) =>
        messages.map((msg) =>
          msg.isLoading ? { content: data.text, role: "system" } : msg
        )
      );

      setLoading(false);
    } catch (error) {
      toast.error(error.message);
      console.error("Error sending message:", error.message);
    }
  };

  useEffect(() => {
    fetchAgentID();

    if (!("webkitSpeechRecognition" in window)) {
      console.error("Speech recognition not supported in this browser.");
      return;
    }

    recognition.current = new window.webkitSpeechRecognition();
    recognition.current.continuous = true;
    recognition.current.interimResults = false;
    recognition.current.lang = "en-US";

    recognition.current.onresult = (event) => {
      console.log("Speech recognition result event:", event);
      const speechResult = event.results[event.resultIndex][0].transcript;
      console.log("Speech result:", speechResult);
      setPrompt((prevPrompt) => prevPrompt + " " + speechResult);
    };

    recognition.current.onerror = (event) => {
      console.error("Speech recognition error", event.error);
      setIsRecording(false);
    };

    recognition.current.onend = () => {
      if (isRecording) {
        console.log("Restarting speech recognition...");
        recognition.current.start();
      }
    };
  }, []);

  const handleKeyDown = async (e) => {
    if ((e.key === "Enter" && !e.shiftKey) || e.type === "click") {
      e.preventDefault();
      if (loading) return;
      if (isRecording) {
        recognition.current.stop();
        setIsRecording(false);
      }
      fetchResponseFromAssistant();
      setPrompt("");
    }
  };

  const handleStopClick = () => {
    if (isRecording) {
      recognition.current.stop();
      setIsRecording(false);
    }
    setLoading(false);
    setMessages((messages) => messages.filter((msg) => !msg.isLoading));
  };

  const handleMicClick = () => {
    if (isRecording) {
      recognition.current.stop();
      setIsRecording(false);
    } else {
      recognition.current.start();
      setIsRecording(true);
    }
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

        <div className="absolute inset-y-0 right-0 flex items-center pr-2 space-x-2">
          {!loading && (
            <>
              <div
                className={`text-white p-2 rounded-full ${
                  prompt.length > 0 ? "bg-blue-500" : "bg-gray-500"
                }`}
                onClick={handleKeyDown}
              >
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
              <div
                className="text-white p-2 rounded-full bg-blue-500"
                onClick={handleMicClick}
              >
                {isRecording ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="1em"
                    height="1em"
                    fill="currentColor"
                    viewBox="0 0 256 256"
                    className="h-4 w-4 text-red"
                  >
                    <rect width="256" height="256" fill="none"></rect>
                    <rect
                      x="96"
                      y="96"
                      width="64"
                      height="64"
                      rx="8"
                      fill="currentColor"
                    ></rect>
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="1em"
                    height="1em"
                    fill="currentColor"
                    viewBox="0 0 256 256"
                    className="h-4 w-4 dark:text-white"
                  >
                    <path d="M128,8a48,48,0,0,0-48,48v56a48,48,0,0,0,96,0V56A48,48,0,0,0,128,8Zm32,104a32,32,0,0,1-64,0V56a32,32,0,0,1,64,0ZM216,104a8,8,0,0,0-8,8v16a80,80,0,0,1-160,0V112a8,8,0,0,0-16,0v16a96.11,96.11,0,0,0,88,95.62V248H104a8,8,0,0,0,0,16h48a8,8,0,0,0,0-16H136V223.62A96.11,96.11,0,0,0,224,128V112A8,8,0,0,0,216,104Z"></path>
                  </svg>
                )}
              </div>
            </>
          )}
        </div>

        <input
          className="border-2 border-red-500"
          type="file"
          id="fileInput"
          style={{ display: "none" }}
          onChange={() => setIsFileSelected(true)}
        />
      </div>
      {loading && (
        <div
          onClick={handleStopClick}
          className="absolute inset-y-0 right-0 pr-3 flex items-center"
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
