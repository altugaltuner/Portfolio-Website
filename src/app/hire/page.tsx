'use client';

import { useEffect, useRef, useState } from 'react';
import { readStreamableValue } from 'ai/rsc';
import { continueConversation, Message } from '../actions';
import { ScrollArea } from '@radix-ui/react-scroll-area';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

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
    }, [conversation, isAutoScrollEnabled]);


    const handleScroll = () => {
        if (scrollAreaRef.current) {
            const { scrollTop, scrollHeight, clientHeight } = scrollAreaRef.current;
            setIsAutoScrollEnabled(scrollTop + clientHeight >= scrollHeight);
        }
    };

    return (
        <div className='md:min-h-[50rem] min-h-[30rem] p-[10px] flex flex-col justify-center items-center bg-[#232329] w-[90%] rounded-xl'>
            <div className='w-full bg-white shadow-lg rounded-lg flex flex-col h-full justify-between'>
                <ScrollArea className=' overflow-auto p-6 scrollbar-thin bg-[#18181e] scrollbar-track-gray-300' style={{ height: '-webkit-fill-available' }} ref={scrollAreaRef}
                    onScroll={handleScroll}
                >
                    <div className='py-2 flex justify-start' >
                        <div
                            className='inline-block max-w-[50rem] px-5 py-2.5 rounded-3xl bg-[#e0e0e0] text-gray-800'
                        >
                            <span className='block font-medium md:text-base text-[10px] leading-3'>
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
                                className={`inline-block max-w-[50rem] px-5 py-2.5 rounded-3xl ${message.role === 'user' ? 'bg-[#f4f4f4] text-blue-600' : 'bg-[#e0e0e0] text-gray-800'}`}
                            >
                                <span className='block font-medium'>
                                    {message.role === 'user' ? 'Misafir' : ''}
                                </span>
                                <ReactMarkdown remarkPlugins={[remarkGfm]}>{message.content}</ReactMarkdown>
                            </div>
                        </div>
                    ))}
                </ScrollArea>

                <div className='xs:flex-col md:flex p-2 bg-[#2f2f35]'>
                    <Input
                        type="text"
                        className='flex-1 px-4 border border-gray-500 text-white rounded-md bg-[#2f2f35]'
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
                        className=' px-4 text-white rounded-md md:w-auto w-[100%] md:mt-0 mt-2'
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
