import React from 'react';

const ProgressContext = React.createContext({
  completionPercentage: 0,
  setCompletionPercentage: () => {}
});

export default ProgressContext;
