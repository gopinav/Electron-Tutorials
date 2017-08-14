const ipc = require('electron').ipcRenderer;
const asyncBtn = document.getElementById('asyncBtn');
const syncBtn = document.getElementById('syncBtn');

asyncBtn.addEventListener('click', function(){
    console.log('async msg 1')
    ipc.send('async-message');
    console.log('async msg 2')
    
});

ipc.on('async-message-reply', function (event, arg) {
  const message = `Message reply: ${arg}`
  console.log(message);
});

syncBtn.addEventListener('click', function(){
    console.log('sync msg 1')
    const reply = ipc.sendSync('sync-message');
    console.log(reply);
    console.log('sync msg 2')
    
})

