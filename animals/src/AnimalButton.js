import React from "react";
import "./AnimalButton.css";

function AnimalButton(props) {
  return (
    <button className="add-animal-button" {...props}>
      Add Animal
    </button>
  );
}

export default AnimalButton;
