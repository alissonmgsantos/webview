const { BrowserWindow } = require('electron');
const path = require('path');
const config = require('./config');

function CreateWindow() {
  const window = new BrowserWindow({
    width: config.width,
    height: config.height,
    frame: config.frame,
    center: config.center,
    alwaysOnTop: config.alwaysOnTop,
    webPreferences: {
      nodeIntegration: true,
    },
    icon: path.resolve(__dirname, '..', 'assets', 'images', 'webview.png'),
  });

  window.setAlwaysOnTop(true);

  window.webContents.setWindowOpenHandler(({ url }) => {
    window.loadURL(url);
    return { action: 'deny' };
  });

  window.loadFile('index.html');
  return window;
}

module.exports = { CreateWindow };
