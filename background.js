function generateUsername(info, tab) {
  // Implement logic to fetch and generate username
}

chrome.contextMenus.create({
  title: 'Generate Username',
  contexts: ['editable'],
  onclick: generateUsername
});
