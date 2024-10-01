import React from 'react';

const Chatbot = () => {
    return (
        <div style={{ width: '100%', height: '100%', minHeight: '700px', }}>
            <iframe
                src="https://www.chatbase.co/chatbot-iframe/H5BjGrYr11I-Xc0RfG6YP"
                width="100%"
                style={{ height: '100%', minHeight: '700px', borderTopRightRadius: "10px", borderTopLeftRadius: "10px", borderBottomLeftRadius: "10px", borderBottomRightRadius: "10px" }}
                frameBorder="0"
            ></iframe>
        </div>
    );
};

export default Chatbot;
