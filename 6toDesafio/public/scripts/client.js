import { renderMessage, validateInput } from '../utils/index.js';
const socket = io();

// VARIABLES
const chatForm = document.getElementById('chat-form');
const chatUsername = document.getElementById('username');
const chatMessage = document.getElementById('message');

// SOCKET EVENTS

// Get messages from server (messages).
socket.emit('messages');

// Show messages in DOM.
socket.on('messages', messages => {
  messages.forEach(message => renderMessage(message));
  console.log(`User with id ${socket.id} has connected!`);
});

// Show message in DOM. 
socket.on('message', message => {
  renderMessage(message);
});

// Message submit (chatForm).
chatForm.addEventListener('submit', e => {
  e.preventDefault();

  const user = chatUsername.value;
  const message = chatMessage.value;

  if (validateInput(user, message)) {
    socket.emit('chatMessage', { user, message, date: new Date() });
    chatMessage.value = '';
    chatMessage.focus();
  } else {
    alert('Please enter a username and message!');
    return;
  }
});