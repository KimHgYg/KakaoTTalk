const socket = io();
let username = '';

function login() {
  username = document.getElementById('username').value;
  if (username) {
    document.getElementById('login').style.display = 'none';
    document.getElementById('chat').style.display = 'block';
  }
}

document.getElementById('form').addEventListener('submit', (e) => {
  e.preventDefault();
  if (input.value) {
    socket.emit('chat message', { user: username, message: input.value });
    input.value = '';
  }
});

socket.on('chat message', (data) => {
  const item = document.createElement('li');
  item.textContent = `${data.user}: ${data.message}`;
  messages.appendChild(item);
  window.scrollTo(0, document.body.scrollHeight);
});