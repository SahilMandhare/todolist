import React from "react";

const Error = (props) => {
  return (
    <div className="error-main">
      <div className="red"></div>
      <div className="error-title">{props.error}</div>
    </div>
  );
};

export default Error;
