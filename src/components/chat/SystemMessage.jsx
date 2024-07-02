

// import React from 'react';
// import Markdown from "react-markdown";
// import Avatar from '../Avatar';
// import ChatLoader from './ChatLoader';

// function makeLinksClickable(text) {
//     const urlRegex = /(https?:\/\/[^\s]+)/g;
//     return text?.replace(urlRegex, url => `[${url}](${url})`);
//   }


// const SystemMessage = ({ message, loading, isLastMessage }) => {
//     const processedText = makeLinksClickable(message);
//     console.log("text is ",processedText)

//     return (
//         <div className="bg-accents-0 text-white">
//             <div className="max-w-4xl w-full mx-auto">
//                 <div className='flex flex-row justify-left md:ml-20'>
//                 <div className="flex m-4  md:ml-16 items-start gap-4 max-lg:px-0 py-4">
//                     <Avatar className="h-8 w-8 text-gray-400" status='ai' />
//                     <div className="flex flex-col">
//                         <div className="font-bold">Agent</div>
//                         {loading && isLastMessage ? (
//                             <div className="mt-2 prose prose-invert">
//                                 <ChatLoader />
//                             </div>
//                         ) : (
//                             <div className="mt-2 prose prose-invert rounded-md p-2 w-full hover:bg-[#d3d3d3] hover:text-black transition-colors duration-300 ">
//                                 <Markdown>
//                                     {message}
//                                 </Markdown>
//                             </div>
//                         )}
//                     </div>
//                 </div>
//                 </div>
                
//             </div>
//         </div>
//     );
// };

// export default SystemMessage;


import React from 'react';
import Markdown from 'react-markdown';
import Avatar from '../Avatar';
import ChatLoader from './ChatLoader';

function makeLinksClickable(text) {
    if (typeof text !== 'string') return text;

    const urlRegex = /(https?:\/\/[^\s]+)/g;
    
    return text.replace(urlRegex, url => {
        // Trim trailing punctuation
        let cleanUrl = url.replace(/[.,!?")\]]+$/, '');
        return `[Meeting Link](${cleanUrl})`;
    });
}

const SystemMessage = ({ message, loading, isLastMessage }) => {
    const processedText = makeLinksClickable(message);
    console.log("Processed text is: ", processedText);

    return (
        <div className="bg-accents-0 text-white">
            <div className="max-w-4xl w-full mx-auto">
                <div className='flex flex-row justify-left md:ml-20'>
                    <div className="flex m-4 md:ml-16 items-start gap-4 max-lg:px-0 py-4">
                        <Avatar className="h-8 w-8 text-gray-400" status='ai' />
                        <div className="flex flex-col">
                            <div className="font-bold">Agent</div>
                            {loading && isLastMessage ? (
                                <div className="mt-2 prose prose-invert">
                                    <ChatLoader />
                                </div>
                            ) : (
                                <div className="mt-2 prose prose-invert rounded-md p-2 w-[50vw] hover:bg-[#d3d3d3] hover:text-black transition-colors duration-300">
                                    <Markdown>
                                        {processedText}
                                    </Markdown>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SystemMessage;
