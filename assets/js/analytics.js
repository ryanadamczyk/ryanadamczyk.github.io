(function () {
  const script = document.currentScript;
  if (!script) {
    return;
  }

  // Respect browser privacy signals before making any Analytics requests.
  if (navigator.globalPrivacyControl === true ||
      navigator.doNotTrack === '1' || window.doNotTrack === '1') {
    return;
  }

  const measurementId = script.dataset.measurementId;
  if (!measurementId || !/^G-[A-Z0-9]+$/.test(measurementId)) {
    return;
  }

  window.dataLayer = window.dataLayer || [];
  window.gtag = function () {
    window.dataLayer.push(arguments);
  };

  window.gtag('js', new Date());
  window.gtag('config', measurementId, {
    allow_google_signals: false,
    allow_ad_personalization_signals: false
  });

  const analyticsScript = document.createElement('script');
  analyticsScript.async = true;
  analyticsScript.src = 'https://www.googletagmanager.com/gtag/js?id=' + encodeURIComponent(measurementId);
  document.head.appendChild(analyticsScript);
})();
