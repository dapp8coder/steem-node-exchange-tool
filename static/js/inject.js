var script = document.createElement('script');
script.type = 'text/javascript';
script.src = chrome.extension.getURL('js/override.js');
(document.head || document.documentElement).appendChild(script);