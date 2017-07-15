const {app, BrowserWindow} = require('electron')
const path = require('path')
const url = require('url')


let defaultWindow, dimWindow, colorWindow, framelessWindow;
let parentWindow, childWindow;

function createWindows () {
/* 
defaultWindow = new BrowserWindow();
dimWindow = new BrowserWindow({width: 400, height: 400, maxWidth: 600, maxHeight: 600});
colorWindow = new BrowserWindow({backgroundColor: '#228b22'});
framelessWindow = new BrowserWindow({frame: false, backgroundColor: '#800000'});
*/

parentWindow = new BrowserWindow({title: 'Parent'});
childWindow = new BrowserWindow({parent: parentWindow, modal: true,show: false, title: 'Child'});
childWindow.loadURL('https://github.com');
childWindow.once('ready-to-show', () => {
  childWindow.show()
});
}

app.on('ready', createWindows);


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
