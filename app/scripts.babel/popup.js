'use strict';

chrome.tabs.query({active: true, currentWindow: true}, tabs => {
  const currentTab = tabs[0];
  if(currentTab) {
    chrome.runtime.sendMessage({ action: 'GET_ELMS', tabid: currentTab.id }, response => {
      const table = document.getElementById('listTable');
      for (const elm of response.elms) {
        const row = table.insertRow(-1);
        const nameCell = row.insertCell(0);
        const valueCell = row.insertCell(1);
        nameCell.innerHTML = elm.name;
        valueCell.innerHTML = elm.value;
      }
    });
  }
});
