(function(d, iswebview){
  // display detected user-agent
  var uaElement = d.querySelector('.ua');
  uaElement.innerHTML = navigator.userAgent;

  // display if we are in a WebView or not
  var el = d.querySelector(iswebview(navigator.userAgent) ? '.is-webview' : '.is-not-webview');
  el.removeAttribute('hidden');
})(window.document, isWebview);
