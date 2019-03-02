'use strict';

chrome.tabs.query({active: true, currentWindow: true}, tabs => {
  const currentTab = tabs[0];
  if(currentTab) {
    chrome.runtime.sendMessage({ action: 'GET_ELMS', tabid: currentTab.id }, response => {
      console.log(response);
    });
  }
});
