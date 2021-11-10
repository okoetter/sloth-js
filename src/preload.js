// preload with contextIsolation enabled
const { contextBridge, ipcRenderer } = require("electron");
const fs = require("fs");

contextBridge.exposeInMainWorld("api", {
  ipcRenderer,
  fileExists: (file) => fs.existsSync(file)
});
