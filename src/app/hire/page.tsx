"use client";

import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";


const Hire = () => {
    const [message, setMessage] = useState('');

    const handleSendMessage = () => {
        console.log('Message sent:', message);
        setMessage('');
    };

    return (
        <div className="p-28">
            <div className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl">
                <Textarea
                    className="h-[200px]"
                    placeholder="type your message here"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                />
                <Button onClick={handleSendMessage} size="md" className="max-w-40" type="submit">Send Message</Button>
            </div>
        </div>
    );
}

export default Hire;