const { Tray: ElectronTray, Menu } = require('electron');
const path = require('path');

function Tray(browserWindow) {
  const icon = path.resolve(__dirname, '..', 'assets', 'images', 'webview.png');
  const tray = new ElectronTray(icon);
  tray.setToolTip('Webview');

  const contextMenu = Menu.buildFromTemplate([
    {
      label: 'Settings',
      enabled: false,
    },
    {
      label: 'Open',
      click(e) {
        browserWindow.show();
      },
    },
    {
      label: 'Always on top',
      type: 'checkbox',
      checked: true,
      click(e) {
        browserWindow.setAlwaysOnTop(e.checked);
      },
    },
    {
      type: 'separator',
    },
    {
      label: 'Close',
      role: 'quit',
      enabled: true,
    },
  ]);

  tray.setContextMenu(contextMenu);
  return tray;
}

module.exports = { Tray };
