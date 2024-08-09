import React from "react";

const FlexContainer = ({ children }) => {
  return (
    <div className="flex items-start justify-start transition-all duration-500">
      {children}
    </div>
  );
};

export default FlexContainer;
