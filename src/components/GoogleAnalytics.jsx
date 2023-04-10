import React from "react";
import { useLocation } from "react-router-dom";

import ReactGA from "react-ga4";

const GoogleAnalytics = ({ children }) => {
  const location = useLocation();

  React.useEffect(() => {
    //TODO: 타이밍 트래킹
    (function () {
      var startTime = new Date().getTime();
      var lastSentTime = startTime;

      function sendTimeOnPage() {
        var currentTime = new Date().getTime();
        var timeOnPage = Math.round((currentTime - lastSentTime) / 1000);

        if (timeOnPage > 0 && typeof gtag !== "undefined") {
          ReactGA.gtag("event", "time_on_page", {
            value: timeOnPage,
          });
        }

        lastSentTime = currentTime;
      }

      window.addEventListener("visibilitychange", function () {
        if (document.visibilityState === "hidden") {
          sendTimeOnPage();
        }
      });

      window.setInterval(function () {
        if (document.visibilityState === "visible") {
          sendTimeOnPage();
        }
      }, 10000); // Send time on page every 10 seconds

      window.addEventListener("beforeunload", function () {
        sendTimeOnPage();
      });
    })();
  }, [location]);

  return <>{children}</>;
};

export default GoogleAnalytics;
