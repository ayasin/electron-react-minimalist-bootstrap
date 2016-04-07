'use strict';

const app = require('app');
const path = require('path');
const BrowserWindow = require('browser-window');
const Menu = require('menu');

const AppMenuTemplate = require('./menus/application.menu.js');

var mainWindow = null;

app.on('ready', () => {
  mainWindow = new BrowserWindow(
    {
      height: 700,
      width: 800,
      frame: true,
      resizeable: true
    }
  );
  mainWindow.loadURL('file://' + path.join(__dirname, '..', 'screens', 'main.window.html'));

  Menu.setApplicationMenu(Menu.buildFromTemplate(AppMenuTemplate));

  // uncomment the following line to debug the frontend portion of the application
  // mainWindow.openDevTools();
});

app.on('window-all-closed', () => {
  app.quit();
});
