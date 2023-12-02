import React, { useState, useEffect } from 'react';
import '../App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone, faMapMarkerAlt, faTrash, faEdit } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';

function ContactUsScreen() {
  

  const [formData, setFormData] = useState({
    username: '',
    email: '',
    message: '',
  });

  const [comments, setComments] = useState([]);
  const [selectedMessage, setSelectedMessage] = useState(null); // State for selected message

  useEffect(() => {
    axios.get('http://localhost:3001/message/message')
      .then((response) => {
        setComments(response.data);
      })
      .catch((err) => console.error('Error fetching comments:', err));
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if(selectedMessage != null ){
      handleUpdate();
      window.location.reload();
    }
else{
  const apiUrl = 'http://localhost:3001/message/';

  const messageData = {
    username: formData.username,
    email: formData.email,
    message: formData.message,
  };

  axios.post(apiUrl, messageData)
    .then((result) => {
      console.log(result.data);
      window.location.reload();
 
    })
    .catch((err) => console.error('Error during message submission:', err));
};
}
    

  const handleEdit = (message) => {
    console.log(message)
    setSelectedMessage(message);
    setFormData({
      username: message.username,
      email: message.email || '', 
      message: message.message,
    });
    window.scrollTo(0, 0)
  };

  const handleUpdate = async () => {
    const apiUrl = 'http://localhost:3001/message/'+selectedMessage._id;

    const messageData = {
      username: formData.username,
      email: formData.email,
      message: formData.message,
    };

    axios.put(apiUrl, messageData)
      .then((result) => {
        console.log(result.data);
        
      })
      .catch((err) => console.error('Error during message submission:', err));

    setSelectedMessage(null);
    setFormData({
      username: '',
      email: '',
      message: '',
    });
  };

  const handleDelete = (messageId) => {
    const apiUrl = `http://localhost:3001/message/${messageId}`;
    axios.delete(apiUrl)
      .then(() => {
        setComments(comments.filter(comment => comment._id !== messageId));
      })
      .catch((err) => console.error('Error deleting the message:', err));
  };

  return (
    <div>
      <Header/>
      <section className='full-content'>
      <section className="contact" id="contact">
      <div className='contactdetails'>
        
      <h1 className="contact-heading">
        <span>Contact</span> Us
      </h1>
      <div className="contact-row">
        <div className="content">
          <h3 className="contact-title">Contact info</h3>
          <div className="contact-info">
            <h4>
              <FontAwesomeIcon icon={faEnvelope} /> FarmFreash@gmail.com
            </h4>
            <h4>
              <FontAwesomeIcon icon={faPhone} /> +94-11-030-0989
            </h4>
            <h4>
              <FontAwesomeIcon icon={faPhone} /> +94-81-101-6908
            </h4>
            <h4>
              <FontAwesomeIcon icon={faMapMarkerAlt} /> 110, Hapugala, Galle.
            </h4>
          </div>
        </div>
        <div className="contact-form">
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="username"
              placeholder="Name"
              className="box"
              value={formData.username}
              onChange={handleChange}
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              className="box"
              value={formData.email}
              onChange={handleChange}
            />
            <textarea
              name="message"
              placeholder="Message"
              cols="30"
              rows="10"
              className="box message "
              value={formData.message}
              onChange={handleChange}
            ></textarea>
            <button type="submit" className="contact-submitbtn">
              Send <i className="fas fa-paper-plane"></i>
            </button>
          </form>
        </div>
      </div> 
      </div>
    </section>
    <div className='feedback-display'>
      <div >
        <div className="comments">
          <h3 className="contact-title">Feedback</h3>
        <div> 
        <ul className="list-group">
        {comments.map((comment) => (
        <li key={comment._id} className="list-group-item comment-item">
          <div className='contenct-box'>
          <div className="comment-content">
            <strong>Name:</strong> {comment.username}<br />
            <strong>Comment:</strong> {comment.message}
          </div>
          <div className="comment-actions">
            <div className="comment-actions-edit">
              <button onClick={() => handleEdit(comment)} className="btn btn-primary mr-2">
                <FontAwesomeIcon icon={faEdit} /> Edit
              </button>
            </div>
            <div className="comment-actions-delete">
              <button onClick={() => handleDelete(comment._id)} className="btn btn-danger">
                <FontAwesomeIcon icon={faTrash} />
              </button>
            </div>
          </div>
          </div>
          
        </li>
        ))}
       </ul>
      </div>
    </div>
    </div>
    </div>
    </section>
    <Footer/>
    </div>
  );
}

export default ContactUsScreen;
