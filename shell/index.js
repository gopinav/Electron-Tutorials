const shell = require('electron').shell
const openBtn = document.getElementById('openBtn')
openBtn.addEventListener('click', function (event) {
  shell.showItemInFolder('E:\\ElectronFolder\\test')
  shell.openItem('E:\\ElectronFolder\\ytlogo.jpg')
  shell.openExternal('http://electron.atom.io')
})