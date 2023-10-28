import React, { useState, useRef, useEffect } from 'react';

function ChatBot() {
  const [isChatModalOpen, setChatModalOpen] = useState(false);
  const [userMessage, setUserMessage] = useState('');
  const [messages, setMessages] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const inputRef = useRef(null);
  const messagesRef = useRef(null);
  const API_URL = process.env.REACT_APP_CHAT_URL;
  const API_KEY = process.env.REACT_APP_CHAT_API_KEY;

  useEffect(() => {
    if (messages.length == 0) {
      setMessages([...messages, {content:'Welcome to UTA Chatbot! How may I assist you today?', role:'bot'}]);
    }
  },[])

  useEffect(() => {
    if (messagesRef.current) {
      messagesRef.current.scrollTop = messagesRef.current.scrollHeight;
    }
  }, [messages]);

  const toggleChatModal = () => {
    setChatModalOpen(!isChatModalOpen);
  };

  const handleUserMessageChange = (e) => {
    setUserMessage(e.target.value);
  };

  const handleSendClick = () => {
    if (userMessage.trim() === '') return;
    const newUserMessage = { content: userMessage, role: 'user' };
    setMessages([...messages, newUserMessage]); // Append the user message to the existing messages
    sendUserMessage(userMessage);
    setUserMessage('');
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSendClick();
    }
  };

  const generateResponse = (userMessage) => {
    setLoading(true);

    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${API_KEY}`
      },
      body: JSON.stringify({
        model: "gpt-3.5-turbo",
        messages: [{ role: "user", content: userMessage }],
      })
    };

    fetch(API_URL, requestOptions)
      .then((res) => res.json())
      .then((data) => {
        const newBotMessage = { content: data.choices[0].message.content.trim(), role: 'bot' };
        setMessages([...messages, newBotMessage]);
      })
      .catch(() => {
        const errorMessage = { content: 'Oops! Something went wrong. Please try again.', role: 'bot' };
        setMessages([...messages, errorMessage]);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const sendUserMessage = (userMessage) => {
    if (userMessage.trim() === '') return;
    generateResponse(userMessage);
  };

  return (
    <div className="ChatBot fixed bottom-4 right-4">
      {!isChatModalOpen && 
        <button
        onClick={toggleChatModal}
        className="chat-button bg-orange text-white p-2 font-bold cursor-pointer"
      >
        Chat Now
      </button>
      }

      {isChatModalOpen && (
        <div className="chat-modal bg-white shadow-md rounded-lg">
          <div className="chat-header p-4 bg-blue text-white flex justify-between items-center">
            <h2 className="text-center font-bold">UTA ChatBot</h2>
            <div className="close-button" onClick={toggleChatModal} style={{cursor:"pointer"}}>
              <span>X</span>
            </div>
          </div>
          <div className="chat-messages p-4">
            <div ref={messagesRef} className={`message-container overflow-y-auto 
                                                sm:w-48 sm:h-64 sm:max-h-64 sm:max-w-48 
                                                md:w-96 md:h-96 md:max-h-96 md:max-w-96
                                                lg:w-120 lg:h-120 lg:max-h-120 lg:max-w-120`}>
              {messages.map((message, index) => (
                <div key={index} className={`message ${message.role}`} style={message.role === 'user' ? { fontWeight: 'bold' } : null}>
                  <br/>{message.content}
                </div>
              ))}
              {isLoading && <div className="loader">Loading...</div>}
            </div>
          </div>
          <div className="chat-input p-4 flex flex-1">
            <input
              type="text"
              value={userMessage}
              onChange={handleUserMessageChange}
              onKeyPress={handleKeyPress}
              ref={inputRef}
              placeholder="Type your message..."
              className="w-full px-3 py-2 border"
            />
            <button
              onClick={handleSendClick}
              className="send-button bg-blue text-white p-2 font-bold cursor-pointer"
            >
              Send
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default ChatBot;
