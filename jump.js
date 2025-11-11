(function() {
  const s = document.createElement('script');
  s.src = chrome.runtime.getURL('injector.js');
  (document.head || document.documentElement).appendChild(s);
  s.onload = function() {
    s.remove();
  };
  document.addEventListener('H5P_TARGET_TIME', function(e) {
    const targetTime = e.detail.targetTime;
    const command = "$0.currentTime = " + targetTime;
    navigator.clipboard.writeText(command).then(() => {
      console.log("ok so this is the time where the question is: " + targetTime + " seconds");
      console.log("copied ts to clipboard: " + command);
      console.log("pls select vido in DevTools inspector and paste in console, and enter thats it");
    }).catch(err => {
      console.log("ok so this is the time where the question is: " + targetTime + " seconds");
      console.log("copy ts: " + command);
      console.log("pls select video in DevTools inspector and paste in console, and enter thats it");
    });
  });
})();