import React, { useState } from "react";

const withToggleVisibility = (WrappedComponent) => {
  return function EnhancedComponent(props) {
    const [isVisible, setIsVisible] = useState(false);

    const toggle = () => setIsVisible(!isVisible);

    return (
      <WrappedComponent
        isVisible={isVisible}
        toggle={toggle}
        {...props}
      />
    );
  };
};

export default withToggleVisibility;
