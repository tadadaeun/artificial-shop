import React from "react";
import amplitude from "amplitude-js";

const useAmplitude = (config) => {
  const sendLog = React.useCallback(
    (log, label) => {
      amplitude.getInstance().logEvent(log, { ...config, label });
    },
    [config]
  );

  return { sendLog };
};

export default useAmplitude;
