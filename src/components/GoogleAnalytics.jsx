import React from "react";
import { useLocation } from "react-router-dom";

import ReactGA from "react-ga4";

const GoogleAnalytics = ({ children }) => {
  const location = useLocation();

  React.useEffect(() => {
    //TODO: 타이밍 트래킹
  }, [location]);

  return <>{children}</>;
};

export default GoogleAnalytics;
