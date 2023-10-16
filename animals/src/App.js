import { useState } from "react";
import AnimalButton from "./AnimalButton";
import AnimalShow from "./AnimalShow";
import "./App.css";

function getRandomAnimal() {
  const animals = ["cat", "dog", "cow", "horse", "gator", "bird"];
  const randomIndex = Math.floor(Math.random() * animals.length);
  return animals[randomIndex];
}

function App() {
  const [animal, setAnimal] = useState([]);

  const handleClick = () => {
    setAnimal([...animal, getRandomAnimal()]);
  };

  const renderedAnimals = animal.map((animal, index) => {
    return <AnimalShow key={index} type={animal} />;
  });

  return (
    <div className="App">
      <AnimalButton onClick={handleClick} />
      <div className="animal-list">{renderedAnimals}</div>
    </div>
  );
}

export default App;
