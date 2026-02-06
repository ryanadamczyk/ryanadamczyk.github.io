(function () {
  const script = document.currentScript;
  if (!script) {
    return;
  }

  const measurementId = script.dataset.measurementId;
  if (!measurementId) {
    return;
  }

  window.dataLayer = window.dataLayer || [];
  window.gtag = function () {
    window.dataLayer.push(arguments);
  };

  window.gtag('js', new Date());
  window.gtag('config', measurementId);
})();
