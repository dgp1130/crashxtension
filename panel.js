chrome.devtools.network.onRequestFinished.addListener((req) => {
  // No error is ever logged.
  if (chrome.runtime.lastError) console.error(chrome.runtime.lastError);

  // Logs many requests before page crashes.
  console.log(req);
});
