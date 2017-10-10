const path = require('path')
const electron = require('electron')

const { app, BrowserWindow } = electron

app.on('ready', () => {
  app.dock.setIcon(
    path.join(__dirname, './src/assets/reddit-logo-64.png')
  )

  console.log('app is ready!')

  const mainWindow = new BrowserWindow({
    width: 1366,
    height: 720,
  })

  mainWindow.loadURL('http://localhost:3000')

})
