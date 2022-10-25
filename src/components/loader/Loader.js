import React from "react";
import "./loader.css"

const messages = {
  loading: "Loading..."
};
const Loader = () => {
  return <div className="load-container">
    <div className="row">
      <div className="loader load-item"></div>
    </div>
  </div>;
};

export default Loader;
