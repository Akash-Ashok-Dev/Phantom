import { ServiceWorkerMLCEngineHandler } from "@mlc-ai/web-llm";

new ServiceWorkerMLCEngineHandler();

chrome.action.onClicked.addListener((tab) => {
  chrome.sidePanel.open({ tabId: tab.id! });
});

chrome.runtime.onMessage.addListener((message, sender) => {
  if (message.type === "EXPLAIN_NOW") {
    // Open sidebar
    chrome.sidePanel.open({ tabId: sender.tab!.id! });
    // Forward to sidebar
    chrome.runtime.sendMessage(message).catch(() => {});
  }
});