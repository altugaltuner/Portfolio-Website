"use client";

import { useChat } from "ai/react";

export default function Chat() {
    const { messages, input, handleInputChange, handleSubmit } = useChat();

    return (
        <div className="mx-auto w-full max-w-md py-24 flex flex-col">
            {messages.length > 0 ?
                messages.map((m) => (
                    <div key={m.id} className="whitespace-pre-wrap ">
                        {m.role === "user" ? "You: " : "AI: "}
                        {m.content}
                    </div>
                )) : null
            }
            < form onSubmit={handleSubmit} className="flex flex-row">
            </form>
            <input
                type="text"
                value={input}
                placeholder="Type your message here"
                onChange={handleInputChange}
                className="fixed w-full max-w-md bottom-0 border border-gray-300"
            />
        </div >
    );
}