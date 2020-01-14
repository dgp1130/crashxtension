chrome.devtools.panels.create(
  'DevTools Panel' /* title */,
  '' /* iconPath */,
  '/panel.html' /* pagePath */,
  (panel) => {
    console.log('DevTools panel loaded.', panel);
  },
);
