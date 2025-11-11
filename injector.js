(function() {
  const isIframe = window.location.href.includes('/h5p/embed.php');
  
  if (!isIframe) {
    return;
  }
  
  let attempts = 0;
  const maxAttempts = 10;
  
  function tryGetTime() {
    if (window.H5PIntegration && H5PIntegration.contents) {
      try {
        const key = Object.keys(H5PIntegration.contents)[0];
        const data = JSON.parse(H5PIntegration.contents[key].jsonContent);
        const targetTime = data.interactiveVideo.assets.interactions[0].duration.from;
        document.dispatchEvent(new CustomEvent('H5P_TARGET_TIME', {
          detail: { targetTime: targetTime }
        }));
        
      } catch (e) {
      }
    } else if (attempts++ < maxAttempts) {
      setTimeout(tryGetTime, 300);
    }
  }
  
  tryGetTime();
  
})();
