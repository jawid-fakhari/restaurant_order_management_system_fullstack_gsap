import React from "react";
import Food from "./components/Foods/Food/Food";

function App() {
  return (
    <div>
      <Food
        imgSrc="https://assets.tmecosys.com/image/upload/t_web767x639/img/recipe/ras/Assets/0346a29a89ef229b1a0ff9697184f944/Derivates/cb5051204f4a4525c8b013c16418ae2904e737b7.jpg"
        name="Spaghetti Carbonara"
        ingredients="Pasta, Eggs, Pecorino Cheese, Pancetta, Black Pepper"
        price={12.99}
      />
    </div>
  );
}

export default App;
