import React from 'react';
import {ChatBubbleOvalLeftEllipsisIcon} from "@heroicons/react/24/solid";
import Markdown from "./Markdown";
import Avatar from '../Avatar';


const SystemMessage = ({message}) => {
    return (
        <div className="bg-accents-0 text-white">
        <div className="max-w-4xl w-full ml-80 mr-80">
            <div className="flex items-start gap-4 px-3 lg:px-0 py-4">
                <Avatar className="h-8 w-8 text-gray-400" />
                <div className="flex flex-col">
                    <div className="font-bold">Devin</div>
                    <div className="mt-2 prose prose-invert">
                        {message}
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
};

export default SystemMessage;
