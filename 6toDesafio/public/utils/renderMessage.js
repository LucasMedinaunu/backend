import { formatDateAndTime } from "./index.js";
const chatMessages = document.getElementById('messages');

export const renderMessage = (message) => {
  const div = document.createElement('div');
  div.classList.add('bg-black');
  div.classList.add('p-2');
  div.classList.add('rounded');
  div.classList.add('mb-2');

  div.innerHTML = `
    <p class="meta f-1 fw-bold text-white">${message.user} <span>${formatDateAndTime(message.date)}</span></p>
    <p class="text f-1 bg-secondary text-white p-2 rounded">${message.message}</p>
  `;

  chatMessages.appendChild(div);
};