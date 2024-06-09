import React from "react";

const ChatLoader = () => {
    return (
        <div className="typing-loader">
            <div className="dot"></div>
            <div className="dot"></div>
            <div className="dot"></div>
            <style jsx>{`
                .typing-loader {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    height: 100%;
                    padding: 0 10px;
                }
                .dot {
                    background-color: #09f;
                    border-radius: 50%;
                    width: 8px;
                    height: 8px;
                    margin: 0 4px;
                    animation: typing 1s infinite ease-in-out;
                }
                .dot:nth-child(2) {
                    animation-delay: 0.2s;
                }
                .dot:nth-child(3) {
                    animation-delay: 0.4s;
                }
                @keyframes typing {
                    0%, 80%, 100% {
                        transform: scale(0);
                    } 
                    40% {
                        transform: scale(1);
                    }
                }
            `}</style>
        </div>
    );
};

export default ChatLoader;
