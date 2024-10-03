'use client';

import { useState } from 'react';
import { readStreamableValue } from 'ai/rsc';
import { continueConversation, Message } from '../actions';
import { ScrollArea } from '@radix-ui/react-scroll-area';

// Allow streaming responses up to 30 seconds
export const maxDuration = 30;

export default function Home() {
    const [conversation, setConversation] = useState<Message[]>([]);
    const [input, setInput] = useState<string>('');

    return (
        <div className='h-[750px] flex flex-col items-center bg-[#232329] w-[70%]'>
            <div className='w-full max-w-2xl bg-white shadow-lg rounded-lg flex flex-col h-full'>
                <ScrollArea className='flex-1 overflow-auto p-6'>
                    {conversation.map((message, index) => (
                        <div className={`py-2 ${message.role === 'user' ? 'text-right' : 'text-left'}`} key={index}>
                            <span className={`block font-medium ${message.role === 'user' ? 'text-blue-600' : 'text-gray-800'}`}>
                                {message.role === 'user' ? 'Misafir' : 'AltugGPT'}
                            </span>
                            <p className='text-black'>{message.content}</p>
                        </div>
                    ))}
                </ScrollArea>

                <div className='p-4 bg-gray-100 border-t border-gray-200 flex'>
                    <input
                        type="text"
                        className='flex-1 px-4 py-2 border border-gray-300 rounded-md text-black'
                        value={input}
                        onChange={event => {
                            setInput(event.target.value);
                        }}
                    />
                    <button
                        className='ml-2 px-4 py-2 bg-blue-500 text-white rounded-md'
                        onClick={async () => {
                            const { messages, newMessage } = await continueConversation([
                                ...conversation,
                                { role: 'user', content: input },
                            ]);

                            let textContent = '';

                            for await (const delta of readStreamableValue(newMessage)) {
                                textContent = `${textContent}${delta}`;

                                setConversation([
                                    ...messages,
                                    { role: 'assistant', content: textContent },
                                ]);
                            }
                        }}
                    >
                        Send Message
                    </button>
                </div>
            </div>
        </div>
    );
}
