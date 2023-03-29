import React from "react";
import { Link } from "react-router-dom";

const IntroPage = () => {
  return (
    <div>
      <h1>Home</h1>
      <Link to="/home">
        <button>Go</button>
      </Link>
    </div>
  );
};

export default IntroPage;
