import React, { useState, useEffect } from "react";
import "./DetailHr.css";


const InteractiveHr = ({ currentImageIndex, images }) => {
  const [boldPercentage, setBoldPercentage] = useState(0);

  useEffect(() => {
    setBoldPercentage(((currentImageIndex + 1) / images.length) * 100);
  }, [currentImageIndex, images]);

  return (
    <div className="interactive-hr-container">
      <hr
        className="interactive-hr"
        style={{
          background: `linear-gradient(to right, black ${boldPercentage}%, lightgray ${boldPercentage}%)`,
        }}
      />
    </div>
  );
};

export default InteractiveHr;
