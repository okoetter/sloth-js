// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// No Node.js APIs are available in this process because
// `nodeIntegration` is turned off. Use `preload.js` to
// selectively enable features needed in the rendering
// process.
document.querySelector(".btn__open").addEventListener("click", async () => {
  const sloFile = await api.ipcRenderer.invoke("show-open-dialog");
  if (!sloFile.canceled && sloFile.filePaths.length > 0 && api.fileExists(sloFile.filePaths[0]))
    document.querySelector(".status").innerText = "Loaded slo file: " + sloFile.filePaths[0];
});
