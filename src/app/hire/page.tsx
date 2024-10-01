"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Home = () => {
    const [message, setMessage] = useState('');
    const [response, setResponse] = useState('');

    const handleSendMessage = async () => {
        try {
            const res = await fetch('/api/altuggpt', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ prompt: message }),
            });

            const data = await res.json();
            setResponse(data.text);
        } catch (error) {
            console.error("Error:", error);
        }
    };

    return (
        <div className="p-28">
            <Input
                placeholder="Type your message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
            />
            <Button onClick={handleSendMessage}>Send Message</Button>

            {response && (
                <div>
                    <h3>AltugGPT Response:</h3>
                    <p>{response}</p>
                </div>
            )}
        </div>
    );
};

export default Home;
