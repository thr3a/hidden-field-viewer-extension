'use strict';

chrome.runtime.sendMessage({ action: 'GET_TABID' }, response => {
  const hiddenElmsList = [];
  const hiddenElms = document.querySelectorAll('input[type="hidden"]');
  if( hiddenElms.length > 0) {
    for (const elm of hiddenElms) {
      hiddenElmsList.push({
        name: elm.name,
        value: elm.value
      });
      // console.log(elm);
    }
    
    chrome.runtime.sendMessage({
      tabid: response.id,
      action: 'SEND_ELMS',
      elms: hiddenElmsList
    });
  }
});
