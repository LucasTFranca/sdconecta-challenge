import React from "react";

import "./NotFound.css";

function NotFound(): JSX.Element {
  return (
    <div className="not-found-container">
      <h1>404</h1>
      <span className="not-found-span">Not Found</span>
      <span>The resource request could not be found on this server!</span>
    </div>
  );
}

export default NotFound;
