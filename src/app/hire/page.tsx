'use client';

import { useEffect, useRef, useState } from 'react';
import { readStreamableValue } from 'ai/rsc';
import { continueConversation, Message } from '../actions';
import { ScrollArea } from '@radix-ui/react-scroll-area';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export const maxDuration = 30;

export default function Home() {
    const [conversation, setConversation] = useState<Message[]>([]);
    const [input, setInput] = useState<string>('');
    const scrollAreaRef = useRef<HTMLDivElement>(null);
    const [isAutoScrollEnabled, setIsAutoScrollEnabled] = useState(true);

    const handleSendMessage = async () => {
        const { messages, newMessage } = await continueConversation([
            ...conversation,
            { role: 'user', content: input },
        ]);
        setInput("");
        let textContent = '';

        for await (const delta of readStreamableValue(newMessage)) {
            textContent = `${textContent}${delta}`;

            setConversation([
                ...messages,
                { role: 'assistant', content: textContent },
            ]);
        }
    };

    useEffect(() => {
        if (isAutoScrollEnabled && scrollAreaRef.current) {
            scrollAreaRef.current.scrollTop = scrollAreaRef.current.scrollHeight;
        }
    }, [conversation]);

    const handleScroll = () => {
        if (scrollAreaRef.current) {
            const { scrollTop, scrollHeight, clientHeight } = scrollAreaRef.current;
            setIsAutoScrollEnabled(scrollTop + clientHeight >= scrollHeight);
        }
    };

    return (
        <div className='h-[36rem] md:h-[750px] p-[10px] flex flex-col justify-center items-center bg-[#232329] w-[70%] rounded-xl'>
            <div className='w-full bg-white shadow-lg rounded-lg flex flex-col h-full'>
                <ScrollArea className='flex-1 overflow-auto p-6 scrollbar-thin bg-[#18181e] scrollbar-track-gray-300' ref={scrollAreaRef}
                    onScroll={handleScroll}
                >

                    <div className='py-2 flex justify-start' >
                        <div
                            className='inline-block max-w-sm px-5 py-2.5 rounded-3xl bg-[#e0e0e0] text-gray-800'
                        >
                            <span className='block font-medium md:text-base text-xs'>
                                Merhaba, ben Altuğ. Size nasıl yardımcı olabilirim?
                            </span>
                        </div>
                    </div>
                    {conversation.map((message, index) => (
                        <div
                            className={`py-2 flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
                            key={index}
                        >
                            <div
                                className={`inline-block max-w-sm px-5 py-2.5 rounded-3xl ${message.role === 'user' ? 'bg-[#f4f4f4] text-blue-600' : 'bg-[#e0e0e0] text-gray-800'}`}
                            >
                                <span className='block font-medium'>
                                    {message.role === 'user' ? 'Misafir' : ''}
                                </span>
                                <p className='text-black'>{message.content}</p>
                            </div>
                        </div>
                    ))}
                </ScrollArea>

                <div className='xs:flex-col md:flex p-2 bg-[#2f2f35]'>
                    <Input
                        type="text"
                        className='flex-1 px-4 border border-gray-300 text-white rounded-md'
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
                        className='ml-2 px-4 text-white rounded-md md:w-auto w-[95%] md:mt-0 mt-2'
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
