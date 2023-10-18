// React code
import React, { useState } from "react";
import "./Progress.css";

const Progress = () => {
  const [progress, setProgress] = useState(50);

  const handleClick = () => {
    if (progress<100){
        setProgress(progress + 10);
    }
    else{
        setProgress(progress==0)
    }
  };

  return (
    <div className="progress-container">
        <h2>Challenge Me!</h2>
      <div className="progress-bar">
        <div className="progress-bar-inner" style={{ width: progress + "%" }}>
          <span>{progress}%</span>
        </div>
      </div>
      <button className="progress-button" onClick={handleClick}>
        Click me!
      </button>
    </div>
  );
};

export default Progress;
