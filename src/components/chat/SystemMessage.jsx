import React from 'react';
import {ChatBubbleOvalLeftEllipsisIcon} from "@heroicons/react/24/solid";
import Markdown from "./Markdown";
import Avatar from '../Avatar';
import ChatLoader from './ChatLoader';
import { useMessages } from "../../MessageContext";

const SystemMessage = ({message}) => {
    console.log("message",message)
    const { messages,loading } = useMessages();

    const isLastMessage = messages.indexOf(message) === messages.length - 1;


    return (
        <div className="bg-accents-0 text-white">
        <div className="max-w-4xl w-full mx-auto">
            <div className="flex items-start gap-4 px-3 lg:px-0 py-4">
                <Avatar className="h-8 w-8 text-gray-400" />
                <div className="flex flex-col">
                    <div className="font-bold">Devin</div>
                   { loading && message?.loading == true ?
                    <div className="mt-2 prose prose-invert"> 
                   <ChatLoader/>
                   </div> 
                   : 
                    <div className="mt-2 prose prose-invert">
                        {message}
                    </div>}
                </div>
            </div>
        </div>
    </div>
    );
};

export default SystemMessage;
