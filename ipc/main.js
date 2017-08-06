const electron = require("electron");
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;
//const {app, BrowserWindow} = require('electron')
const path = require('path')
const url = require('url')
const ipc = electron.ipcMain;
const dialog = require('electron').dialog;

let win;

function createWindow() {

  win = new BrowserWindow({ width: 800, height: 600 })

  win.loadURL(url.format({
    pathname: path.join(__dirname, 'index.html'),
    protocol: 'file:',
    slashes: true
  }));

  let contents = win.webContents
  console.log(contents)

  win.on('closed', () => {
    win = null
  });
}



ipc.on('open-error-dialog', function (event, arg) {
  event.sender.send('opened-error-dialog', 'Main process opened the error dialog.');
})

ipc.on('sync-message', function (event, arg) {
  event.returnValue = 'sync-reply';
})

app.on('ready', createWindow);


app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (win === null) {
    createWindow();
  }
});
