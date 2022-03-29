const { app, ipcMain } = require('electron');
const { CreateWindow } = require('./CreateWindow');
const { Tray } = require('./Tray');
function App() {
  const window = CreateWindow();
  Tray(window);
}

app
  .whenReady()
  .then(App)
  .catch((err) => console.error(err));

app.on('window-all-closed', () => {
  app.quit();
});
