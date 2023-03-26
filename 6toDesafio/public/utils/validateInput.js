export const validateInput = (user, message) => {
  if (!user || !message) {
    alert('Please enter a username and message.');
    return;
  } else if (user.length > 32) {
    alert('Username must be less than 32 characters.');
    return;
  } else if (message.length > 100) {
    alert('Message must be less than 100 characters.');
    return;
  } else if (message.length < 1) {
    alert('Message must be at least 1 character.');
    return;
  } else { 
    return true;
  }
};