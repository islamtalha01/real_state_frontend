
// @ts-nocheck
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import React, { useEffect, useRef, useState,useImperativeHandle,forwardRef } from "react";
import Textarea from "react-textarea-autosize";
import { useMessages } from "../../MessageContext";
import Loader from "../loader/DevinLoader";
// import convertAudioBlobToText from './speechRecognition';
const ChatTextarea = ({fetchCounter}) => {
  const textAreaRef = useRef(null);
  const [agentID, setAgentID] = useState(null);
  const {  prompt,setPrompt,setMessages, setLoading, loading,setAudioEnd ,isMuted} = useMessages();
  const [isRecording, setIsRecording] = useState(false);
  const recognition = useRef(null);
  const [stopAudio,setStopAudio] = useState(false)
  const [shouldFetchResponse, setShouldFetchResponse] = useState(false);

 //added llogic
  const [mute, setMute] = useState(false); // Add mute state
  const audioRef = useRef(null); // Add a ref to store the audio instance
  const controller = useRef(null); // Add a ref to store the controller for cancelling fetch

  const fetchAgentID = async () => {
    try {
     const config ={ headers: {
        "Content-Type": "application/json",
      }}
      const response = await fetch("http://127.0.0.1:3002/start");

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
    setPrompt("")
    setMessages((messages) => [...messages, loadingMessage]);
    
    setLoading(true);

    try {
      const thread_id = agentID;
      controller.current = new AbortController(); // Create a new AbortController
      const signal = controller.current.signal;

      const response = await fetch("http://127.0.0.1:3002/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          thread_id: thread_id,
          message: prompt,
          voiceResponse:isMuted,
        }),
        signal: signal, // Assign signal to the fetch request
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();

      // Check if the operation is canceled
     
      if(!isMuted){










        if (stopAudio || mute || isMuted) { // Check if either stopAudio or mute is true
          setStopAudio(false); // Reset stopAudio flag
          setAudioEnd(true);
          setLoading(false);
          if (audioRef.current) {
            audioRef.current.pause(); // Pause the audio
            audioRef.current.currentTime = 0; // Reset the audio to the beginning
            audioRef.current.src = ""; // Clear the audio source to stop playback
          }
          setMessages((messages) => messages.filter((msg) => !msg.isLoading));
          return;
        }










        const audioBlob = new Blob([new Uint8Array(atob(data.audio).split("").map(char => char.charCodeAt(0)))], { type: 'audio/mpeg' });
        const audioUrl = URL.createObjectURL(audioBlob);
        const audio = new Audio(audioUrl);
        audioRef.current = audio; // Store the audio instance
  
        audio.play();
        audio.onended = () => {
          console.log("Audio has finished playing");
          setAudioEnd(true);
          setLoading(false);
        };
      }
    

      setMessages((messages) =>
        messages.map((msg) =>
          msg.isLoading ? { content: data.text, role: "system" } : msg
        )
      );

      setLoading(false);
    } catch (error) {
      // Check if the error is due to fetch cancellation
      if (error.name === 'AbortError') {
        console.log('Fetch request aborted:', error.message);
        return; // Exit function if fetch was aborted
      }
      
      toast.error(error.message);
      console.error("Error sending message:", error.message);
    }
  };










  useEffect(() => {
    if (fetchCounter > 0) {
      setShouldFetchResponse(true);
    }
  }, [fetchCounter]);

  useEffect(() => {
    if (prompt) {

      fetchResponseFromAssistant()
      setShouldFetchResponse(false);
    }
  }, [fetchCounter]);




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
  // useImperativeHandle(ref, () => ({
  //   handleKeyDown,
  // }));



  useEffect(() => {
  
      if (audioRef.current) {


        console.log("audio ref block hit")
  
        audioRef.current.pause(); // Pause the audio
        audioRef.current.currentTime = 0; // Reset the audio to the beginning
        audioRef.current.src = ""; // Clear the audio source
        setAudioEnd(true); // Set audio end state to true
        setLoading(false); // Set loading state to false
      }
    
  }, [isMuted]);


  const handleStopClick = () => {
    if (isRecording) {
      recognition.current.stop();
      setIsRecording(false);
    }
    setLoading(false);
    setStopAudio(true);
    setAudioEnd(true);
    setMute(true); // Set mute to true when stopping

    if (audioRef.current) {
      audioRef.current.pause(); // Pause the audio
      audioRef.current.currentTime = 0; // Reset the audio to the beginning
      audioRef.current.src = ""; // Clear the audio source to stop playback
    }

    // Abort the ongoing fetch request
    if (controller.current) {
      controller.current.abort();
    }

    setMessages((messages) => messages.filter((msg) => !msg.isLoading));
  };






  const handleMicClick = () => {
    if (isRecording) {
      recognition.current.stop();
      setIsRecording(false);
    } else  {
      recognition.current.start();
      setIsRecording(true);
    }
  };












  
  return (

    <>
 <div className="!mt-1 md:ml-16 flex flex-row justify-center relative rounded-md shadow-sm ">
      <div className="relative">
        <Textarea
          ref={textAreaRef}
          rows={1}
          name="comment"
          id="comment"
          className="!pl-6 py-3 bg-accents-1 focus:outline-none block w-auto md:w-750 overflow-scroll text-white rounded-md  resize-none pr-[3.5rem]"
          placeholder="Type your message here..."
          value={prompt}
          style={{ caretColor: "#3B82F6" }}
          onKeyDown={handleKeyDown}
          onChange={(e) => setPrompt(e.target.value)}
          disabled={loading}
        />

      <div className="!absolute inset-y-0 right-0 flex items-center pr-2 space-x-2">
        {loading && (
        <div
          onClick={handleStopClick}
          className="!absolute inset-y-0 right-0 pr-3 flex items-center"
        >
          <div className="!text-white p-2 rounded-full bg-blue-500">
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
          {!loading && (
            <>
              <div
                className={`!text-white p-2 rounded-full ${
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
      </div>
   
    </div>





    {/* <div className=" flex flex-row mt-2 justify-center ">

    <div className="flex w-auto md:w-[850px]  bg-accents-1  flex-col gap-1.5 rounded-[26px] relative  ">
  <div className="flex items-end gap-1.5 md:gap-2">
    <div>
      <div className="flex flex-col">
    
        <div type="button" aria-haspopup="dialog" aria-expanded="false" aria-controls="radix-:re:" data-state="closed"></div>
      </div>
    </div>
    <div className="flex min-w-0 max-h-[96px] flex-1 overflow-scroll flex-col">
      <Textarea
          ref={textAreaRef}
          rows={1}
          name="comment"
          id="comment"
          className="!pl-6 py-3 bg-accents-1 focus:outline-none block w-auto md:w-[750px]  text-white rounded-[26px] overflow-y-auto resize-none "
          placeholder="Type your message here..."
          value={prompt}
          style={{ caretColor: "#3B82F6" }}
          onKeyDown={handleKeyDown}
          onChange={(e) => setPrompt(e.target.value)}
          disabled={loading}
        />
    </div>
    <div className="!absolute inset-y-0 right-0 flex items-center pr-2 space-x-2">
        {loading && (
        <div
          onClick={handleStopClick}
          className="!absolute inset-y-0 right-0 pr-3 flex items-center"
        >
          <div className="!text-white p-2 rounded-full bg-blue-500">
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
          {!loading && (
            <>
              <div
                className={`!text-white p-2 rounded-full ${
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
  </div>
</div>



    </div> */}


    </>
   


















  );
};

export default ChatTextarea;






