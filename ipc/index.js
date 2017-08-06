const ipc = require('electron').ipcRenderer;
const asyncBtn = document.getElementById('asyncBtn');
const syncBtn = document.getElementById('syncBtn');

asyncBtn.addEventListener('click', function(){
    console.log('Renderer msg 1')
    ipc.send('open-error-dialog');
    console.log('Renderer msg 2')
    
});

ipc.on('opened-error-dialog', function (event, arg) {
  const message = `Message reply: ${arg}`
  console.log(message);
});

syncBtn.addEventListener('click', function(){
    console.log('Renderer msg 3')
    const reply = ipc.sendSync('sync-message');
    console.log(reply);
    console.log('Renderer msg 4')
    
})

