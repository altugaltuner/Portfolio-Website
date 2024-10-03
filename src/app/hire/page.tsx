'use client';

import { useState } from 'react';
import { readStreamableValue } from 'ai/rsc';
import { continueConversation, Message } from '../actions';
import { ScrollArea } from '@radix-ui/react-scroll-area';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export const maxDuration = 30;

export default function Home() {
    const [conversation, setConversation] = useState<Message[]>([]);
    const [input, setInput] = useState<string>('');

    const handleSendMessage = async () => {
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
        setInput("");
    };

    return (
        <div className='h-[750px] p-[50px] flex flex-col justify-center items-center bg-[#232329] w-[70%]'>
            <div className='w-full bg-white shadow-lg rounded-lg flex flex-col h-full'>
                <ScrollArea className='flex-1 overflow-auto p-6 scrollbar-thin scrollbar-track-gray-300'>
                    {conversation.map((message, index) => (
                        <div
                            className={`py-2 flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
                            key={index}
                        >
                            <div
                                className={`inline-block max-w-xs px-5 py-2.5 rounded-3xl ${message.role === 'user' ? 'bg-[#f4f4f4] text-blue-600' : 'bg-[#e0e0e0] text-gray-800'}`}
                            >
                                <span className='block font-medium'>
                                    {message.role === 'user' ? 'Misafir' : ''}
                                </span>
                                <p className='text-black'>{message.content}</p>
                            </div>
                        </div>
                    ))}
                </ScrollArea>

                <div className='flex p-2'>
                    <Input
                        type="text"
                        className='flex-1 px-4 border border-gray-300 rounded-md text-black'
                        value={input}
                        onChange={event => {
                            setInput(event.target.value);
                        }}
                        onKeyDown={async (event) => {
                            if (event.key === 'Enter') {
                                await handleSendMessage();
                            }
                        }}
                    />
                    <Button
                        className='ml-2 px-4 text-white rounded-md'
                        onClick={async () => {
                            await handleSendMessage();
                        }}
                    >
                        Send Message
                    </Button>
                </div>
            </div>
        </div>
    );
}
