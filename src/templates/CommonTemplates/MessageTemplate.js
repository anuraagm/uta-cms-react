import React, { useState } from 'react';

function MessageTemplate() {
  const [selectedContact, setSelectedContact] = useState("Contact 1");
  const [showContacts, setShowContacts] = useState(false);

  const contacts = ["Contact 1", "Contact 2", "Contact 3", "Contact 4"];

  const messages = {
    "Contact 1": [
      "Hello",
      "How are you?",
      "Good to see you.",
    ],
    "Contact 2": [
      "Hi",
      "I'm doing well, thanks.",
    ],
    "Contact 3": ["Hey"],
    "Contact 4": ["Hi there!"],
  };

  const handleContactClick = (contact) => {
    setSelectedContact(contact);
    setShowContacts(false);
  };

  return (
    <div className="MessageTemplate bg-gray-200 p-4 m-16">
      <div className="container">
        <div className="md:flex flex-col md:flex-row">
          <div className="md:w-1/4 p-3">
            <h2 className="text-xl sm:text-md">Contacts</h2>
            <div className="hidden md:block">
              {contacts.map((contact, index) => (
                <div
                  key={index}
                  className={`contact border p-2 mb-3 cursor-pointer ${
                    selectedContact === contact ? 'bg-gray-400' : ''
                  }`}
                  onClick={() => handleContactClick(contact)}
                >
                  {contact}
                </div>
              ))}
            </div>
            <div className="md:hidden">
              <div
                className="cursor-pointer"
                onClick={() => setShowContacts(!showContacts)}
              >
                Contacts &#9662;
              </div>
              {showContacts && (
                <div>
                  {contacts.map((contact, index) => (
                    <div
                      key={index}
                      className={`contact border p-2 mb-3 cursor-pointer ${
                        selectedContact === contact ? 'bg-gray-400' : ''
                      }`}
                      onClick={() => handleContactClick(contact)}
                    >
                      {contact}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
          <div className="md:w-3/4 messages p-3 border mb-8">
            <div className="message-history bg-white overflow-y-scroll w-full flex-grow h-[50vh]">
              <h3 className="text-xl md:text-md p-4">{selectedContact}</h3>
              {selectedContact && messages[selectedContact].map((message, index) => (
                <div key={index} className={`message ${index % 2 === 0 ? 'text-left' : 'text-right'} text-xl md:text-md mb-3 p-4`}>
                  {message}
                </div>
              ))}
            </div>
            <div className="message-input p-2">
              <div className="flex">
                <input type="text" placeholder="Type your message..." className="w-full p-2" />
                <button className="btn border p-2 bg-white">Send</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MessageTemplate;
