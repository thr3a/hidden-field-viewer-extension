'use strict';

var list = {};

chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
  if(message.action === 'SEND_ELMS') {
    list[message.tabid] = message.elms;
  }

  if (message.action === 'GET_TABID') {
    sendResponse({id: sender.tab.id});
  }

  if (message.action === 'GET_ELMS') {
    sendResponse({elms: list[message.tabid]});
  }

});

chrome.tabs.onUpdated.addListener((tabId, changeInfo, tabInfo) => {
  chrome.browserAction.setBadgeText({
    tabId: tabId,
    text: `${tabId}`
  });
  console.log(tabId);
});

