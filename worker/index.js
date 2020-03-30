"use strict";
// https://github.com/shadowwalker/next-pwa/tree/master/examples/custom-worker  file for custom sw

// need to develop custom service worker for offline fisrt app, cache resourses etc

// listen to message event from window
self.addEventListener("message", event => {
  // HOW TO TEST THIS?
  // Run this in your browser console:
  //     window.navigator.serviceWorker.controller.postMessage({command: 'log', message: 'hello world'})
  // OR use next-pwa injected workbox object
  //     window.workbox.messageSW({command: 'log', message: 'hello world'})
  console.log(event.data);
});

self.addEventListener("fetch", event => {
  //   console.log("You fetched " + event.request.url);
});
