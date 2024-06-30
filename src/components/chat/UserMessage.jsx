import React from 'react';
import {UserCircleIcon} from "@heroicons/react/24/solid";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import Markdown from "react-markdown";

import Avatar from '../Avatar';
const UserMessage = ({message}) => {
    return (
     <div className="bg-accents-0 text-white">
    <div className="max-w-4xl w-full mx-auto">

    <div className='flex flex-row justify-left md:ml-20'>

    <div className="flex  m-4 md:ml-12 items-start gap-4 px-3 max-lg:px-0 py-4">
            <Avatar className="h-8 w-8 text-gray-400" status={"user"}  />
            <div className="flex flex-col">
                <div className="font-bold">You</div>
                <div className="mt-2 prose prose-invert rounded-md  p-2 w-full hover:bg-[#d3d3d3] hover:text-black transition-colors duration-300 ">
                <Markdown>{message}</Markdown>
                </div>
            </div>
        </div>
    </div>
       
    </div>
</div>

    );
};

export default UserMessage;
