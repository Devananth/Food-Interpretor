import { React, useState } from "react";
import "./styles.css";

export default function App() {
  const [result, setResult] = useState("");

  var foodList = {
    "🍇": "Grapes",
    "🍈": "Melon",
    "🍉": "Watermelon",
    "🍊": "Tangerine",
    "🍋": "Lemon",
    "🍌": "Banana",
    "🍍": "Pineapple",
    "🥭": "Mango",
    "🍎": "Red Apple",
    "🍏": "Green Apple",
    "🍐": "Pear",
    "🍑": "Peach",
    "🍒": "Cherries",
    "🍓": "Strawberry",
    "🥥": "Coconut",
    "🥑": "Avocado",
    "🍆": "Eggplant",
    "🥔": "Potato",
    "🥕": "Carrot",
    "🌽": "Ear of Corn"
  };

  var foods = Object.keys(foodList);

  console.log(foods);

  function changeHandler(event) {
    setResult("");

    let userIp = event.target.value;

    if (foods.includes(userIp)) {
      setResult(foodList[userIp]);
    } else {
      setResult("Sorry , We Don't have this food in our Database");
    }
  }

  return (
    <div className="App">
      <nav>
        <h1>Food Interpretor</h1>
      </nav>

      <div>
        <input
          type="text"
          placeholder="Enter the food Emoji here"
          onChange={(e) => changeHandler(e)}
        />
      </div>

      <div className="output">{result}</div>

      <div>
        {foods.map((food) => {
          return (
            <div
              className="food-emoji"
              onClick={() => setResult(foodList[food])}
            >
              {food}
            </div>
          );
        })}
      </div>
    </div>
  );
}
