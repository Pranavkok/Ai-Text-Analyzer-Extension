chrome.runtime.onInstalled.addListener(() => {
    chrome.contextMenus.create({
        id: "analyzeText",
        title: "Analyzer",
        contexts: ["selection"]
    });
});


chrome.contextMenus.onClicked.addListener((info) => {
    if (info.menuItemId === "analyzeText" && info.selectionText) {
        chrome.storage.local.set({ selectedText: info.selectionText }, () => {
            chrome.action.openPopup();
        });
    }
});