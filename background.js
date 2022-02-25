let color = "#3aa757";
chrome.runtime.onInstalled.addListener(() => {
  console.log("Installed");
  // chrome.storage.sync.set({ color });
  // console.log("Default background color set to %cgreen", `color: ${color}`);

  chrome.contextMenus.create({
    id: "sampleContextmenu",
    title: "Sample Context Menu",
    contexts: ["selection"],
  });
});

chrome.bookmarks.onCreated.addListener(() => {
  alert("Bookmark saved !!");
});
