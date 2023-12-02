import React, { useState, useEffect } from 'react';
import axios from 'axios';

const MessageList = () => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const response = await axios.get('http://localhost:3001/message/message');
        setMessages(response.data);
      } catch (error) {
        console.error('Error fetching messages:', error);
      }
    };

    fetchMessages();
  }, []);

  const handleDeleteMessage = async (messageId) => {
    try {
      await axios.delete(`http://localhost:3001/message/${messageId}`);
      setMessages(messages.filter((message) => message._id !== messageId));
    } catch (error) {
      console.error('Error deleting message:', error);
    }
  };

  return (
    <div className="container mt-5">
      <h2 className="mb-4 text-center ">All Messages</h2>
       <table className="table table-striped table-bordered">
       <thead className="table-dark">
        <tr>
          <th>Username</th>
          <th>Email</th>
          <th>Message</th>
          <th>Action</th>
        </tr>
       </thead>
      <tbody>
       {messages.map((message) => (
        <tr key={message._id}>
          <td>{message.username}</td>
          <td>{message.email}</td>
          <td>{message.message}</td>
          <td>
            <button
              className="btn btn-danger"
              onClick={() => handleDeleteMessage(message._id)}
            >
              Delete
            </button>
          </td>
        </tr>
       ))}
      </tbody>
     </table>
    </div>

  );
};

export default MessageList;
