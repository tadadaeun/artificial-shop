import React from "react";
import amplitude from "amplitude-js";

const useAmplitude = (defaultConfig) => {
  const sendLog = React.useCallback(
    (log, config) => {
      amplitude.getInstance().logEvent(log, { ...defaultConfig, ...config });
    },
    [defaultConfig]
  );

  return { sendLog };
};

export default useAmplitude;
