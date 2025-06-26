
// Toggle Start Menu
startBtn.addEventListener("click", () => {
  startMenu.classList.toggle("hidden");
});

// Right Click Context Menu on Desktop
desktop.addEventListener("contextmenu", (e) => {
  e.preventDefault();
  contextMenu.style.top = `${e.clientY}px`;
  contextMenu.style.left = `${e.clientX}px`;
  contextMenu.classList.remove("hidden");
});

// Hide Context Menu on Left Click
window.addEventListener("click", (e) => {
  // Only hide if not right-click
  if (e.button !== 2) {
    contextMenu.classList.add("hidden");
  }
});

// Create New Folder
if (newFolderBtn) {
  newFolderBtn.addEventListener("click", () => {
    const folder = document.createElement("div");
    folder.className = "icon";
    folder.innerHTML = `
      <img src="https://img.icons8.com/fluency/48/folder-invoices.png" />
      <span>New Folder</span>
    `;
    desktop.appendChild(folder);
  });
}

// Refresh Page
if (refreshBtn) {
  refreshBtn.addEventListener("click", () => {
    location.reload();
  });
}
