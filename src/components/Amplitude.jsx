import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

import amplitude from "amplitude-js";

const TrackingProvider = ({ children }) => {
  const location = useLocation();
  const userId = sessionStorage.getItem("userId");
  const navigate = useNavigate();

  React.useEffect(() => {
    if (location.pathname === "/") {
      return;
    }

    if (!userId) {
      navigate("/");
      alert("Please enter user ID");
    } else {
      amplitude.getInstance().logEvent(`${location.pathname} page viewed`);
    }
  }, [location]);

  return <>{children}</>;
};

export default TrackingProvider;
