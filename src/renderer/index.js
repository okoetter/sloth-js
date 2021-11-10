// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// No Node.js APIs are available in this process because
// `nodeIntegration` is turned off. Use `preload.js` to
// selectively enable features needed in the rendering
// process.
var dropTarget = document.querySelector(".status");

// open dialog to select slo file
document.querySelector(".btn__open").addEventListener("click", async () => {
  const sloFile = await api.ipcRenderer.invoke("show-open-dialog");
  if (!sloFile.canceled && sloFile.filePaths.length > 0 && api.fileExists(sloFile.filePaths[0])) {
    dropTarget.innerText = "Loaded slo file: " + sloFile.filePaths[0];
  }
});

// prevent dropping files anywhere
document.addEventListener("dragover", e => {
  e.preventDefault();
  e.dataTransfer.effectAllowed = "none";
  e.dataTransfer.dropEffect = "none";
}, false);
document.addEventListener("drop", e => {
  e.preventDefault();
  e.dataTransfer.effectAllowed = "none";
  e.dataTransfer.dropEffect = "none";
}, false);

// prevent dropping files in status bar
dropTarget.addEventListener("dragover", e => {
  e.preventDefault();
  e.stopPropagation();
  e.dataTransfer.effectAllowed = "copy";
  e.dataTransfer.dropEffect = "copy";
});
dropTarget.addEventListener("drop", (e) => {
  e.preventDefault();
  e.stopPropagation();

  if(e.dataTransfer.files.length > 0) dropTarget.innerText = "Loaded slo file: " + e.dataTransfer.files[0].path;
});
