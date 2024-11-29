import React, { useState } from 'react';
import { MessageCircle, X, Send, Minus } from 'lucide-react';

const FloatingHelpWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [messages, setMessages] = useState([
    { id: 1, text: "Hello! How can I help you today?", isBot: true }
  ]);
  const [inputText, setInputText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!inputText.trim()) return;

    setMessages(prev => [...prev, {
      id: prev.length + 1,
      text: inputText,
      isBot: false
    }]);
    setInputText('');
  };

  const toggleChat = () => {
    if (!isOpen) {
      setIsOpen(true);
      setIsMinimized(false);
    } else {
      setIsOpen(false);
    }
  };

  const toggleMinimize = () => {
    setIsMinimized(!isMinimized);
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {/* Main Chat Container */}
      {isOpen && (
        <div className={`bg-white rounded-lg shadow-xl mb-4 transition-all duration-300 ease-in-out overflow-hidden
          ${isMinimized ? 'h-14' : 'h-96'} w-80 flex flex-col`}>
          
          {/* Header */}
          <div className="bg-elderBrown p-4 flex justify-between items-center">
            <h3 className="text-white font-semibold">Help & Support</h3>
            <div className="flex gap-2">
              <button 
                onClick={toggleMinimize}
                className="text-white hover:text-gray-200 transition-colors"
              >
                <Minus size={20} />
              </button>
              <button 
                onClick={toggleChat}
                className="text-white hover:text-gray-200 transition-colors"
              >
                <X size={20} />
              </button>
            </div>
          </div>

          {/* Chat Messages */}
          {!isMinimized && (
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {messages.map(message => (
                <div
                  key={message.id}
                  className={`flex ${message.isBot ? 'justify-start' : 'justify-end'}`}
                >
                  <div
                    className={`max-w-[80%] p-3 rounded-lg ${
                      message.isBot
                        ? 'bg-gray-100 text-gray-800'
                        : 'bg-blue-600 text-white'
                    }`}
                  >
                    {message.text}
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Input Form */}
          {!isMinimized && (
            <form onSubmit={handleSubmit} className="p-4 border-t">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={inputText}
                  onChange={(e) => setInputText(e.target.value)}
                  placeholder="Type your message..."
                  className="flex-1 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-elderBrown"
                />
                <button
                  type="submit"
                  className="bg-blue-600 text-white p-2 rounded-lg hover:bg-blue-700 transition-colors"
                >
                  <Send size={20} />
                </button>
              </div>
            </form>
          )}
        </div>
      )}

      {/* Floating Button */}
      {!isOpen && (
        <button
          onClick={toggleChat}
          onTouchMove={toggleChat}
          className="bg-elderBerry text-white p-4 rounded-full shadow-lg hover:bg-elderBrown transition-colors"
        >
          <MessageCircle size={24} />
        </button>
      )}
    </div>
  );
};

export default FloatingHelpWidget;