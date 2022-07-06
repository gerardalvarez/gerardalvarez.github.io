import React from "react";
import "./style.css";
const err = () => {
  return (
    <div id="notfound">
      <div class="notfound">
        <div class="notfound-404">
          <h1>404</h1>
          <h2>Page not found</h2>
        </div>
        <a href="/">Home</a>
      </div>
    </div>
  );
};

export default err;
