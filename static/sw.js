console.log("Service Worker Loaded...");
import { precacheAndRoute } from "workbox-precaching/precacheAndRoute";
precacheAndRoute(self.__WB_MANIFEST);

self.addEventListener("fetch", function(event) {
  // it can be empty if you just want to get rid of that error
});
